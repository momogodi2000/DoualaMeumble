import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { sendWelcomeEmail, sendAdminNotification } from '../../utils/email';

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    preferences: {
      type: '',
      budget: '',
      dates: ''
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('preferences.')) {
      const prefKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [prefKey]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate Google Forms submission
      const googleFormData = new FormData();
      googleFormData.append('entry.email', formData.email);
      googleFormData.append('entry.firstName', formData.firstName);
      googleFormData.append('entry.lastName', formData.lastName);
      googleFormData.append('entry.phone', formData.phone);
      googleFormData.append('entry.preferences', JSON.stringify(formData.preferences));

      // Replace with your actual Google Form URL
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
      
      // Submit to Google Forms (in a real implementation)
      // await fetch(GOOGLE_FORM_URL, {
      //   method: 'POST',
      //   body: googleFormData,
      //   mode: 'no-cors'
      // });

      // Send welcome email
      const emailResult = await sendWelcomeEmail(
        formData.email,
        `${formData.firstName} ${formData.lastName}`
      );

      // Send admin notification
      await sendAdminNotification('newsletter_signup', {
        ...formData,
        timestamp: new Date().toISOString()
      });

      // Store in localStorage for offline sync
      const pendingSignups = JSON.parse(localStorage.getItem('pending-newsletter-signups') || '[]');
      pendingSignups.push({
        id: Date.now().toString(),
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('pending-newsletter-signups', JSON.stringify(pendingSignups));

      setSubmitStatus({
        type: 'success',
        message: 'Inscription réussie ! Vérifiez votre email pour la confirmation.'
      });

      // Reset form
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        preferences: {
          type: '',
          budget: '',
          dates: ''
        }
      });

    } catch (error) {
      console.error('Newsletter signup error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer plus tard.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Restez Informé de Nos Offres
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Inscrivez-vous à notre newsletter pour recevoir nos dernières offres spéciales, 
          conseils pour votre séjour à Douala et nouveaux appartements disponibles.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="email"
              name="email"
              placeholder="Adresse email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone (optionnel)"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <select
              name="preferences.type"
              value={formData.preferences.type}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20"
            >
              <option value="" className="text-gray-900">Type préféré</option>
              <option value="Studio" className="text-gray-900">Studio</option>
              <option value="T2" className="text-gray-900">T2</option>
              <option value="T3" className="text-gray-900">T3</option>
              <option value="T4" className="text-gray-900">T4+</option>
            </select>

            <select
              name="preferences.budget"
              value={formData.preferences.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20"
            >
              <option value="" className="text-gray-900">Budget</option>
              <option value="0-30000" className="text-gray-900">Moins de 30,000 FCFA</option>
              <option value="30000-50000" className="text-gray-900">30,000 - 50,000 FCFA</option>
              <option value="50000-100000" className="text-gray-900">50,000 - 100,000 FCFA</option>
              <option value="100000+" className="text-gray-900">Plus de 100,000 FCFA</option>
            </select>

            <input
              type="text"
              name="preferences.dates"
              placeholder="Dates souhaitées"
              value={formData.preferences.dates}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20"
            />
          </div>

          {submitStatus && (
            <div className={`mb-6 p-4 rounded-lg flex items-center justify-center space-x-2 ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/20 border border-green-400' 
                : 'bg-red-500/20 border border-red-400'
            }`}>
              {submitStatus.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400" />
              )}
              <span className="text-white">{submitStatus.message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                <span>Inscription en cours...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>S'inscrire à la newsletter</span>
              </>
            )}
          </button>

          <p className="text-sm text-white/70 mt-4">
            En vous inscrivant, vous acceptez de recevoir nos emails marketing. 
            Vous pouvez vous désabonner à tout moment.
          </p>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">Offres Exclusives</div>
            <div className="text-white/80">Réductions spéciales pour abonnés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">Guide Douala</div>
            <div className="text-white/80">Conseils et bons plans locaux</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">Nouveautés</div>
            <div className="text-white/80">Premiers informés des nouveaux appartements</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;