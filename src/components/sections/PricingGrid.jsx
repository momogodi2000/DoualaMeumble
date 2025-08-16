/**
 * Pricing Grid Component
 * Displays comprehensive pricing information for all apartment types
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  Shield, 
  Clock,
  Users,
  Home,
  Wifi,
  Car,
  Utensils
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useTheme } from '../../contexts/ThemeContext';
import { Price } from '../atoms/Typography';
import { MotionButton, WhatsAppButton } from '../atoms/Button';
import { MotionCard } from '../atoms/Card';

const PricingGrid = () => {
  const { t } = useLanguage();
  const { getThemeColors } = useTheme();
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const pricingPlans = [
    {
      id: 'studio',
      name: 'Studio Premium',
      description: 'Parfait pour les professionnels et couples',
      image: '/images/apartments/studio-pricing.jpg',
      basePrice: {
        daily: 35000,
        weekly: 210000,
        monthly: 750000
      },
      capacity: '1-2 personnes',
      surface: '35-45 m²',
      popular: false,
      features: {
        included: [
          'WiFi très haut débit',
          'Climatisation',
          'Cuisine équipée',
          'TV 4K + Netflix',
          'Linge de maison',
          'Ménage hebdomadaire',
          'Sécurité 24h/7j',
          'Parking'
        ],
        excluded: [
          'Service ménage quotidien',
          'Service conciergerie',
          'Room service'
        ]
      },
      apartments: ['apt_001']
    },
    {
      id: 'apartment',
      name: 'Appartement Business',
      description: 'Idéal pour séjours d\'affaires et familles',
      image: '/images/apartments/apartment-pricing.jpg',
      basePrice: {
        daily: 50000,
        weekly: 300000,
        monthly: 1000000
      },
      capacity: '2-4 personnes',
      surface: '55-75 m²',
      popular: true,
      features: {
        included: [
          'WiFi très haut débit',
          'Climatisation',
          'Cuisine équipée',
          'TV 4K + Netflix',
          'Linge de maison',
          'Ménage bi-hebdomadaire',
          'Sécurité 24h/7j',
          'Parking',
          'Espace de travail',
          'Service conciergerie'
        ],
        excluded: [
          'Service ménage quotidien',
          'Room service'
        ]
      },
      apartments: ['apt_002']
    },
    {
      id: 'villa',
      name: 'Villa Executive',
      description: 'Luxe absolu pour familles et groupes',
      image: '/images/apartments/villa-pricing.jpg',
      basePrice: {
        daily: 75000,
        weekly: 450000,
        monthly: 1500000
      },
      capacity: '4-6 personnes',
      surface: '85-120 m²',
      popular: false,
      features: {
        included: [
          'WiFi très haut débit',
          'Climatisation',
          'Cuisine équipée premium',
          'TV 4K + Netflix',
          'Linge de maison premium',
          'Ménage quotidien',
          'Sécurité 24h/7j',
          'Parking privé',
          'Espace de travail',
          'Service conciergerie premium',
          'Room service',
          'Terrasse privée',
          'Vue panoramique'
        ],
        excluded: []
      },
      apartments: ['apt_003', 'apt_004']
    }
  ];

  const additionalServices = [
    {
      name: 'Personne supplémentaire',
      price: { daily: 5000, weekly: 30000, monthly: 100000 },
      description: 'Par personne au-delà de la capacité standard'
    },
    {
      name: 'Ménage quotidien',
      price: { daily: 8000, weekly: 45000, monthly: 150000 },
      description: 'Service de ménage professionnel quotidien'
    },
    {
      name: 'Service conciergerie',
      price: { daily: 10000, weekly: 60000, monthly: 200000 },
      description: 'Assistance personnalisée 24h/7j'
    },
    {
      name: 'Transfer aéroport',
      price: { daily: 15000, weekly: 15000, monthly: 15000 },
      description: 'Transfert aller-retour aéroport de Douala'
    }
  ];

  const periods = [
    { key: 'daily', label: 'Journalier', suffix: '/jour' },
    { key: 'weekly', label: 'Hebdomadaire', suffix: '/semaine' },
    { key: 'monthly', label: 'Mensuel', suffix: '/mois' }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>

          {/* Period Selector */}
          <div className="inline-flex bg-white rounded-xl p-1 shadow-medium">
            {periods.map((period) => (
              <button
                key={period.key}
                onClick={() => setSelectedPeriod(period.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedPeriod === period.key
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-gold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={plan.id} variants={fadeInUp}>
              <MotionCard
                className={`relative p-8 h-full ${
                  plan.popular 
                    ? 'ring-2 ring-gold-500 shadow-gold' 
                    : 'hover:shadow-luxury'
                }`}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Plus Populaire
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center">
                    <Home className="w-10 h-10 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      <Price amount={plan.basePrice[selectedPeriod]} />
                    </div>
                    <div className="text-sm text-gray-500">
                      {periods.find(p => p.key === selectedPeriod)?.suffix}
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="flex justify-center space-x-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {plan.capacity}
                    </div>
                    <div className="flex items-center">
                      <Home className="w-4 h-4 mr-1" />
                      {plan.surface}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Inclus
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.included.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.features.excluded.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <XCircle className="w-5 h-5 text-red-400 mr-2" />
                        Non inclus
                      </h4>
                      <ul className="space-y-2">
                        {plan.features.excluded.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <XCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <WhatsAppButton
                  phoneNumber="+237656467051"
                  message={`Bonjour ! Je souhaite des informations sur ${plan.name} (tarif ${selectedPeriod}).`}
                  variant={plan.popular ? 'primary' : 'outline'}
                  fullWidth
                  className="text-center"
                >
                  Réserver Maintenant
                </WhatsAppButton>
              </MotionCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-2xl shadow-luxury p-8"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 text-center">
            Services Additionnels
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                <div className="text-2xl font-bold text-gold-600 mb-2">
                  <Price amount={service.price[selectedPeriod]} />
                </div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-500 mr-2" />
                <span>Taxes incluses</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                <span>Réservation flexible</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-gold-500 mr-2" />
                <span>Satisfaction garantie</span>
              </div>
            </div>
            
            <p className="mt-6 text-gray-500">
              * Tarifs sujets à modification selon la saisonnalité. 
              Caution remboursable requise. Réductions disponibles pour séjours longue durée.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingGrid;