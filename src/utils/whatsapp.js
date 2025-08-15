const WHATSAPP_NUMBER = '+237 6XX XXX XXX';

export const generateWhatsAppURL = (apartment, customMessage = '') => {
  const baseMessage = customMessage || `Bonjour ! Je souhaite réserver l'appartement "${apartment.title}" situé à ${apartment.location.quarter}.

Détails de l'appartement :
- Type : ${apartment.type}
- Capacité : ${apartment.capacity} personnes
- Prix : ${apartment.pricing.daily.toLocaleString()} FCFA/nuit

Merci de me confirmer la disponibilité et les modalités de réservation.`;

  const encodedMessage = encodeURIComponent(baseMessage);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
};

export const generateInquiryWhatsAppURL = (message = '') => {
  const defaultMessage = `Bonjour ! J'aimerais avoir plus d'informations sur vos appartements meublés à Douala.

Merci de me contacter.`;
  
  const finalMessage = message || defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
};

export const trackWhatsAppClick = (apartment) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_booking_click', {
      event_category: 'booking',
      event_label: apartment.id,
      apartment_title: apartment.title,
      apartment_type: apartment.type,
      apartment_quarter: apartment.location.quarter
    });
  }
};