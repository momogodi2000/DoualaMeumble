export const apartments = [
  {
    id: 'apt_001',
    title: 'Studio Premium Bonamoussadi',
    type: 'Studio',
    location: {
      quarter: 'Bonamoussadi',
      address: 'Rue des Palmiers',
      coordinates: [4.0889, 9.7442]
    },
    pricing: {
      daily: 28000,
      weekly: 170000,
      monthly: 580000
    },
    capacity: 2,
    rooms: 1,
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
    featured: true,
    available: true,
    description: 'Studio moderne et élégant situé dans le quartier résidentiel de Bonamoussadi. Parfait pour les professionnels et voyageurs recherchant confort et tranquillité.'
  },
  {
    id: 'apt_002',
    title: 'Appartement Makepe College Orchide',
    type: 'T2',
    location: {
      quarter: 'Makepe College Orchide',
      address: 'College Orchide, Makepe',
      coordinates: [4.0756, 9.7234]
    },
    pricing: {
      daily: 28000,
      weekly: 168000,
      monthly: 720000
    },
    capacity: 4,
    rooms: 2,
    bathrooms: 1,
    surface: 55,
    amenities: [
      'WiFi gratuit',
      'Climatisation',
      'Cuisine équipée',
      'TV câble',
      'Lave-linge',
      'Réfrigérateur',
      'Micro-ondes',
      'Balcon',
      'Sécurité 24h/7j',
      'Parking gratuit'
    ],
    images: [
      '/images/photo-akwa.jpg',
      '/images/photo-akwa-2.jpg',
      '/images/photo-bonapriso.jpg'
    ],
    featured: false,
    available: true,
    description: 'Appartement parfait pour étudiants et jeunes professionnels près du College Orchide. Proximité des universités et facilités de transport. Idéal pour partage à plusieurs.'
  },
  {
    id: 'apt_003',
    title: 'Nouvel Appartement Logbessou',
    type: 'T3',
    location: {
      quarter: 'Logbessou',
      address: 'Logbessou, Douala',
      coordinates: [4.0623, 9.7456]
    },
    pricing: {
      daily: 45000,
      weekly: 270000,
      monthly: 1170000
    },
    capacity: 6,
    rooms: 3,
    bathrooms: 2,
    surface: 75,
    amenities: [
      'WiFi gratuit',
      'Climatisation multi-split',
      'Cuisine équipée',
      'TV câble',
      'Lave-linge',
      'Lave-vaisselle',
      'Réfrigérateur',
      'Micro-ondes',
      'Balcon',
      'Terrasse',
      'Sécurité 24h/7j',
      'Parking gratuit',
      'Ménage inclus'
    ],
    images: [
      '/images/admin-sorel2.jpg',
      '/images/sorel-admin.jpg'
    ],
    featured: true,
    available: true,
    description: 'Tout nouveau appartement T3 dans le quartier en développement de Logbessou. Construction récente avec toutes les commodités modernes. Parfait pour familles ou groupes d\'amis.'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Marie Dubois',
    location: 'Paris, France',
    rating: 5,
    text: 'Séjour exceptionnel à Douala ! L\'appartement était impeccable et très bien situé. Le service client est remarquable.',
    apartment: 'Studio Moderne Bonapriso',
    date: '2024-12-15'
  },
  {
    id: 2,
    name: 'James Wilson',
    location: 'Londres, UK',
    rating: 5,
    text: 'Perfect for business travel. The apartment had everything I needed and the location in Bonapriso was ideal for my meetings.',
    apartment: 'Appartement T2 Bonanjo',
    date: '2024-11-28'
  },
  {
    id: 3,
    name: 'Sophie Martin',
    location: 'Yaoundé, Cameroun',
    rating: 5,
    text: 'Un service irréprochable ! L\'appartement était exactement conforme aux photos. Je recommande vivement pour un séjour à Douala.',
    apartment: 'Appartement T3 Akwa',
    date: '2024-12-02'
  },
  {
    id: 4,
    name: 'David Chen',
    location: 'Hong Kong',
    rating: 4,
    text: 'Great amenities and very clean. The security was excellent and I felt safe throughout my stay. Will definitely book again.',
    apartment: 'Studio Bali Premium',
    date: '2024-11-20'
  }
];

export const companyInfo = {
  name: 'Fresh Residence',
  shortName: 'Fresh Residence',
  description: 'Location d\'appartements meublés haut de gamme à Douala, Cameroun. Réservation simple via WhatsApp.',
  phone: '+237 656 46 70 51',
  whatsapp: '+237 656 46 70 51',
  email: 'contact@appartements-douala.com',
  address: 'Bonapriso, Douala, Cameroun',
  established: '2025',
  apartments: apartments.length,
  features: [
    'Réservation rapide via WhatsApp',
    'Appartements entièrement meublés',
    'Sécurité 24h/7j garantie',
    'WiFi gratuit dans tous les logements',
    'Service client réactif',
    'Localisation stratégique à Douala'
  ]
};