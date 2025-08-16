/**
 * PWA Manager - Enhanced Progressive Web App utilities
 * Handles installation, offline capabilities, and user engagement
 */

class PWAManager {
  constructor() {
    this.deferredPrompt = null;
    this.isOnline = navigator.onLine;
    this.installPromptShown = localStorage.getItem('installPromptShown') === 'true';
    this.isInstalled = this.checkIfInstalled();
    
    this.init();
  }

  init() {
    this.registerServiceWorker();
    this.setupInstallPrompt();
    this.setupOnlineOfflineHandlers();
    this.setupPeriodicSync();
    this.trackAppUsage();
  }

  // ============= SERVICE WORKER MANAGEMENT =============

  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        });

        console.log(' Service Worker registered successfully:', registration.scope);

        // Handle service worker updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              this.showUpdateAvailableNotification();
            }
          });
        });

        // Enable background sync
        if ('sync' in window.ServiceWorkerRegistration.prototype) {
          console.log(' Background sync enabled');
        }

        // Enable push notifications
        await this.setupPushNotifications(registration);

        return registration;
      } catch (error) {
        console.error('L Service Worker registration failed:', error);
      }
    }
  }

  async setupPushNotifications(registration) {
    if ('Notification' in window && 'PushManager' in window) {
      const permission = await Notification.requestPermission();
      
      if (permission === 'granted') {
        console.log(' Notification permission granted');
        
        try {
          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: this.urlBase64ToUint8Array(
              // Replace with your VAPID public key
              'YOUR_VAPID_PUBLIC_KEY'
            )
          });
          
          console.log(' Push subscription successful:', subscription);
          await this.sendSubscriptionToServer(subscription);
        } catch (error) {
          console.error('L Push subscription failed:', error);
        }
      }
    }
  }

  urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  async sendSubscriptionToServer(subscription) {
    // Send subscription to your server for push notifications
    try {
      await fetch('/api/notifications/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription)
      });
    } catch (error) {
      console.error('Failed to send subscription to server:', error);
    }
  }

  // ============= APP INSTALLATION =============

  setupInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('=¡ Install prompt available');
      e.preventDefault();
      this.deferredPrompt = e;
      
      // Show custom install UI after a delay
      if (!this.installPromptShown) {
        setTimeout(() => {
          this.showInstallPrompt();
        }, 30000); // Show after 30 seconds
      }
    });

    window.addEventListener('appinstalled', () => {
      console.log(' App was installed');
      this.isInstalled = true;
      this.hideInstallPrompt();
      this.trackInstallation();
    });
  }

  checkIfInstalled() {
    // Check if app is installed
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.navigator.standalone === true ||
           document.referrer.includes('android-app://');
  }

  async promptInstall() {
    if (!this.deferredPrompt) {
      console.log('L Install prompt not available');
      return false;
    }

    try {
      this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;
      
      console.log(`Install prompt result: ${outcome}`);
      
      if (outcome === 'accepted') {
        this.trackInstallAccepted();
      } else {
        this.trackInstallDismissed();
      }

      this.deferredPrompt = null;
      this.installPromptShown = true;
      localStorage.setItem('installPromptShown', 'true');
      
      return outcome === 'accepted';
    } catch (error) {
      console.error('Install prompt error:', error);
      return false;
    }
  }

  showInstallPrompt() {
    // Dispatch custom event for UI components to show install prompt
    window.dispatchEvent(new CustomEvent('showInstallPrompt', {
      detail: { canInstall: !!this.deferredPrompt }
    }));
  }

  hideInstallPrompt() {
    window.dispatchEvent(new CustomEvent('hideInstallPrompt'));
  }

  // ============= OFFLINE CAPABILITIES =============

  setupOnlineOfflineHandlers() {
    window.addEventListener('online', () => {
      console.log(' App is online');
      this.isOnline = true;
      this.showOnlineStatus();
      this.syncPendingData();
    });

    window.addEventListener('offline', () => {
      console.log('=ñ App is offline');
      this.isOnline = false;
      this.showOfflineStatus();
    });
  }

  showOnlineStatus() {
    window.dispatchEvent(new CustomEvent('connectionStatus', {
      detail: { isOnline: true }
    }));
  }

  showOfflineStatus() {
    window.dispatchEvent(new CustomEvent('connectionStatus', {
      detail: { isOnline: false }
    }));
  }

  async syncPendingData() {
    if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
      try {
        const registration = await navigator.serviceWorker.ready;
        await registration.sync.register('background-sync');
        console.log(' Background sync registered');
      } catch (error) {
        console.error('L Background sync registration failed:', error);
      }
    }
  }

  // ============= DATA PERSISTENCE =============

  async cacheUserData(key, data) {
    try {
      localStorage.setItem(`cache_${key}`, JSON.stringify({
        data,
        timestamp: Date.now(),
        version: '1.0.0'
      }));
      console.log(` Data cached: ${key}`);
    } catch (error) {
      console.error('L Failed to cache data:', error);
    }
  }

  getCachedData(key, maxAge = 24 * 60 * 60 * 1000) {
    try {
      const cached = localStorage.getItem(`cache_${key}`);
      if (!cached) return null;

      const { data, timestamp } = JSON.parse(cached);
      
      if (Date.now() - timestamp > maxAge) {
        localStorage.removeItem(`cache_${key}`);
        return null;
      }

      return data;
    } catch (error) {
      console.error('L Failed to get cached data:', error);
      return null;
    }
  }

  clearCache() {
    try {
      const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
      keys.forEach(key => localStorage.removeItem(key));
      console.log(' Cache cleared');
    } catch (error) {
      console.error('L Failed to clear cache:', error);
    }
  }

  // ============= BACKGROUND SYNC =============

  setupPeriodicSync() {
    if ('serviceWorker' in navigator && 'periodicSync' in window.ServiceWorkerRegistration.prototype) {
      navigator.serviceWorker.ready.then(registration => {
        return registration.periodicSync.register('content-sync', {
          minInterval: 24 * 60 * 60 * 1000, // 24 hours
        });
      }).then(() => {
        console.log(' Periodic sync registered');
      }).catch(error => {
        console.log('L Periodic sync registration failed:', error);
      });
    }
  }

  async scheduleBackgroundSync(tag, data = {}) {
    if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
      try {
        // Store data for background sync
        if (Object.keys(data).length > 0) {
          localStorage.setItem(`sync_${tag}`, JSON.stringify(data));
        }

        const registration = await navigator.serviceWorker.ready;
        await registration.sync.register(tag);
        
        console.log(` Background sync scheduled: ${tag}`);
        return true;
      } catch (error) {
        console.error('L Background sync scheduling failed:', error);
        return false;
      }
    }
    return false;
  }

  // ============= ANALYTICS & TRACKING =============

  trackAppUsage() {
    // Track app launch
    this.trackEvent('app_launch', {
      timestamp: Date.now(),
      isInstalled: this.isInstalled,
      isOnline: this.isOnline
    });

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.trackEvent('app_foreground');
      } else {
        this.trackEvent('app_background');
      }
    });

    // Track time spent
    this.startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeSpent = Date.now() - this.startTime;
      this.trackEvent('session_duration', { duration: timeSpent });
    });
  }

  trackInstallation() {
    this.trackEvent('app_installed', {
      timestamp: Date.now(),
      userAgent: navigator.userAgent
    });
  }

  trackInstallAccepted() {
    this.trackEvent('install_prompt_accepted');
  }

  trackInstallDismissed() {
    this.trackEvent('install_prompt_dismissed');
  }

  trackEvent(eventName, data = {}) {
    // Store events for later sync if offline
    const event = {
      name: eventName,
      data,
      timestamp: Date.now(),
      id: this.generateId()
    };

    const pendingEvents = JSON.parse(localStorage.getItem('pending_analytics') || '[]');
    pendingEvents.push(event);
    localStorage.setItem('pending_analytics', JSON.stringify(pendingEvents));

    // Try to send immediately if online
    if (this.isOnline) {
      this.sendAnalytics([event]);
    }
  }

  async sendAnalytics(events) {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ events })
      });

      // Remove sent events from pending
      const pending = JSON.parse(localStorage.getItem('pending_analytics') || '[]');
      const eventIds = events.map(e => e.id);
      const remaining = pending.filter(e => !eventIds.includes(e.id));
      localStorage.setItem('pending_analytics', JSON.stringify(remaining));

    } catch (error) {
      console.error('Failed to send analytics:', error);
    }
  }

  // ============= UTILITIES =============

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  showUpdateAvailableNotification() {
    window.dispatchEvent(new CustomEvent('updateAvailable', {
      detail: { 
        message: 'Une nouvelle version est disponible',
        action: () => window.location.reload()
      }
    }));
  }

  // ============= PUBLIC API =============

  getStatus() {
    return {
      isInstalled: this.isInstalled,
      isOnline: this.isOnline,
      canInstall: !!this.deferredPrompt,
      installPromptShown: this.installPromptShown
    };
  }

  async install() {
    return await this.promptInstall();
  }

  cache(key, data) {
    return this.cacheUserData(key, data);
  }

  retrieve(key, maxAge) {
    return this.getCachedData(key, maxAge);
  }

  sync(tag, data) {
    return this.scheduleBackgroundSync(tag, data);
  }

  track(event, data) {
    return this.trackEvent(event, data);
  }
}

// Create and export singleton instance
const pwaManager = new PWAManager();

export default pwaManager;

// Export utilities for direct use
export const {
  install,
  cache,
  retrieve,
  sync,
  track,
  getStatus
} = pwaManager;