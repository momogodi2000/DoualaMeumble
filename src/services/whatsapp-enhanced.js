/**
 * Enhanced WhatsApp Business Integration
 * Professional WhatsApp booking system with analytics
 */

// WhatsApp Business Configuration
const WHATSAPP_CONFIG = {
  businessNumber: '+237656467051', // Updated admin phone number
  businessName: 'Douala Luxury Stays',
  businessHours: {
    monday: '08:00-20:00',
    tuesday: '08:00-20:00',
    wednesday: '08:00-20:00',
    thursday: '08:00-20:00',
    friday: '08:00-20:00',
    saturday: '09:00-18:00',
    sunday: '10:00-17:00'
  },
  autoReplyDelay: 2, // minutes
  maxMessageLength: 1000
};

// Message Templates
const MESSAGE_TEMPLATES = {
  reservation: {
    subject: '🏠 DEMANDE DE RÉSERVATION - DOUALA LUXURY STAYS',
    template: `{subject}

📋 Détails de la réservation:
• Appartement: {apartmentName}
• Type: {apartmentType}
• Quartier: {quarter}
• Dates: {checkIn} → {checkOut}
• Durée: {duration} nuit(s)
• Personnes: {adults} adulte(s){children}
• Prix estimé: {totalPrice} FCFA

👤 Informations contact:
• Nom: [À compléter]
• Email: [À compléter]
• Téléphone: [À compléter]
• Entreprise: [Si applicable]

💬 Message personnalisé:
Bonjour, je souhaite réserver cet appartement pour les dates mentionnées. Merci de me confirmer la disponibilité et les modalités de paiement.

#DoualaLuxuryStays #Reservation`,
  },
  
  inquiry: {
    subject: '❓ DEMANDE D\'INFORMATION - DOUALA LUXURY STAYS',
    template: `{subject}

🏠 Appartement d'intérêt: {apartmentName}
📍 Quartier: {quarter}
💰 Budget estimé: {budget} FCFA/nuit
👥 Nombre de personnes: {guests}
📅 Période souhaitée: {period}

❓ Questions spécifiques:
{questions}

Merci de me fournir plus d'informations sur cet appartement.

#DoualaLuxuryStays #Information`,
  },
  
  virtual_tour: {
    subject: '📹 DEMANDE DE VISITE VIRTUELLE',
    template: `{subject}

🏠 Appartement: {apartmentName}
📍 Quartier: {quarter}
📅 Date souhaitée: {preferredDate}
⏰ Heure préférée: {preferredTime}

💬 Je souhaiterais faire une visite virtuelle de cet appartement via WhatsApp Video ou Zoom.

Merci de me proposer un créneau.

#DoualaLuxuryStays #VisiteVirtuelle`,
  },
  
  support: {
    subject: '🆘 DEMANDE D\'ASSISTANCE',
    template: `{subject}

📞 Type d'assistance: {supportType}
🏠 Appartement concerné: {apartmentName}
📋 Description du problème:
{description}

⚡ Urgence: {urgencyLevel}

Merci de votre aide rapide.

#DoualaLuxuryStays #Support`,
  }
};

// Business Logic Functions
export class WhatsAppService {
  
  static formatPhoneNumber(number) {
    // Remove all non-digits and ensure proper format
    const cleaned = number.replace(/\D/g, '');
    
    // Add country code if missing
    if (!cleaned.startsWith('237')) {
      return `237${cleaned}`;
    }
    
    return cleaned;
  }
  
  static generateReservationMessage(apartmentData, bookingDetails) {
    const {
      apartment,
      checkIn,
      checkOut,
      adults = 1,
      children = 0,
      totalPrice,
      duration
    } = bookingDetails;
    
    const childrenText = children > 0 ? `, ${children} enfant(s)` : '';
    
    const message = MESSAGE_TEMPLATES.reservation.template
      .replace('{subject}', MESSAGE_TEMPLATES.reservation.subject)
      .replace('{apartmentName}', apartment.title)
      .replace('{apartmentType}', apartment.type.name)
      .replace('{quarter}', apartment.quarter.name)
      .replace('{checkIn}', this.formatDate(checkIn))
      .replace('{checkOut}', this.formatDate(checkOut))
      .replace('{duration}', duration)
      .replace('{adults}', adults)
      .replace('{children}', childrenText)
      .replace('{totalPrice}', totalPrice?.toLocaleString() || 'À confirmer');
    
    return message;
  }
  
  static generateInquiryMessage(apartmentData, inquiryDetails) {
    const {
      apartment,
      budget = 'Flexible',
      guests = 1,
      period = 'À définir',
      questions = 'Informations générales sur l\'appartement'
    } = inquiryDetails;
    
    const message = MESSAGE_TEMPLATES.inquiry.template
      .replace('{subject}', MESSAGE_TEMPLATES.inquiry.subject)
      .replace('{apartmentName}', apartment.title)
      .replace('{quarter}', apartment.quarter.name)
      .replace('{budget}', budget)
      .replace('{guests}', guests)
      .replace('{period}', period)
      .replace('{questions}', questions);
    
    return message;
  }
  
  static generateVirtualTourMessage(apartmentData, tourDetails) {
    const {
      apartment,
      preferredDate = 'Flexible',
      preferredTime = 'Flexible'
    } = tourDetails;
    
    const message = MESSAGE_TEMPLATES.virtual_tour.template
      .replace('{subject}', MESSAGE_TEMPLATES.virtual_tour.subject)
      .replace('{apartmentName}', apartment.title)
      .replace('{quarter}', apartment.quarter.name)
      .replace('{preferredDate}', preferredDate)
      .replace('{preferredTime}', preferredTime);
    
    return message;
  }
  
