/**
 * Enhanced Apartments Data Layer
 * Comprehensive apartment data with all premium features
 */

export const QUARTERS = {
  BONAPRISO: {
    id: 'bonapriso',
    name: 'Bonapriso',
    description: 'Quartier résidentiel haut de gamme',
    coordinates: { lat: 4.0546, lng: 9.7679 },
    features: ['Restaurants', 'Centres commerciaux', 'Bureaux', 'Sécurité 24h'],
    averagePrice: 45000,
    popularity: 95
  },
  BONANJO: {
    id: 'bonanjo',
    name: 'Bonanjo',
    description: 'Centre administratif et commercial',
    coordinates: { lat: 4.0483, lng: 9.7042 },
    features: ['Centre-ville', 'Administrations', 'Banques', 'Port'],
    averagePrice: 35000,
    popularity: 85
  },
  AKWA: {
    id: 'akwa',
    name: 'Akwa',
    description: 'Quartier moderne et dynamique',
    coordinates: { lat: 4.0691, lng: 9.7351 },
    features: ['Shopping', 'Restaurants', 'Vie nocturne', 'Business'],
    averagePrice: 40000,
    popularity: 80
  },
  BALI: {
    id: 'bali',
    name: 'Bali',
    description: 'Zone résidentielle calme',
    coordinates: { lat: 4.0123, lng: 9.7456 },
    features: ['Résidentiel', 'Écoles', 'Hôpitaux', 'Tranquille'],
    averagePrice: 30000,
    popularity: 70
  },
  BONAMOUSSADI: {
    id: 'bonamoussadi',
    name: 'Bonamoussadi',
    description: 'Quartier résidentiel moderne et sécurisé',
    coordinates: { lat: 4.0891, lng: 9.7123 },
    features: ['Résidentiel premium', 'Écoles internationales', 'Centres médicaux', 'Complexes sportifs'],
    averagePrice: 50000,
    popularity: 90
  },
  MAKEPE: {
    id: 'makepe',
    name: 'Makepe College Orchide',
    description: 'Quartier étudiant moderne avec toutes commodités',
    coordinates: { lat: 4.0756, lng: 9.7234 },
    features: ['Écoles', 'Universités', 'Transport', 'Commerces'],
    averagePrice: 35000,
    popularity: 85
  },
  LOGBESSOU: {
    id: 'logbessou',
    name: 'Logbessou',
    description: 'Quartier en développement avec constructions neuves',
    coordinates: { lat: 4.0623, lng: 9.7456 },
    features: ['Constructions neuves', 'Infrastructures modernes', 'Calme', 'Accessible'],
    averagePrice: 40000,
    popularity: 75
  }
};

export const APARTMENT_TYPES = {
  STUDIO: { id: 'studio', name: 'Studio', rooms: 0 },
  T1: { id: 't1', name: 'T1', rooms: 1 },
  T2: { id: 't2', name: 'T2', rooms: 2 },
  T3: { id: 't3', name: 'T3', rooms: 3 },
  T4: { id: 't4', name: 'T4+', rooms: 4 }
};

export const AMENITIES = {
  // Essential
  WIFI: { id: 'wifi', name: 'WiFi Haut Débit', category: 'essential', icon: '📶' },
  AC: { id: 'ac', name: 'Climatisation', category: 'essential', icon: '❄️' },
  KITCHEN: { id: 'kitchen', name: 'Cuisine Équipée', category: 'essential', icon: '🍳' },
  
  // Comfort
  TV: { id: 'tv', name: 'TV 4K', category: 'comfort', icon: '📺' },
  WASHING: { id: 'washing', name: 'Lave-linge', category: 'comfort', icon: '👕' },
  IRON: { id: 'iron', name: 'Fer à repasser', category: 'comfort', icon: '👔' },
  
  // Luxury
  BALCONY: { id: 'balcony', name: 'Balcon/Terrasse', category: 'luxury', icon: '🌅' },
  VIEW: { id: 'view', name: 'Vue Panoramique', category: 'luxury', icon: '👁️' },
  PARKING: { id: 'parking', name: 'Parking Privé', category: 'luxury', icon: '🚗' },
  
  // Services
  CLEANING: { id: 'cleaning', name: 'Service Ménage', category: 'service', icon: '🧹' },
  CONCIERGE: { id: 'concierge', name: 'Conciergerie 24h', category: 'service', icon: '🛎️' },
  SECURITY: { id: 'security', name: 'Sécurité 24h', category: 'service', icon: '🛡️' }
};

