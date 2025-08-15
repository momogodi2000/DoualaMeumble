const CACHE_NAME = 'appartements-douala-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html'
];

const CACHE_STRATEGIES = {
  static: ['css', 'js', 'woff', 'woff2', 'ttf', 'eot'],
  images: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'ico'],
  api: ['/api/']
};

self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();
            const fileExtension = url.pathname.split('.').pop();
            
            if (CACHE_STRATEGIES.static.includes(fileExtension) || 
                CACHE_STRATEGIES.images.includes(fileExtension)) {
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });
            }

            return response;
          })
          .catch(() => {
            if (request.destination === 'document') {
              return caches.match('/offline.html');
            }
            
            if (CACHE_STRATEGIES.images.includes(url.pathname.split('.').pop())) {
              return new Response(
                '<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" fill="#9ca3af">Image indisponible</text></svg>',
                { 
                  headers: { 'Content-Type': 'image/svg+xml' }
                }
              );
            }
          });
      })
  );
});

self.addEventListener('push', (event) => {
  console.log('[SW] Push received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle notification',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Voir l\'offre',
        icon: '/icons/action-explore.png'
      },
      {
        action: 'close',
        title: 'Fermer',
        icon: '/icons/action-close.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Appartements Douala', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event);
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/appartements')
    );
  } else if (event.action === 'close') {
    event.notification.close();
  } else {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'newsletter-signup') {
    event.waitUntil(syncNewsletterSignup());
  }
});

async function syncNewsletterSignup() {
  try {
    const pendingSignups = await getStoredNewsletterSignups();
    
    for (const signup of pendingSignups) {
      try {
        await submitNewsletterSignup(signup);
        await removeStoredNewsletterSignup(signup.id);
      } catch (error) {
        console.error('[SW] Failed to sync newsletter signup:', error);
      }
    }
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

async function getStoredNewsletterSignups() {
  return new Promise((resolve) => {
    const stored = localStorage.getItem('pending-newsletter-signups');
    resolve(stored ? JSON.parse(stored) : []);
  });
}

async function removeStoredNewsletterSignup(id) {
  const stored = await getStoredNewsletterSignups();
  const filtered = stored.filter(signup => signup.id !== id);
  localStorage.setItem('pending-newsletter-signups', JSON.stringify(filtered));
}

async function submitNewsletterSignup(signup) {
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signup)
  });
  
  if (!response.ok) {
    throw new Error('Newsletter signup failed');
  }
}