  static generateSupportMessage(supportDetails) {
    const {
      apartmentName = 'N/A',
      supportType = 'Général',
      description = '',
      urgencyLevel = 'Normal'
    } = supportDetails;
    
    const message = MESSAGE_TEMPLATES.support.template
      .replace('{subject}', MESSAGE_TEMPLATES.support.subject)
      .replace('{supportType}', supportType)
      .replace('{apartmentName}', apartmentName)
      .replace('{description}', description)
      .replace('{urgencyLevel}', urgencyLevel);
    
    return message;
  }
  
  static formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  static createWhatsAppUrl(message, phoneNumber = WHATSAPP_CONFIG.businessNumber) {
    const formattedNumber = this.formatPhoneNumber(phoneNumber);
    const encodedMessage = encodeURIComponent(message);
    
    // Use WhatsApp Web for desktop, WhatsApp app for mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const baseUrl = isMobile ? 'whatsapp://send' : 'https://web.whatsapp.com/send';
    
    return `${baseUrl}?phone=${formattedNumber}&text=${encodedMessage}`;
  }
  
  static openWhatsApp(message, phoneNumber = WHATSAPP_CONFIG.businessNumber) {
    const url = this.createWhatsAppUrl(message, phoneNumber);
    
    // Analytics tracking
    this.trackWhatsAppClick(message, phoneNumber);
    
    // Open WhatsApp
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  
  static trackWhatsAppClick(message, phoneNumber) {
    // Google Analytics 4 tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'reservation_attempt',
        value: 1,
        custom_parameters: {
          phone_number: phoneNumber,
          message_type: this.getMessageType(message),
          timestamp: new Date().toISOString()
        }
      });
    }
    
    // Facebook Pixel tracking
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Apartment Reservation',
        content_category: 'Real Estate',
        currency: 'XAF'
      });
    }
    
    // Custom analytics
    this.logToAnalytics({
      event: 'whatsapp_engagement',
      timestamp: Date.now(),
      message_length: message.length,
      user_agent: navigator.userAgent,
      referrer: document.referrer
    });
  }
  
  static getMessageType(message) {
    if (message.includes('RÉSERVATION')) return 'reservation';
    if (message.includes('INFORMATION')) return 'inquiry';
    if (message.includes('VISITE VIRTUELLE')) return 'virtual_tour';
    if (message.includes('ASSISTANCE')) return 'support';
    return 'general';
  }
  
  static logToAnalytics(data) {
    // Store in localStorage for later analysis
    const analyticsKey = 'whatsapp_analytics';
    const existing = JSON.parse(localStorage.getItem(analyticsKey) || '[]');
    
    existing.push(data);
    
    // Keep only last 100 entries
    if (existing.length > 100) {
      existing.splice(0, existing.length - 100);
    }
    
    localStorage.setItem(analyticsKey, JSON.stringify(existing));
  }
  
  static getAnalytics() {
    return JSON.parse(localStorage.getItem('whatsapp_analytics') || '[]');
  }
  
  static isBusinessHours() {
    const now = new Date();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const day = dayNames[now.getDay()];
    const time = now.toTimeString().slice(0, 5); // HH:MM
    
    const businessHours = WHATSAPP_CONFIG.businessHours[day];
    if (!businessHours) return false;
    
    const [open, close] = businessHours.split('-');
    return time >= open && time <= close;
  }
  
  static getBusinessHoursMessage() {
    const isOpen = this.isBusinessHours();
    
    if (isOpen) {
      return {
        status: 'open',
        message: '🟢 Nous sommes actuellement disponibles',
        responseTime: 'Réponse sous 5-10 minutes'
      };
    } else {
      return {
        status: 'closed',
        message: '🟡 Nous sommes actuellement fermés',
        responseTime: 'Réponse le prochain jour ouvrable'
      };
    }
  }
  
  // Quick action templates for common requests
  static getQuickActions() {
    return [
      {
        id: 'book_now',
        label: 'Réserver Maintenant',
        icon: '📅',
        description: 'Démarrer une réservation'
      },
      {
        id: 'get_info',
        label: 'Plus d\'Info',
        icon: 'ℹ️',
        description: 'Poser des questions'
      },
      {
        id: 'virtual_tour',
        label: 'Visite Virtuelle',
        icon: '📹',
        description: 'Voir l\'appartement en ligne'
      },
      {
        id: 'call_support',
        label: 'Assistance',
        icon: '🆘',
        description: 'Obtenir de l\'aide'
      }
    ];
  }
}

// Helper functions for React components
export const useWhatsApp = () => {
  const sendReservation = (apartment, bookingDetails) => {
    const message = WhatsAppService.generateReservationMessage(apartment, bookingDetails);
    WhatsAppService.openWhatsApp(message);
  };
  
  const sendInquiry = (apartment, inquiryDetails = {}) => {
    const message = WhatsAppService.generateInquiryMessage(apartment, inquiryDetails);
    WhatsAppService.openWhatsApp(message);
  };
  
  const requestVirtualTour = (apartment, tourDetails = {}) => {
    const message = WhatsAppService.generateVirtualTourMessage(apartment, tourDetails);
    WhatsAppService.openWhatsApp(message);
  };
  
  const contactSupport = (supportDetails = {}) => {
    const message = WhatsAppService.generateSupportMessage(supportDetails);
    WhatsAppService.openWhatsApp(message);
  };
  
  const getBusinessStatus = () => WhatsAppService.getBusinessHoursMessage();
  
  const getQuickActions = () => WhatsAppService.getQuickActions();
  
  return {
    sendReservation,
    sendInquiry,
    requestVirtualTour,
    contactSupport,
    getBusinessStatus,
    getQuickActions,
    config: WHATSAPP_CONFIG
  };
};

export default WhatsAppService;