export const APARTMENTS_DATA = [
  // 01 - Studio Premium Bonamoussadi
  {
    id: 'apt_001',
    title: 'Studio Premium Bonamoussadi',
    subtitle: 'Luxe • Moderne • Sécurisé',
    type: APARTMENT_TYPES.STUDIO,
    quarter: QUARTERS.BONAMOUSSADI,
    
    // Location Details
    address: 'Bonamoussadi, Douala',
    coordinates: { lat: 4.0891, lng: 9.7123 },
    
    // Property Details
    surface: 38,
    bedrooms: 1,
    bathrooms: 1,
    capacity: 2,
    floor: 1,
    
    // Pricing (FCFA)
    pricing: {
      daily: 28000,
      weekly: 170000,
      monthly: 580000,
      extraPersonFee: 5000,
      cleaningFee: 15000,
      deposit: 56000
    },
    
    // Availability
    availability: {
      status: 'available',
      nextAvailable: '2025-08-20',
      minimumStay: 1,
      maximumStay: 90
    },
    
    // All Bonamoussadi Images from public/images
    images: [
      '/images/salon bonamousadi.jpg',
      '/images/cuisine bonamousadi.jpg', 
      '/images/chambre bonamousadi.jpg',
      '/images/salle a marche bonamousadi.jpg',
      '/images/salon vip bonamousadi.jpg',
      '/images/salon 3 bonamousadi.jpg',
      '/images/cuisiwn 2 bonamousadi.jpg',
      '/images/photo-bonamousadi.jpg',
      '/images/photo-bonamousadi-2.jpg',
      '/images/photo-bonamousadi-3.jpg',
      '/images/photo-bonamousadi-4.jpg',
      '/images/photo-bonamousadi-5.jpg'
    ],

    // Photo gallery organized by categories
    photoGallery: {
      exterior: [
        { url: '/images/photo-bonamousadi.jpg', caption: 'Vue extérieure de la résidence' },
        { url: '/images/photo-bonamousadi-2.jpg', caption: 'Entrée principale sécurisée' },
        { url: '/images/photo-bonamousadi-3.jpg', caption: 'Parking privé sécurisé' }
      ],
      living: [
        { url: '/images/salon bonamousadi.jpg', caption: 'Salon spacieux avec TV 4K' },
        { url: '/images/salon vip bonamousadi.jpg', caption: 'Espace VIP élégant' },
        { url: '/images/salon 3 bonamousadi.jpg', caption: 'Salon avec vue panoramique' }
      ],
      bedrooms: [
        { url: '/images/chambre bonamousadi.jpg', caption: 'Chambre confortable avec dressing' }
      ],
      kitchen: [
        { url: '/images/cuisine bonamousadi.jpg', caption: 'Cuisine moderne entièrement équipée' },
        { url: '/images/cuisiwn 2 bonamousadi.jpg', caption: 'Électroménager haut de gamme' }
      ],
      bathrooms: [
        { url: '/images/salle a marche bonamousadi.jpg', caption: 'Salle de bain moderne' }
      ]
    },

    // Video presentations from public/videos
    videos: [
      {
        id: 'studio_bonamoussadi_presentation',
        title: 'Présentation Studio Bonamoussadi',
        description: 'Découvrez notre magnifique studio à Bonamoussadi',
        thumbnail: '/images/salon bonamousadi.jpg',
        url: '/videos/Presentation studio bonamousadi.mp4',
        duration: '2:30',
        type: 'presentation'
      },
      {
        id: 'general_presentation',
        title: 'Présentation Générale',
        description: 'Vue d\'ensemble de nos services',
        thumbnail: '/images/salon vip bonamousadi.jpg',
        url: '/videos/presentation.mp4',
        duration: '1:45',
        type: 'overview'
      }
    ],
    
    // Amenities
    amenities: [
      AMENITIES.WIFI,
      AMENITIES.AC,
      AMENITIES.KITCHEN,
      AMENITIES.TV,
      AMENITIES.WASHING,
      AMENITIES.BALCONY,
      AMENITIES.PARKING,
      AMENITIES.CLEANING,
      AMENITIES.SECURITY
    ],
    
    // Reviews
    rating: {
      average: 4.9,
      count: 24,
      breakdown: {
        5: 20,
        4: 3,
        3: 1,
        2: 0,
        1: 0
      }
    },
    
    // SEO & Marketing
    badges: [
      { type: 'featured', label: 'Studio Vedette' },
      { type: 'premium', label: 'Premium' }
    ],
    
    featured: true,
    popular: true,
    
    // Business Logic
    instantBooking: true,
    whatsappMessage: "Bonjour ! Je souhaite réserver le Studio Premium Bonamoussadi :",
    
    // Additional Info
    description: `
      Découvrez ce magnifique studio premium au cœur de Bonamoussadi, parfait pour 
      les professionnels et couples. Entièrement meublé avec goût, 
      il offre tout le confort nécessaire pour un séjour d'exception.
      
      Quartier sécurisé 24h/7j avec toutes les commodités à proximité.
    `,
    
    highlights: [
      'Studio entièrement équipé et meublé',
      'Quartier résidentiel sécurisé 24h/7j',
      'Proche écoles et centres commerciaux',
      'Parking privé inclus',
      'WiFi haut débit gratuit',
      'Service de ménage inclus'
    ],
    
    rules: [
      'Non-fumeur',
      'Animaux non autorisés',
      'Fêtes interdites',
      'Check-in: 14h - Check-out: 12h',
      'Respect du voisinage requis'
    ]
  },

  // 02 - Appartement Makepe College Orchide  
  {
    id: 'apt_002',
    title: 'Appartement Makepe College Orchide',
    subtitle: 'Étudiant • Accessible • Moderne',
    type: APARTMENT_TYPES.T2,
    quarter: QUARTERS.MAKEPE,
    
    address: 'College Orchide, Makepe, Douala',
    coordinates: { lat: 4.0756, lng: 9.7234 },
    
    surface: 55,
    bedrooms: 2,
    bathrooms: 1,
    capacity: 4,
    floor: 2,
    
    pricing: {
      daily: 28000,
      weekly: 168000,
      monthly: 720000,
      extraPersonFee: 3000,
      cleaningFee: 12000,
      deposit: 56000
    },
    
    availability: {
      status: 'available',
      nextAvailable: '2025-08-20',
      minimumStay: 1,
      maximumStay: 365
    },
    
    images: [
      '/images/photo-akwa.jpg',
      '/images/photo-akwa-2.jpg',
      '/images/photo-bonapriso.jpg'
    ],

    photoGallery: {
      exterior: [
        { url: '/images/photo-akwa.jpg', caption: 'Vue extérieure du bâtiment' }
      ],
      living: [
        { url: '/images/photo-akwa-2.jpg', caption: 'Salon spacieux avec TV' }
      ],
      bedrooms: [
        { url: '/images/photo-bonapriso.jpg', caption: 'Chambres confortables' }
      ]
    },

    videos: [],
    
    amenities: [
      AMENITIES.WIFI,
      AMENITIES.AC,
      AMENITIES.KITCHEN,
      AMENITIES.TV,
      AMENITIES.WASHING,
      AMENITIES.PARKING,
      AMENITIES.SECURITY
    ],
    
    rating: {
      average: 4.6,
      count: 12,
      breakdown: {
        5: 7,
        4: 4,
        3: 1,
        2: 0,
        1: 0
      }
    },
    
    badges: [
      { type: 'student', label: 'Étudiant Friendly' }
    ],
    
    featured: false,
    popular: false,
    
    instantBooking: true,
    whatsappMessage: "Bonjour ! Je souhaite réserver l'Appartement Makepe College Orchide :",
    
    description: `
      Appartement parfait pour étudiants et jeunes professionnels près du College Orchide.
      Proximité des universités et facilités de transport. Idéal pour partage à plusieurs.
    `,
    
    highlights: [
      'Proche universités et écoles',
      'Transport accessible',
      'Parfait pour étudiants',
      'Prix abordable',
      'Sécurité assurée'
    ],
    
    rules: [
      'Non-fumeur',
      'Animaux non autorisés',
      'Respect du voisinage',
      'Check-in: 15h - Check-out: 11h'
    ]
  },

  // 03 - Nouvel Appartement Logbessou
  {
    id: 'apt_003', 
    title: 'Nouvel Appartement Logbessou',
    subtitle: 'Neuf • Moderne • Spacieux',
    type: APARTMENT_TYPES.T3,
    quarter: QUARTERS.LOGBESSOU,
    
    address: 'Logbessou, Douala',
    coordinates: { lat: 4.0623, lng: 9.7456 },
    
    surface: 75,
    bedrooms: 3,
    bathrooms: 2,
    capacity: 6,
    floor: 1,
    
    pricing: {
      daily: 45000,
      weekly: 270000,
      monthly: 1170000,
      extraPersonFee: 7000,
      cleaningFee: 20000,
      deposit: 90000
    },
    
    availability: {
      status: 'available',
      nextAvailable: '2025-08-20',
      minimumStay: 2,
      maximumStay: 365
    },
    
    images: [
      '/images/admin-sorel2.jpg',
      '/images/sorel-admin.jpg'
    ],

    photoGallery: {
      exterior: [
        { url: '/images/admin-sorel2.jpg', caption: 'Construction neuve moderne' }
      ],
      living: [
        { url: '/images/sorel-admin.jpg', caption: 'Espace de vie spacieux' }
      ]
    },

    videos: [],
    
    amenities: [
      AMENITIES.WIFI,
      AMENITIES.AC,
      AMENITIES.KITCHEN,
      AMENITIES.TV,
      AMENITIES.WASHING,
      AMENITIES.IRON,
      AMENITIES.BALCONY,
      AMENITIES.PARKING,
      AMENITIES.CLEANING,
      AMENITIES.SECURITY
    ],
    
    rating: {
      average: 4.8,
      count: 8,
      breakdown: {
        5: 6,
        4: 2,
        3: 0,
        2: 0,
        1: 0
      }
    },
    
    badges: [
      { type: 'new', label: 'Nouveau' },
      { type: 'spacious', label: 'Spacieux' }
    ],
    
    featured: true,
    popular: false,
    
    instantBooking: true,
    whatsappMessage: "Bonjour ! Je souhaite réserver le Nouvel Appartement Logbessou :",
    
    description: `
      Tout nouveau appartement T3 dans le quartier en développement de Logbessou.
      Construction récente avec toutes les commodités modernes. 
      Parfait pour familles ou groupes d'amis.
    `,
    
    highlights: [
      'Construction entièrement neuve',
      'Appartement spacieux T3',
      'Infrastructures modernes',
      'Quartier calme et résidentiel',
      'Idéal pour familles',
      'Équipements haut de gamme'
    ],
    
    rules: [
      'Non-fumeur',
      'Animaux sur demande',
      'Respect du voisinage requis',
      'Check-in: 14h - Check-out: 12h',
      'Maximum 6 personnes'
    ]
  }
];

