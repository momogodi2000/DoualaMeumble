/**
 * Bonamoussadi Location Data
 * Comprehensive information about Bonamoussadi quarter in Douala, Cameroon
 */

export const BONAMOUSSADI_LOCATION = {
  id: 'bonamoussadi',
  name: 'Bonamoussadi',
  city: 'Douala',
  country: 'Cameroun',
  region: 'Littoral',
  coordinates: {
    latitude: 4.0889,
    longitude: 9.7442
  },
  description: {
    fr: 'Quartier résidentiel moderne et sécurisé de Douala, réputé pour ses infrastructures de qualité et sa proximité avec le centre-ville.',
    en: 'Modern and secure residential quarter of Douala, renowned for its quality infrastructure and proximity to the city center.'
  },
  characteristics: {
    type: 'Quartier résidentiel premium',
    security: 'Très élevée',
    accessibility: 'Excellente',
    infrastructure: 'Moderne',
    population: 'Classe moyenne et supérieure'
  },
  amenities: {
    healthcare: [
      'Hôpital Général de Douala (10 km)',
      'Clinique des Spécialités (5 km)',
      'Pharmacies modernes'
    ],
    education: [
      'Écoles internationales',
      'Lycée de Bonamoussadi',
      'Centres de formation professionnelle'
    ],
    shopping: [
      'Mahima Shopping Center',
      'Hypermarché Casino',
      'Boutiques locales',
      'Marché de Bonamoussadi'
    ],
    dining: [
      'Restaurants gastronomiques',
      'Fast-foods internationaux',
      'Cuisine locale authentique',
      'Cafés et pâtisseries'
    ],
    entertainment: [
      'Complexes cinématographiques',
      'Centres de fitness',
      'Parcs et espaces verts',
      'Centres culturels'
    ],
    transport: [
      'Taxi urbains',
      'Moto-taxis',
      'Transport en commun',
      'Location de véhicules'
    ],
    banking: [
      'Banque Atlantique',
      'BICEC',
      'Afriland First Bank',
      'Distributeurs automatiques'
    ]
  },
  distances: {
    airportDouala: { km: 12, minutes: 20, mode: 'Voiture' },
    centreVille: { km: 8, minutes: 15, mode: 'Voiture' },
    portAutonome: { km: 10, minutes: 18, mode: 'Voiture' },
    akwa: { km: 8, minutes: 15, mode: 'Voiture' },
    bonapriso: { km: 6, minutes: 12, mode: 'Voiture' },
    bonanjo: { km: 9, minutes: 16, mode: 'Voiture' }
  },
  advantages: {
    fr: [
      'Quartier moderne avec infrastructures de qualité',
      'Excellente sécurité 24h/24',
      'Proximité des centres commerciaux',
      'Accès facile au centre-ville',
      'Environnement calme et résidentiel',
      'Services médicaux de proximité',
      'Établissements scolaires réputés',
      'Transports facilement accessibles'
    ],
    en: [
      'Modern quarter with quality infrastructure',
      'Excellent 24/7 security',
      'Close to shopping centers',
      'Easy access to city center',
      'Quiet and residential environment',
      'Nearby medical services',
      'Renowned educational establishments',
      'Easily accessible transport'
    ]
  },
  businessHub: {
    companies: [
      'Bureaux d\'entreprises internationales',
      'Centres d\'affaires modernes',
      'Sièges sociaux régionaux'
    ],
    coworking: [
      'Espaces de coworking équipés',
      'Salles de conférence',
      'Internet haut débit'
    ]
  },
  realEstate: {
    apartmentTypes: [
      'Studios modernes',
      'Appartements T2-T3',
      'Duplex de standing',
      'Penthouse de luxe'
    ],
    priceRange: {
      studio: { min: 200000, max: 400000 },
      t2: { min: 350000, max: 600000 },
      t3: { min: 500000, max: 900000 },
      t4: { min: 700000, max: 1200000 }
    },
    amenitiesIncluded: [
      'Sécurité 24h/24',
      'Parking privé',
      'WiFi haut débit',
      'Climatisation',
      'Cuisine équipée',
      'Ménage inclus'
    ]
  },
  weather: {
    climate: 'Tropical humide',
    temperature: {
      min: 22,
      max: 32,
      average: 27
    },
    rainfall: 'Modérée à élevée',
    bestVisitPeriods: [
      'Décembre - Février (saison sèche)',
      'Juin - Août (petite saison sèche)'
    ]
  },
  culturalSites: [
    'Centre culturel français',
    'Galeries d\'art contemporain',
    'Centres artisanaux locaux',
    'Lieux de culte modernes'
  ],
  transportation: {
    publicTransport: {
      available: true,
      types: ['Bus urbains', 'Taxis collectifs'],
      cost: 'Abordable'
    },
    taxi: {
      availability: 'Excellente',
      apps: ['Taximan', 'Uber (limité)'],
      averageCost: '1000-3000 FCFA/course'
    },
    motorcycle: {
      availability: 'Très bonne',
      cost: '200-500 FCFA/course courte'
    }
  },
  emergencyServices: {
    police: '117',
    fire: '118',
    medical: '119',
    hospitals: [
      'Hôpital Général de Douala: +237 233 42 34 56',
      'Clinique des Spécialités: +237 233 43 65 78'
    ]
  },
  connectivity: {
    internet: {
      providers: ['Orange', 'MTN', 'Nexttel'],
      speed: 'Haut débit disponible',
      reliability: 'Excellente'
    },
    mobile: {
      coverage: '4G/5G disponible',
      providers: ['Orange', 'MTN', 'Nexttel']
    }
  }
};

