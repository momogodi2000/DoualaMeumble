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
    fr: 'Quartier r�sidentiel moderne et s�curis� de Douala, r�put� pour ses infrastructures de qualit� et sa proximit� avec le centre-ville.',
    en: 'Modern and secure residential quarter of Douala, renowned for its quality infrastructure and proximity to the city center.'
  },
  characteristics: {
    type: 'Quartier r�sidentiel premium',
    security: 'Tr�s �lev�e',
    accessibility: 'Excellente',
    infrastructure: 'Moderne',
    population: 'Classe moyenne et sup�rieure'
  },
  amenities: {
    healthcare: [
      'H�pital G�n�ral de Douala (10 km)',
      'Clinique des Sp�cialit�s (5 km)',
      'Pharmacies modernes'
    ],
    education: [
      '�coles internationales',
      'Lyc�e de Bonamoussadi',
      'Centres de formation professionnelle'
    ],
    shopping: [
      'Mahima Shopping Center',
      'Hypermarch� Casino',
      'Boutiques locales',
      'March� de Bonamoussadi'
    ],
    dining: [
      'Restaurants gastronomiques',
      'Fast-foods internationaux',
      'Cuisine locale authentique',
      'Caf�s et p�tisseries'
    ],
    entertainment: [
      'Complexes cin�matographiques',
      'Centres de fitness',
      'Parcs et espaces verts',
      'Centres culturels'
    ],
    transport: [
      'Taxi urbains',
      'Moto-taxis',
      'Transport en commun',
      'Location de v�hicules'
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
      'Quartier moderne avec infrastructures de qualit�',
      'Excellente s�curit� 24h/24',
      'Proximit� des centres commerciaux',
      'Acc�s facile au centre-ville',
      'Environnement calme et r�sidentiel',
      'Services m�dicaux de proximit�',
      '�tablissements scolaires r�put�s',
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
      'Si�ges sociaux r�gionaux'
    ],
    coworking: [
      'Espaces de coworking �quip�s',
      'Salles de conf�rence',
      'Internet haut d�bit'
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
      'S�curit� 24h/24',
      'Parking priv�',
      'WiFi haut d�bit',
      'Climatisation',
      'Cuisine �quip�e',
      'M�nage inclus'
    ]
  },
  weather: {
    climate: 'Tropical humide',
    temperature: {
      min: 22,
      max: 32,
      average: 27
    },
    rainfall: 'Mod�r�e � �lev�e',
    bestVisitPeriods: [
      'D�cembre - F�vrier (saison s�che)',
      'Juin - Ao�t (petite saison s�che)'
    ]
  },
  culturalSites: [
    'Centre culturel fran�ais',
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
      apps: ['Taximan', 'Uber (limit�)'],
      averageCost: '1000-3000 FCFA/course'
    },
    motorcycle: {
      availability: 'Tr�s bonne',
      cost: '200-500 FCFA/course courte'
    }
  },
  emergencyServices: {
    police: '117',
    fire: '118',
    medical: '119',
    hospitals: [
      'H�pital G�n�ral de Douala: +237 233 42 34 56',
      'Clinique des Sp�cialit�s: +237 233 43 65 78'
    ]
  },
  connectivity: {
    internet: {
      providers: ['Orange', 'MTN', 'Nexttel'],
      speed: 'Haut d�bit disponible',
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
      'WiFi gratuit haut d�bit',
      'Climatisation silencieuse',
      'Cuisine �quip�e moderne',
      'TV c�ble/satellite',
      'Lave-linge automatique',
      'R�frig�rateur cong�lateur',
      'Micro-ondes',
      'S�curit� 24h/7j',
      'Parking gratuit s�curis�',
      'M�nage hebdomadaire',
      'Linge fourni'
    ],
    features: [
      'Balcon avec vue d�gag�e',
      'Design moderne et �pur�',
      'Quartier r�sidentiel calme',
      'Proche centres commerciaux',
      'Acc�s rapide centre-ville'
    ],
    images: [
      '/images/salon bonamousadi.jpg',
      '/images/cuisine bonamousadi.jpg',
      '/images/chambre bonamousadi.jpg',
      '/images/salle a marche bonamousadi.jpg'
    ],
    available: true,
    featured: true,
    rating: {
      average: 4.8,
      reviews: 24
    },
    description: {
      fr: 'Studio moderne et �l�gant situ� dans le quartier r�sidentiel de Bonamoussadi. Parfait pour les professionnels et voyageurs recherchant confort et tranquillit�.',
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
      'WiFi gratuit haut d�bit',
      'Climatisation multi-split',
      'Cuisine �quip�e premium',
      'TV c�ble dans chaque chambre',
      'Lave-linge et lave-vaisselle',
      'Grand r�frig�rateur am�ricain',
      'Four et micro-ondes',
      'Balcon spacieux',
      'S�curit� 24h/7j',
      'Parking privatif',
      'M�nage bi-hebdomadaire',
      'Linge et serviettes fournis',
      'Service concierge'
    ],
    features: [
      'Appartement de standing',
      'Vue panoramique sur la ville',
      'R�sidence s�curis�e',
      'Piscine commune',
      'Salle de sport',
      'Jardin paysager'
    ],
    images: [
      '/images/salon vip bonamousadi.jpg',
      '/images/salon 3 bonamousadi.jpg',
      '/images/cuisiwn 2 bonamousadi.jpg',
      '/images/salon bonamousadi.jpg',
      '/images/cuisine bonamousadi.jpg'
    ],
    available: true,
    featured: true,
    rating: {
      average: 4.9,
      reviews: 18
    },
    description: {
      fr: 'Magnifique appartement T2 de standing dans une r�sidence moderne de Bonamoussadi. Id�al pour familles ou s�jours d\'affaires prolong�s.',
      en: 'Beautiful luxury T2 apartment in a modern residence in Bonamoussadi. Ideal for families or extended business stays.'
    }
  }
];

export default BONAMOUSSADI_LOCATION;