// Business Logic Functions
export const getFeaturedApartments = () => {
  return APARTMENTS_DATA.filter(apartment => apartment.featured);
};

export const getPopularApartments = () => {
  return APARTMENTS_DATA.filter(apartment => apartment.popular);
};

export const getApartmentsByQuarter = (quarterId) => {
  return APARTMENTS_DATA.filter(apartment => apartment.quarter?.id === quarterId);
};

export const searchApartments = (searchQuery) => {
  const query = searchQuery.toLowerCase();
  return APARTMENTS_DATA.filter(apartment =>
    apartment.title.toLowerCase().includes(query) ||
    apartment.description.toLowerCase().includes(query) ||
    apartment.quarter?.name.toLowerCase().includes(query)
  );
};

export const filterApartments = (filters) => {
  return APARTMENTS_DATA.filter(apartment => {
    // Price range filter
    if (filters.priceRange) {
      const { min, max } = filters.priceRange;
      if (apartment.pricing.daily < min || apartment.pricing.daily > max) {
        return false;
      }
    }
    
    // Type filter
    if (filters.type && apartment.type.id !== filters.type) {
      return false;
    }
    
    // Quarter filter
    if (filters.quarter && apartment.quarter.id !== filters.quarter) {
      return false;
    }
    
    // Capacity filter
    if (filters.capacity && apartment.capacity < filters.capacity) {
      return false;
    }
    
    // Amenities filter
    if (filters.amenities && filters.amenities.length > 0) {
      const apartmentAmenityIds = apartment.amenities.map(a => a.id);
      const hasAllAmenities = filters.amenities.every(amenityId => 
        apartmentAmenityIds.includes(amenityId)
      );
      if (!hasAllAmenities) {
        return false;
      }
    }
    
    return true;
  });
};

export const calculatePricing = (apartment, nights, guests = 1) => {
  let basePrice = apartment.pricing.daily * nights;
  
  // Weekly discount (7+ nights)
  if (nights >= 7) {
    basePrice = apartment.pricing.weekly * Math.floor(nights / 7) + 
                 apartment.pricing.daily * (nights % 7);
  }
  
  // Monthly discount (30+ nights)
  if (nights >= 30) {
    basePrice = apartment.pricing.monthly * Math.floor(nights / 30) + 
                 apartment.pricing.daily * (nights % 30);
  }
  
  // Extra guest fees
  const extraGuests = Math.max(0, guests - apartment.capacity);
  const extraGuestFees = extraGuests * apartment.pricing.extraPersonFee * nights;
  
  const subtotal = basePrice + extraGuestFees;
  const cleaningFee = apartment.pricing.cleaningFee;
  
  return {
    subtotal,
    cleaningFee,
    total: subtotal + cleaningFee,
    nights,
    pricePerNight: apartment.pricing.daily,
    extraGuestFees
  };
};
