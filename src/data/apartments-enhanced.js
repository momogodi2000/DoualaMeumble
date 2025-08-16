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
  {
    id: 'apt_001',
    title: 'Studio Executive Bonapriso',
    subtitle: 'Luxe • Moderne • Sécurisé',
    type: APARTMENT_TYPES.STUDIO,
    quarter: QUARTERS.BONAPRISO,
    
    // Location Details
    address: 'Avenue Charles de Gaulle, Bonapriso',
    coordinates: { lat: 4.0546, lng: 9.7679 },
    
    // Property Details
    surface: 35,
    bedrooms: 0,
    bathrooms: 1,
    capacity: 2,
    floor: 3,
    
    // Pricing (FCFA)
    pricing: {
      daily: 35000,
      weekly: 210000, // -10%
      monthly: 750000, // -25%
      extraPersonFee: 5000,
      cleaningFee: 15000,
      deposit: 100000
    },
    
    // Availability
    availability: {
      status: 'available',
      nextAvailable: '2025-08-16',
      minimumStay: 1,
      maximumStay: 90
    },
    
    // Images
    images: [
      '/images/apartments/apt_001/main.jpg',
      '/images/apartments/apt_001/bedroom.jpg',
      '/images/apartments/apt_001/kitchen.jpg',
      '/images/apartments/apt_001/bathroom.jpg',
      '/images/apartments/apt_001/balcony.jpg'
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
      average: 4.8,
      count: 127,
      breakdown: {
        5: 85,
        4: 30,
        3: 8,
        2: 3,
        1: 1
      }
    },
    
    // SEO & Marketing
    badges: [
      { type: 'new', label: 'Nouveau' },
      { type: 'premium', label: 'Premium' }
    ],
    
    featured: true,
    popular: true,
    
    // Business Logic
    instantBooking: true,
    whatsappMessage: "Bonjour ! Je souhaite réserver le Studio Executive Bonapriso pour les dates suivantes :",
    
    // Additional Info
    description: `
      Découvrez ce studio moderne au cœur de Bonapriso, parfait pour 
      les professionnels et couples. Entièrement meublé avec goût, 
      il offre tout le confort nécessaire pour un séjour d'exception.
    `,
    
    highlights: [
      'Vue panoramique sur la ville',
      'Quartier sécurisé 24h/7j',
      'Proche centres d\'affaires',
      'Parking privé inclus'
    ],
    
    rules: [
      'Non-fumeur',
      'Animaux non autorisés',
      'Fêtes interdites',
      'Check-in: 14h - Check-out: 12h'
    ]
  },
  
  {
    id: 'apt_002',
    title: 'Appartement Business Bonanjo',
    subtitle: 'Central • Connecté • Professionnel',
    type: APARTMENT_TYPES.T2,
    quarter: QUARTERS.BONANJO,
    
    address: 'Rue Joss, Centre-ville Bonanjo',
    coordinates: { lat: 4.0483, lng: 9.7042 },
    
    surface: 55,
    bedrooms: 2,
    bathrooms: 1,
    capacity: 4,
    floor: 2,
    
    pricing: {
      daily: 45000,
      weekly: 270000,
      monthly: 900000,
      extraPersonFee: 7500,
      cleaningFee: 20000,
      deposit: 150000
    },
    
    availability: {
      status: 'available',
      nextAvailable: '2025-08-20',
      minimumStay: 2,
      maximumStay: 180
    },
    
    images: [
      '/images/apartments/apt_002/main.jpg',
      '/images/apartments/apt_002/living.jpg',
      '/images/apartments/apt_002/bedroom1.jpg',
      '/images/apartments/apt_002/bedroom2.jpg',
      '/images/apartments/apt_002/kitchen.jpg'
    ],
    
    amenities: [
      AMENITIES.WIFI,
      AMENITIES.AC,
      AMENITIES.KITCHEN,
      AMENITIES.TV,
      AMENITIES.WASHING,
      AMENITIES.IRON,
      AMENITIES.CLEANING,
      AMENITIES.CONCIERGE,
      AMENITIES.SECURITY
    ],
    
    rating: {
      average: 4.6,
      count: 89,
      breakdown: {
        5: 58,
        4: 22,
        3: 7,
        2: 2,
        1: 0
      }
    },
    
    badges: [
      { type: 'available', label: 'Disponible' },
      { type: 'business', label: 'Business' }
    ],
    
    featured: false,
    popular: true,
    instantBooking: true,
    
    whatsappMessage: "Bonjour ! Je m'intéresse à l'Appartement Business Bonanjo :",
    
    description: `
      Appartement idéal pour les séjours d'affaires au centre de Douala. 
      Situé à proximité des administrations et banques, il dispose de 
      tout l'équipement nécessaire pour allier travail et confort.
    `,
    
    highlights: [
      'Centre administratif',
      'Transport facile',
      'Internet très haut débit',
      'Espace de travail dédié'
    ],
    
    rules: [
      'Parfait pour business',
      'WiFi professionnel',
      'Check-in flexible',
      'Service conciergerie'
    ]
  },
  
  {
    id: 'apt_003',
    title: 'Villa Familiale Akwa',
    subtitle: 'Spacieux • Familial • Moderne',
    type: APARTMENT_TYPES.T3,
    quarter: QUARTERS.AKWA,
    
    address: 'Boulevard de la Liberté, Akwa',
    coordinates: { lat: 4.0691, lng: 9.7351 },
    
    surface: 85,
    bedrooms: 3,
    bathrooms: 2,
    capacity: 6,
    floor: 1,
    
    pricing: {
      daily: 65000,
      weekly: 390000,
      monthly: 1300000,
      extraPersonFee: 10000,
      cleaningFee: 25000,
      deposit: 200000
    },
    
    availability: {
      status: 'available',
      nextAvailable: '2025-08-18',
      minimumStay: 3,
      maximumStay: 365
    },
    
    images: [
      '/images/apartments/apt_003/main.jpg',
      '/images/apartments/apt_003/living.jpg',
      '/images/apartments/apt_003/master-bedroom.jpg',
      '/images/apartments/apt_003/bedroom2.jpg',
      '/images/apartments/apt_003/bedroom3.jpg',
      '/images/apartments/apt_003/kitchen.jpg',
      '/images/apartments/apt_003/terrace.jpg'
    ],
    
    amenities: [
      AMENITIES.WIFI,
      AMENITIES.AC,
      AMENITIES.KITCHEN,
      AMENITIES.TV,
      AMENITIES.WASHING,
      AMENITIES.IRON,
      AMENITIES.BALCONY,
      AMENITIES.VIEW,
      AMENITIES.PARKING,
      AMENITIES.CLEANING,
      AMENITIES.CONCIERGE,
      AMENITIES.SECURITY
    ],
    
    rating: {
      average: 4.9,
      count: 156,
      breakdown: {
        5: 132,
        4: 18,
        3: 4,
        2: 2,
        1: 0
      }
    },
    
    badges: [
      { type: 'premium', label: 'Premium' },
      { type: 'family', label: 'Familial' },
      { type: 'popular', label: 'Populaire' }
    ],
    
    featured: true,
    popular: true,
    instantBooking: true,
    
    whatsappMessage: "Bonjour ! Je souhaite réserver la Villa Familiale Akwa :",
    
    description: `
      Magnifique villa familiale dans le quartier dynamique d'Akwa. 
      Parfaite pour les familles et groupes, elle offre espace, 
      confort et tous les services premium de Douala Luxury Stays.
    `,
    
    highlights: [
      'Idéale pour familles',
      'Grande terrasse privée',
      'Quartier animé et sûr',
      'Services premium inclus'
    ],
    
    rules: [
      'Enfants bienvenus',
      'Terrasse privée',
      'Parking pour 2 voitures',
      'Service ménage quotidien'
    ]
  },
  
  {
    id: 'apt_004',
    title: 'Résidence Executive Bonamoussadi',
    subtitle: 'Premium • Moderne • Exclusif',
    type: APARTMENT_TYPES.T3,
    quarter: QUARTERS.BONAMOUSSADI,
    
    address: 'Avenue de l\'Indépendance, Bonamoussadi',
    coordinates: { lat: 4.0891, lng: 9.7123 },
    
    surface: 120,
    bedrooms: 3,
    bathrooms: 2,
    capacity: 6,
    floor: 2,
    
    pricing: {
      daily: 75000,
      weekly: 450000,
      monthly: 1500000,
      extraPersonFee: 12000,
      cleaningFee: 30000,
      deposit: 250000
    },
    
    availability: {
      status: 'available',
      nextAvailable: '2025-08-16',
      minimumStay: 2,
      maximumStay: 365
    },
    
    // Enhanced photo gallery with categories
    images: [
      '/images/apartments/apt_004/main.jpg',
      '/images/apartments/apt_004/living-room.jpg',
      '/images/apartments/apt_004/master-bedroom.jpg',
      '/images/apartments/apt_004/bedroom2.jpg',
      '/images/apartments/apt_004/bedroom3.jpg',
      '/images/apartments/apt_004/kitchen.jpg',
      '/images/apartments/apt_004/bathroom1.jpg',
      '/images/apartments/apt_004/bathroom2.jpg',
      '/images/apartments/apt_004/balcony.jpg',
      '/images/apartments/apt_004/exterior.jpg'
    ],
    
    // Photo gallery organized by categories
    photoGallery: {
      exterior: [
        { url: '/images/apartments/apt_004/exterior.jpg', caption: 'Vue extérieure de la résidence' },
        { url: '/images/apartments/apt_004/entrance.jpg', caption: 'Entrée principale sécurisée' },
        { url: '/images/apartments/apt_004/parking.jpg', caption: 'Parking privé' }
      ],
      living: [
        { url: '/images/apartments/apt_004/living-room.jpg', caption: 'Salon spacieux avec TV 4K' },
        { url: '/images/apartments/apt_004/dining.jpg', caption: 'Espace repas élégant' },
        { url: '/images/apartments/apt_004/balcony.jpg', caption: 'Balcon avec vue panoramique' }
      ],
      bedrooms: [
        { url: '/images/apartments/apt_004/master-bedroom.jpg', caption: 'Chambre principale avec dressing' },
        { url: '/images/apartments/apt_004/bedroom2.jpg', caption: 'Chambre d\'invités' },
        { url: '/images/apartments/apt_004/bedroom3.jpg', caption: 'Bureau/chambre flexible' }
      ],
      kitchen: [
        { url: '/images/apartments/apt_004/kitchen.jpg', caption: 'Cuisine moderne entièrement équipée' },
        { url: '/images/apartments/apt_004/kitchen-detail.jpg', caption: 'Électroménager haut de gamme' }
      ],
      bathrooms: [
        { url: '/images/apartments/apt_004/bathroom1.jpg', caption: 'Salle de bain principale avec baignoire' },
        { url: '/images/apartments/apt_004/bathroom2.jpg', caption: 'Salle d\'eau avec douche italienne' }
      ]
    },
    
    // Video presentations
    videos: [
      {
        id: 'tour_apt_004',
        title: 'Visite Virtuelle Complète',
        description: 'Découvrez chaque recoin de cette magnifique résidence',
        thumbnail: '/images/apartments/apt_004/video-thumb-tour.jpg',
        url: '/videos/apartments/apt_004/virtual-tour.mp4',
        duration: '3:45',
        type: 'tour'
      },
      {
        id: 'presentation_apt_004',
        title: 'Présentation de la Résidence',
        description: 'Vue d\'ensemble des équipements et services',
        thumbnail: '/images/apartments/apt_004/video-thumb-presentation.jpg',
        url: '/videos/apartments/apt_004/presentation.mp4',
        duration: '2:30',
        type: 'presentation'
      },
      {
        id: 'neighborhood_apt_004',
        title: 'Découverte du Quartier Bonamoussadi',
        description: 'Explorez les environs et commodités',
        thumbnail: '/images/apartments/apt_004/video-thumb-neighborhood.jpg',
        url: '/videos/apartments/apt_004/neighborhood.mp4',
        duration: '4:15',
        type: 'neighborhood'
      }
    ],
    
    amenities: [
      AMENITIES.WIFI,
      AMENITIES.AC,
      AMENITIES.KITCHEN,
      AMENITIES.TV,
      AMENITIES.WASHING,
      AMENITIES.IRON,
      AMENITIES.BALCONY,
      AMENITIES.VIEW,
      AMENITIES.PARKING,
      AMENITIES.CLEANING,
      AMENITIES.CONCIERGE,
      AMENITIES.SECURITY
    ],
    
    rating: {
      average: 4.9,
      count: 89,
      breakdown: {
        5: 78,
        4: 8,
        3: 2,
        2: 1,
        1: 0
      }
    },
    
    badges: [
      { type: 'new', label: 'Nouveau' },
      { type: 'premium', label: 'Premium' },
      { type: 'executive', label: 'Executive' }
    ],
    
    featured: true,
    popular: true,
    instantBooking: true,
    
    whatsappMessage: "Bonjour ! Je souhaite réserver la Résidence Executive Bonamoussadi :",
    
    description: `
      Découvrez l'excellence à Bonamoussadi avec cette résidence executive exceptionnelle. 
      Située dans le quartier le plus prisé de Douala, elle offre un cadre de vie 
      prestigieux avec tous les services haut de gamme.
    `,
    
    highlights: [
      'Quartier résidentiel premium',
      'Vue panoramique sur la ville',
      'Proximité écoles internationales',
      'Sécurité renforcée 24h/7j'
    ],
    
    rules: [
      'Résidence familiale',
      'Animaux sur demande',
      'Événements privés autorisés',
      'Service ménage quotidien inclus'
    ]
  }
];

// Business Logic Functions
export const getApartmentById = (id) => {
  return APARTMENTS_DATA.find(apt => apt.id === id);
};

export const getApartmentsByQuarter = (quarterId) => {
  return APARTMENTS_DATA.filter(apt => apt.quarter.id === quarterId);
};

export const getFeaturedApartments = () => {
  return APARTMENTS_DATA.filter(apt => apt.featured);
};

export const getPopularApartments = () => {
  return APARTMENTS_DATA.filter(apt => apt.popular);
};

export const getAvailableApartments = () => {
  return APARTMENTS_DATA.filter(apt => apt.availability.status === 'available');
};

export const filterApartments = (filters) => {
  return APARTMENTS_DATA.filter(apartment => {
    // Price filter
    if (filters.priceRange) {
      const price = apartment.pricing.daily;
      if (price < filters.priceRange.min || price > filters.priceRange.max) {
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
  const total = subtotal + cleaningFee;
  
  return {
    basePrice,
    extraGuestFees,
    cleaningFee,
    subtotal,
    total,
    nights,
    guests,
    savings: nights >= 7 ? (apartment.pricing.daily * nights - basePrice) : 0
  };
};