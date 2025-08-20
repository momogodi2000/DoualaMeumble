import emailjs from '@emailjs/browser';

const EMAIL_CONFIG = {
  serviceID: 'service_xxxxxxx',
  templateID: {
    welcomeNewsletter: 'template_welcome',
    bookingConfirmation: 'template_booking',
    adminNotification: 'template_admin'
  },
  userID: 'user_xxxxxxx'
};

export const initEmailJS = () => {
  emailjs.init(EMAIL_CONFIG.userID);
};

export const sendWelcomeEmail = async (userEmail, userName) => {
  try {
    const templateParams = {
      to_email: userEmail,
      to_name: userName,
      from_name: 'Fresh Residence',
      message: 'Bienvenue dans notre newsletter ! Découvrez nos dernières offres et conseils pour votre séjour à Douala.'
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.templateID.welcomeNewsletter,
      templateParams
    );

    console.log('Welcome email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error };
  }
};

export const sendBookingConfirmation = async (userEmail, userName, apartmentDetails) => {
  try {
    const templateParams = {
      to_email: userEmail,
      to_name: userName,
      apartment_title: apartmentDetails.title,
      apartment_location: apartmentDetails.location.quarter,
      booking_date: new Date().toLocaleDateString('fr-FR'),
      from_name: 'Appartements Meublés Douala'
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.templateID.bookingConfirmation,
      templateParams
    );

    console.log('Booking confirmation sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending booking confirmation:', error);
    return { success: false, error };
  }
};

export const sendAdminNotification = async (type, data) => {
  try {
    const templateParams = {
      notification_type: type,
      data: JSON.stringify(data, null, 2),
      timestamp: new Date().toLocaleString('fr-FR'),
      from_name: 'Fresh Residence'
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.templateID.adminNotification,
      templateParams
    );

    console.log('Admin notification sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return { success: false, error };
  }
};