// Apartments specifically in Bonamoussadi
export const BONAMOUSSADI_APARTMENTS = [
  {
    id: 'apt_bon_001',
    title: 'Studio Premium Bonamoussadi',
    type: 'Studio',
    quarter: BONAMOUSSADI_LOCATION,
    address: 'Rue des Palmiers, Bonamoussadi',
    coordinates: [4.0889, 9.7442],
    pricing: {
      daily: 28000,
      weekly: 170000,
      monthly: 580000
    },
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    surface: 38,
    amenities: [
      'WiFi gratuit haut débit',
      'Climatisation silencieuse',
      'Cuisine équipée moderne',
      'TV câble/satellite',
      'Lave-linge automatique',
      'Réfrigérateur congélateur',
      'Micro-ondes',
      'Sécurité 24h/7j',
      'Parking gratuit sécurisé',
      'Ménage hebdomadaire',
      'Linge fourni'
    ],
    features: [
      'Balcon avec vue dégagée',
      'Design moderne et épuré',
      'Quartier résidentiel calme',
      'Proche centres commerciaux',
      'Accès rapide centre-ville'
    ],
    images: [
      '/images/bonamoussadi/studio-001-1.jpg',
      '/images/bonamoussadi/studio-001-2.jpg',
      '/images/bonamoussadi/studio-001-3.jpg',
      '/images/bonamoussadi/studio-001-4.jpg'
    ],
    available: true,
    featured: true,
    rating: {
      average: 4.8,
      reviews: 24
    },
    description: {
      fr: 'Studio moderne et élégant situé dans le quartier résidentiel de Bonamoussadi. Parfait pour les professionnels et voyageurs recherchant confort et tranquillité.',
      en: 'Modern and elegant studio located in the residential quarter of Bonamoussadi. Perfect for professionals and travelers seeking comfort and tranquility.'
    }
  },
  {
    id: 'apt_bon_002',
    title: 'Appartement T2 Bonamoussadi Luxe',
    type: 'T2',
    quarter: BONAMOUSSADI_LOCATION,
    address: 'Avenue de la Paix, Bonamoussadi',
    coordinates: [4.0895, 9.7438],
    pricing: {
      daily: 42000,
      weekly: 250000,
      monthly: 850000
    },
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    surface: 65,
    amenities: [
      'WiFi gratuit haut débit',
      'Climatisation multi-split',
      'Cuisine équipée premium',
      'TV câble dans chaque chambre',
      'Lave-linge et lave-vaisselle',
      'Grand réfrigérateur américain',
      'Four et micro-ondes',
      'Balcon spacieux',
      'Sécurité 24h/7j',
      'Parking privatif',
      'Ménage bi-hebdomadaire',
      'Linge et serviettes fournis',
      'Service concierge'
    ],
    features: [
      'Appartement de standing',
      'Vue panoramique sur la ville',
      'Résidence sécurisée',
      'Piscine commune',
      'Salle de sport',
      'Jardin paysager'
    ],
    images: [
      '/images/bonamoussadi/t2-002-1.jpg',
      '/images/bonamoussadi/t2-002-2.jpg',
      '/images/bonamoussadi/t2-002-3.jpg',
      '/images/bonamoussadi/t2-002-4.jpg',
      '/images/bonamoussadi/t2-002-5.jpg'
    ],
    available: true,
    featured: true,
    rating: {
      average: 4.9,
      reviews: 18
    },
    description: {
      fr: 'Magnifique appartement T2 de standing dans une résidence moderne de Bonamoussadi. Idéal pour familles ou séjours d\'affaires prolongés.',
      en: 'Beautiful luxury T2 apartment in a modern residence in Bonamoussadi. Ideal for families or extended business stays.'
    }
  }
];

export default BONAMOUSSADI_LOCATION;