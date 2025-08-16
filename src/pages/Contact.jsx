import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  AlertCircle 
} from 'lucide-react';
import { generateInquiryWhatsAppURL } from '../utils/whatsapp';
import { sendAdminNotification } from '../utils/email';
import { companyInfo } from '../data/apartments';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: [
        companyInfo.address,
        'Cameroun'
      ]
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: [companyInfo.phone],
      action: () => window.location.href = `tel:${companyInfo.phone}`
    },
    {
      icon: Mail,
      title: 'Email',
      content: [companyInfo.email],
      action: () => window.location.href = `mailto:${companyInfo.email}`
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: [
        'Lun - Ven : 8h - 18h',
        'Sam : 9h - 15h',
        'Dim : Sur rendez-vous'
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Réservation Rapide',
      description: 'Réservez directement via WhatsApp',
      icon: MessageCircle,
      action: () => window.open(generateInquiryWhatsAppURL('Je souhaite faire une réservation. Pouvez-vous me contacter ?'), '_blank'),
      buttonText: 'WhatsApp',
      buttonClass: 'btn-secondary'
    },
    {
      title: 'Demande d\'Information',
      description: 'Posez vos questions par email',
      icon: Mail,
      action: () => window.location.href = `mailto:${companyInfo.email}`,
      buttonText: 'Envoyer Email',
      buttonClass: 'btn-outline'
    },
    {
      title: 'Appel Direct',
      description: 'Parlez directement à notre équipe',
      icon: Phone,
      action: () => window.location.href = `tel:${companyInfo.phone}`,
      buttonText: 'Appeler',
      buttonClass: 'btn-primary'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send admin notification
      await sendAdminNotification('contact_form', {
        ...formData,
        timestamp: new Date().toISOString()
      });

      setSubmitStatus({
        type: 'success',
        message: 'Message envoyé avec succès ! Nous vous répondrons sous 24h.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Notre équipe est à votre disposition pour répondre à toutes vos questions 
            et vous aider à trouver l'appartement parfait à Douala.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-custom transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <action.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  {action.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {action.description}
                </p>
                <button
                  onClick={action.action}
                  className={`${action.buttonClass} w-full justify-center`}
                >
                  {action.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+237 656 46 70 51"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Choisir un sujet</option>
                      <option value="reservation">Réservation</option>
                      <option value="information">Demande d'information</option>
                      <option value="partnership">Partenariat</option>
                      <option value="complaint">Réclamation</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg flex items-center space-x-2 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    )}
                    <span className={`text-sm ${
                      submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {submitStatus.message}
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  Nos Coordonnées
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.content.map((line, i) => (
                          <p 
                            key={i} 
                            className={`text-gray-600 ${info.action ? 'cursor-pointer hover:text-primary-600' : ''}`}
                            onClick={info.action}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                  Notre Localisation
                </h3>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-3" />
                    <p>Carte Google Maps</p>
                    <p className="text-sm">Bonapriso, Douala</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus posées par nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Comment effectuer une réservation ?
                </h3>
                <p className="text-gray-600">
                  Vous pouvez réserver directement via WhatsApp en cliquant sur le bouton de réservation 
                  sur chaque appartement. Notre équipe vous répondra rapidement.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Quels sont les modes de paiement acceptés ?
                </h3>
                <p className="text-gray-600">
                  Nous acceptons les virements bancaires, Mobile Money (MTN/Orange) et les espèces 
                  pour le règlement de votre séjour.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Les appartements sont-ils meublés ?
                </h3>
                <p className="text-gray-600">
                  Oui, tous nos appartements sont entièrement meublés et équipés avec tout le nécessaire 
                  pour un séjour confortable (cuisine, électroménager, linge, etc.).
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Y a-t-il un service de ménage ?
                </h3>
                <p className="text-gray-600">
                  Le ménage est inclus pour les séjours de plus de 7 jours. Pour les séjours plus courts, 
                  il peut être ajouté en option sur demande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;