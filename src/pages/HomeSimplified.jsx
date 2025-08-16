/**
 * Simplified Premium Home Page
 * Working version with current architecture
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MapPin, 
  Users, 
  Bed, 
  Star, 
  Shield, 
  Wifi, 
  Car, 
  MessageCircle,
  Award,
  Building,
  Heart,
  Phone,
  Mail
} from 'lucide-react';

// Simplified data import
import { APARTMENTS_DATA, QUARTERS } from '../data/apartments-enhanced';

const HomeSimplified = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get featured apartments
  const featuredApartments = APARTMENTS_DATA.filter(apt => apt.featured);

  // Hero images
  const heroImages = [
    '/images/hero/douala-luxury-1.jpg',
    '/images/hero/douala-luxury-2.jpg', 
    '/images/hero/douala-luxury-3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Statistics
  const stats = [
    { 
      value: APARTMENTS_DATA.length + '+', 
      label: 'Appartements Premium',
      icon: Building,
      color: 'text-gold-500'
    },
    { 
      value: '500+', 
      label: 'Clients Satisfaits',
      icon: Heart,
      color: 'text-green-500'
    },
    { 
      value: '4.9/5', 
      label: 'Excellence Service',
      icon: Award,
      color: 'text-gold-500'
    },
    { 
      value: '24h/7j', 
      label: 'Conciergerie Premium',
      icon: Shield,
      color: 'text-blue-500'
    }
  ];

  // Features
  const features = [
    {
      icon: Shield,
      title: 'Sécurité Premium 24h/7j',
      description: 'Gardiennage professionnel, caméras HD, accès sécurisé par badge.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Réservation WhatsApp',
      description: 'Système de réservation révolutionnaire via WhatsApp.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Award,
      title: 'Service Conciergerie',
      description: 'Notre équipe dédiée vous assiste pour tous vos besoins.',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Wifi,
      title: 'Connectivité Pro',
      description: 'Internet très haut débit, WiFi professionnel.',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  // WhatsApp functions
  const generateWhatsAppURL = (apartment = null) => {
    const phoneNumber = '+237656467051'; // Updated admin phone number
    let message = 'Bonjour ! Je souhaite découvrir vos appartements premium à Douala.';
    
    if (apartment) {
      message = `Bonjour ! Je m'intéresse à ${apartment.title} à ${apartment.quarter.name}.`;
    }
    
    return `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-gold-800"></div>
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">DOUALA</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                LUXURY STAYS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 font-medium">
              "Votre Confort, Notre Excellence"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Découvrez l'art de vivre à Douala dans nos appartements meublés haut de gamme. 
              Réservation instantanée via WhatsApp, service conciergerie premium.
            </p>

            <div className="inline-flex items-center mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-3 h-3 rounded-full mr-3 bg-green-400 animate-pulse"></div>
              <span className="text-white text-sm">
                🟢 Nous sommes actuellement disponibles • Réponse sous 5-10 minutes
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to="/appartements"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              Découvrir nos Appartements
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <a
              href={generateWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Réservation Express
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Appartements <span className="text-yellow-600">Vedettes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre sélection premium d'appartements meublés dans les quartiers 
              les plus prestigieux de Douala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApartments.map((apartment) => (
              <div key={apartment.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-yellow-200"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                      {apartment.type.name}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                      {apartment.pricing.daily.toLocaleString()} FCFA/nuit
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold text-gray-900">
                      {apartment.title}
                    </h3>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{apartment.rating.average}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{apartment.quarter.name}, Douala</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{apartment.capacity} personnes</span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{apartment.bedrooms} chambre{apartment.bedrooms > 1 ? 's' : ''}</span>
                    </div>
                    <div>{apartment.surface} m²</div>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      to={`/appartements/${apartment.id}`}
                      className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Voir détails
                    </Link>
                    <a
                      href={generateWhatsAppURL(apartment)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Réserver
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir <span className="text-yellow-600">Douala Luxury Stays</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous redéfinissons l'expérience de l'hébergement à Douala avec nos services premium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Prêt à Vivre l'Expérience <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Premium</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez nos clients satisfaits et découvrez pourquoi nous sommes 
            la référence de l'hébergement haut de gamme à Douala.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={generateWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Réservation Immédiate
            </a>
            
            <Link
              to="/appartements"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explorer nos Appartements
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <div className="flex items-center text-gray-300">
              <Phone className="w-4 h-4 mr-2" />
              <span>+237 694 123 456</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>contact@doualaluxurystays.com</span>
            </div>
            <div className="flex items-center text-green-400">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>WhatsApp 24h/7j</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSimplified;