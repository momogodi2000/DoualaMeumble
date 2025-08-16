/**
 * Language Context for Multi-language Support
 * Supports French and English with persistent storage
 */

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation dictionaries
const translations = {
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      apartments: 'Appartements',
      about: 'À Propos',
      contact: 'Contact',
      language: 'Langue',
      theme: 'Thème'
    },
    
    // Home Page
    home: {
      title: 'DOUALA LUXURY STAYS - BONAMOUSSADI',
      subtitle: 'Votre Confort Premium à Bonamoussadi',
      description: 'Découvrez l\'art de vivre à Bonamoussadi dans nos appartements meublés haut de gamme. Quartier résidentiel moderne, réservation instantanée via WhatsApp, service conciergerie premium.',
      status: 'Nous sommes actuellement disponibles',
      response: 'Réponse sous 5-10 minutes',
      cta: {
        discover: 'Découvrir nos Appartements',
        reserve: 'Réservation Express',
        viewAll: 'Voir Tous nos Appartements Premium',
        explore: 'Explorer nos Appartements',
        immediate: 'Réservation Immédiate',
        video: 'Regarder la Présentation Vidéo',
        gallery: 'Voir la Galerie Photo'
      },
      location: {
        title: 'Bonamoussadi - Quartier Premium',
        description: 'Situé dans le quartier résidentiel le plus prisé de Douala, Bonamoussadi offre sécurité, modernité et proximité des services essentiels.',
        features: [
          'Écoles internationales à proximité',
          'Centres médicaux modernes', 
          'Complexes sportifs et loisirs',
          'Centres commerciaux premium',
          'Sécurité 24h/7j renforcée',
          'Transport facile vers le centre-ville'
        ]
      },
      stats: {
        apartments: 'Appartements Premium',
        clients: 'Clients Satisfaits',
        service: 'Excellence Service',
        concierge: 'Conciergerie Premium'
      },
      sections: {
        featured: 'Nos Appartements Vedettes',
        featuredDesc: 'Découvrez notre sélection premium d\'appartements meublés dans les quartiers les plus prestigieux de Douala.',
        whyChoose: 'Pourquoi Choisir Douala Luxury Stays ?',
        whyChooseDesc: 'Nous redéfinissons l\'expérience de l\'hébergement à Douala avec nos services premium.',
        discover: 'Découvrez Douala Premium',
        discoverDesc: 'Nos appartements sont stratégiquement situés dans les quartiers les plus attractifs et sécurisés.',
        experience: 'Prêt à Vivre l\'Expérience Premium ?',
        experienceDesc: 'Rejoignez nos clients satisfaits et découvrez pourquoi nous sommes la référence.'
      }
    },
    
    // Apartments
    apartments: {
      title: 'Nos Appartements Premium',
      filters: 'Filtres',
      price: 'Prix',
      type: 'Type',
      quarter: 'Quartier',
      capacity: 'Capacité',
      amenities: 'Équipements',
      clear: 'Effacer',
      apply: 'Appliquer',
      results: 'résultats trouvés',
      perNight: '/nuit',
      viewDetails: 'Voir détails',
      reserve: 'Réserver',
      photos: 'Photos',
      videos: 'Vidéos',
      virtualTour: 'Visite Virtuelle'
    },
    
    // Property Details
    property: {
      overview: 'Aperçu',
      amenities: 'Équipements',
      location: 'Localisation',
      reviews: 'Avis',
      pricing: 'Tarifs',
      gallery: 'Galerie',
      videos: 'Vidéos de Présentation',
      availability: 'Disponibilité',
      book: 'Réserver Maintenant',
      contact: 'Nous Contacter',
      features: 'Caractéristiques',
      rules: 'Règlement',
      bedrooms: 'chambres',
      bathrooms: 'salles de bain',
      surface: 'm²',
      guests: 'personnes'
    },
    
    // Features
    features: {
      security: {
        title: 'Sécurité Premium 24h/7j',
        desc: 'Gardiennage professionnel, caméras HD, accès sécurisé par badge dans tous nos établissements.'
      },
      whatsapp: {
        title: 'Réservation WhatsApp Instantanée',
        desc: 'Système de réservation révolutionnaire via WhatsApp. Confirmez votre séjour en moins de 5 minutes.'
      },
      concierge: {
        title: 'Service Conciergerie Exclusif',
        desc: 'Notre équipe dédiée vous assiste pour tous vos besoins : transport, réservations, recommandations.'
      },
      wifi: {
        title: 'Connectivité Professionnelle',
        desc: 'Internet très haut débit, WiFi professionnel, espaces de travail équipés pour le business.'
      }
    },
    
    // Contact
    contact: {
      title: 'Nous Contacter',
      subtitle: 'Notre équipe est à votre disposition',
      phone: 'Téléphone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      address: 'Adresse',
      hours: 'Horaires',
      form: {
        name: 'Nom complet',
        email: 'Adresse email',
        phone: 'Numéro de téléphone',
        subject: 'Sujet',
        message: 'Votre message',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi'
      }
    },
    
    // Common
    common: {
      loading: 'Chargement...',
      error: 'Une erreur s\'est produite',
      retry: 'Réessayer',
      close: 'Fermer',
      next: 'Suivant',
      previous: 'Précédent',
      save: 'Enregistrer',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      delete: 'Supprimer',
      edit: 'Modifier',
      view: 'Voir',
      share: 'Partager',
      favorite: 'Favori',
      available: 'Disponible',
      unavailable: 'Non disponible',
      from: 'À partir de',
      to: 'jusqu\'à',
      all: 'Tous',
      none: 'Aucun',
      install: 'Installer l\'app',
      call: 'Appeler'
    },
    
    // Pricing
    pricing: {
      title: 'Grille Tarifaire',
      subtitle: 'Tarifs transparents et compétitifs',
      daily: 'Tarif journalier',
      weekly: 'Tarif hebdomadaire',
      monthly: 'Tarif mensuel',
      includes: 'Inclus',
      excludes: 'Non inclus',
      taxes: 'Taxes incluses',
      deposit: 'Caution',
      cleaning: 'Frais de ménage',
      extra: 'Personne supplémentaire'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      apartments: 'Apartments',
      about: 'About',
      contact: 'Contact',
      language: 'Language',
      theme: 'Theme'
    },
    
    // Home Page
    home: {
      title: 'DOUALA LUXURY STAYS - BONAMOUSSADI',
      subtitle: 'Your Premium Comfort in Bonamoussadi',
      description: 'Discover the art of living in Bonamoussadi with our premium furnished apartments. Modern residential area, instant WhatsApp booking, premium concierge service.',
      status: 'We are currently available',
      response: 'Response within 5-10 minutes',
      cta: {
        discover: 'Discover our Apartments',
        reserve: 'Express Booking',
        viewAll: 'View All our Premium Apartments',
        explore: 'Explore our Apartments',
        immediate: 'Immediate Booking',
        video: 'Watch Video Presentation',
        gallery: 'View Photo Gallery'
      },
      location: {
        title: 'Bonamoussadi - Premium District',
        description: 'Located in the most sought-after residential district of Douala, Bonamoussadi offers security, modernity and proximity to essential services.',
        features: [
          'International schools nearby',
          'Modern medical centers',
          'Sports and leisure complexes',
          'Premium shopping centers',
          '24/7 enhanced security',
          'Easy transport to city center'
        ]
      },
      stats: {
        apartments: 'Premium Apartments',
        clients: 'Satisfied Clients',
        service: 'Service Excellence',
        concierge: 'Premium Concierge'
      },
      sections: {
        featured: 'Our Featured Apartments',
        featuredDesc: 'Discover our premium selection of furnished apartments in Douala\'s most prestigious neighborhoods.',
        whyChoose: 'Why Choose Douala Luxury Stays?',
        whyChooseDesc: 'We redefine the accommodation experience in Douala with our premium services.',
        discover: 'Discover Premium Douala',
        discoverDesc: 'Our apartments are strategically located in the most attractive and secure neighborhoods.',
        experience: 'Ready to Live the Premium Experience?',
        experienceDesc: 'Join our satisfied clients and discover why we are the reference.'
      }
    },
    
    // Apartments
    apartments: {
      title: 'Our Premium Apartments',
      filters: 'Filters',
      price: 'Price',
      type: 'Type',
      quarter: 'District',
      capacity: 'Capacity',
      amenities: 'Amenities',
      clear: 'Clear',
      apply: 'Apply',
      results: 'results found',
      perNight: '/night',
      viewDetails: 'View details',
      reserve: 'Book',
      photos: 'Photos',
      videos: 'Videos',
      virtualTour: 'Virtual Tour'
    },
    
    // Property Details
    property: {
      overview: 'Overview',
      amenities: 'Amenities',
      location: 'Location',
      reviews: 'Reviews',
      pricing: 'Pricing',
      gallery: 'Gallery',
      videos: 'Presentation Videos',
      availability: 'Availability',
      book: 'Book Now',
      contact: 'Contact Us',
      features: 'Features',
      rules: 'Rules',
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',
      surface: 'm²',
      guests: 'guests'
    },
    
    // Features
    features: {
      security: {
        title: '24/7 Premium Security',
        desc: 'Professional security guards, HD cameras, badge-controlled access in all our establishments.'
      },
      whatsapp: {
        title: 'Instant WhatsApp Booking',
        desc: 'Revolutionary booking system via WhatsApp. Confirm your stay in less than 5 minutes.'
      },
      concierge: {
        title: 'Exclusive Concierge Service',
        desc: 'Our dedicated team assists you with all your needs: transport, reservations, recommendations.'
      },
      wifi: {
        title: 'Professional Connectivity',
        desc: 'Very high-speed internet, professional WiFi, work spaces equipped for business.'
      }
    },
    
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'Our team is at your disposal',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      address: 'Address',
      hours: 'Hours',
      form: {
        name: 'Full name',
        email: 'Email address',
        phone: 'Phone number',
        subject: 'Subject',
        message: 'Your message',
        send: 'Send message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message'
      }
    },
    
    // Common
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      retry: 'Retry',
      close: 'Close',
      next: 'Next',
      previous: 'Previous',
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      share: 'Share',
      favorite: 'Favorite',
      available: 'Available',
      unavailable: 'Unavailable',
      from: 'From',
      to: 'to',
      all: 'All',
      none: 'None'
    },
    
    // Pricing
    pricing: {
      title: 'Pricing Grid',
      subtitle: 'Transparent and competitive rates',
      daily: 'Daily rate',
      weekly: 'Weekly rate',
      monthly: 'Monthly rate',
      includes: 'Includes',
      excludes: 'Excludes',
      taxes: 'Taxes included',
      deposit: 'Deposit',
      cleaning: 'Cleaning fee',
      extra: 'Extra person'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get from localStorage or default to French
    const saved = localStorage.getItem('language');
    return saved || 'fr';
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('language', language);
    
    // Update document language
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const setLang = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  const value = {
    language,
    setLanguage: setLang,
    toggleLanguage,
    t,
    isRTL: false, // French and English are LTR
    availableLanguages: [
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'en', name: 'English', flag: '🇺🇸' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};