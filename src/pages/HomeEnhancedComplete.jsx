/**
 * Complete Enhanced Home Page
 * Features: Multi-language, Theme switching, Photo galleries, Videos, Pricing grid
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
  Mail,
  Calendar,
  Play,
  Eye,
  Grid,
  Camera
} from 'lucide-react';

// Enhanced imports
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { useTheme } from '../contexts/ThemeContext';
import Logo from '../components/atoms/Logo';
import { APARTMENTS_DATA, QUARTERS, getFeaturedApartments, getPopularApartments } from '../data/apartments-enhanced';
import { useWhatsApp } from '../services/whatsapp-enhanced';
import PricingGrid from '../components/sections/PricingGrid';
import PhotoGallery from '../components/sections/PhotoGallery';
import VideoPresentation from '../components/sections/VideoPresentation';
import StudioPresentation from '../components/sections/StudioPresentation';
import LanguageThemeSwitcher from '../components/common/LanguageThemeSwitcher';
import NewsletterSignup from '../components/notifications/NewsletterSignup';
import SEO from '../components/common/SEO';

const HomeEnhancedComplete = () => {
  const { t, language } = useLanguage();
  const { getThemeColors, currentTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { sendReservation, sendInquiry, getBusinessStatus } = useWhatsApp();
  
  // Enhanced data sources
  const featuredApartments = getFeaturedApartments();
  const popularApartments = getPopularApartments();
  
  // Safe business status with error handling
  let businessStatus;
  try {
    businessStatus = getBusinessStatus();
  } catch (error) {
    console.error('Error getting business status:', error);
    businessStatus = {
      status: 'unknown',
      message: '🔄 Vérification du statut...',
      responseTime: 'Réponse sous peu'
    };
  }
  
  const themeColors = getThemeColors();

  // Premium hero configuration with logo
  const heroImages = [
    '/icons/logo.jpg',
    '/icons/app-logo.svg',
    '/images/salon bonamousadi.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Enhanced statistics with real business metrics
  const stats = [
    { 
      value: APARTMENTS_DATA.length + '+', 
      label: t('home.stats.apartments'),
      icon: Building,
      color: 'text-gold-500'
    },
    { 
      value: '500+', 
      label: t('home.stats.clients'),
      icon: Heart,
      color: 'text-success-500'
    },
    { 
      value: '4.9/5', 
      label: t('home.stats.service'),
      icon: Award,
      color: 'text-gold-500'
    },
    { 
      value: '24h/7j', 
      label: t('home.stats.concierge'),
      icon: Shield,
      color: 'text-blue-500'
    }
  ];

  // Enhanced features with translations
  const features = [
    {
      icon: Shield,
      title: t('features.security.title'),
      description: t('features.security.desc'),
      color: 'bg-blue-50 text-blue-600',
      benefits: ['Sécurité renforcée', 'Surveillance 24h', 'Accès contrôlé']
    },
    {
      icon: MessageCircle,
      title: t('features.whatsapp.title'),
      description: t('features.whatsapp.desc'),
      color: 'bg-success-50 text-success-600',
      benefits: ['Réponse immédiate', 'Process simplifié', 'Suivi temps réel']
    },
    {
      icon: Award,
      title: t('features.concierge.title'),
      description: t('features.concierge.desc'),
      color: 'bg-gold-50 text-gold-600',
      benefits: ['Assistance premium', 'Recommandations locales', 'Services sur mesure']
    },
    {
      icon: Wifi,
      title: t('features.wifi.title'),
      description: t('features.wifi.desc'),
      color: 'bg-purple-50 text-purple-600',
      benefits: ['Débit garanti', 'Business ready', 'Support technique']
    }
  ];

  // Enhanced Douala quarters with detailed information
  const doualaQuarters = Object.values(QUARTERS).map(quarter => ({
    ...quarter,
    apartments: APARTMENTS_DATA.filter(apt => apt.quarter.id === quarter.id),
    image: `/images/quarters/${quarter.id}.jpg`,
    stats: {
      averageRating: 4.8,
      totalReviews: 156,
      responseTime: '< 10 min'
    }
  }));

  // WhatsApp functions with updated number
  const generateWhatsAppURL = (apartment = null) => {
    const phoneNumber = '+237656467051';
    let message = t('home.description');
    
    if (apartment) {
      message = `${t('common.hello')} ! ${t('common.interested')} ${apartment.title} à ${apartment.quarter.name}.`;
    }
    
    return `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
  };

  // Enhanced Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99] 
      } 
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const bounceIn = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1.2
      } 
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Enhanced SEO */}
      <SEO 
        title={t('home.title')}
        description={t('home.description')}
        keywords={['bonamoussadi douala', 'appartements premium', 'luxury stays', 'whatsapp booking', 'furnished apartments cameroon']}
        type="website"
      />
      
      {/* Enhanced Hero Section */}
      <section className="hero-section relative">
        {/* Premium Background with Parallax Effect */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              initial={{ scale: 1.1 }}
              animate={{ scale: index === currentSlide ? 1 : 1.1 }}
              transition={{ duration: 6 }}
            >
              <img
                src={image}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </motion.div>
          ))}
        </div>

        {/* Logo in top left */}
        <div className="absolute top-8 left-8 z-20">
          <Logo variant="compact" size="sm" />
        </div>

        {/* Language/Theme switcher in top right */}
        <div className="absolute top-8 right-8 z-20">
          <LanguageThemeSwitcher variant="header" />
        </div>

        {/* Enhanced Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">{t('home.title')}</span>
              <span 
                className="block bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.accent})`
                }}
              >
                {/* Dynamic theme-based gradient */}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 font-medium">
              {t('home.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              {t('home.description')}
            </p>

            {/* Business Status Indicator */}
            <div className="inline-flex items-center mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className={`w-3 h-3 rounded-full mr-3 ${businessStatus.status === 'open' ? 'bg-success-400 animate-pulse' : 'bg-yellow-400'}`}></div>
              <span className="text-white text-sm">
                {t('home.status')} • {t('home.response')}
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
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.accent})`,
                color: 'white'
              }}
            >
              {t('home.cta.discover')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <a
              href={generateWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-success-500 text-white font-semibold rounded-xl shadow-lg hover:bg-success-600 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('home.cta.reserve')}
            </a>
          </motion.div>

          {/* Enhanced Stats with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className={`w-6 h-6`} style={{ color: themeColors.accent }} />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Apartments Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('home.sections.featured')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('home.sections.featuredDesc')}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredApartments.map((apartment, index) => (
              <motion.div key={apartment.id} variants={fadeInUp}>
                <div className="property-card h-full">
                  <div className="relative h-48">
                    <div 
                      className="w-full h-full bg-gradient-to-br from-blue-200 to-gold-200"
                      style={{
                        background: `linear-gradient(135deg, ${themeColors.primary}20, ${themeColors.accent}40)`
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-white text-sm font-medium rounded-full"
                            style={{ backgroundColor: themeColors.primary }}>
                        {apartment.type.name}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                        {apartment.pricing.daily.toLocaleString()} FCFA/{t('apartments.perNight')}
                      </span>
                    </div>
                    
                    {/* Photo Gallery Preview */}
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      <button className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors">
                        <Camera className="w-4 h-4" />
                      </button>
                      {apartment.videos && (
                        <button className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors">
                          <Play className="w-4 h-4" />
                        </button>
                      )}
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
                        <span>{apartment.capacity} {t('property.guests')}</span>
                      </div>
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        <span>{apartment.bedrooms} {t('property.bedrooms')}</span>
                      </div>
                      <div>{apartment.surface} {t('property.surface')}</div>
                    </div>

                    <div className="flex space-x-3">
                      <Link
                        to={`/appartements/${apartment.id}`}
                        className="flex-1 text-center px-4 py-2 border text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        style={{ borderColor: themeColors.primary }}
                      >
                        {t('apartments.viewDetails')}
                      </Link>
                      <a
                        href={generateWhatsAppURL(apartment)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 text-white rounded-lg transition-colors"
                        style={{ backgroundColor: themeColors.primary }}
                      >
                        {t('apartments.reserve')}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid Section */}
      <PricingGrid />

      {/* Photo Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('property.gallery')} & {t('property.videos')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos appartements en images et vidéos
            </p>
          </motion.div>

          {/* Sample apartment gallery */}
          {featuredApartments.length > 0 && (
            <PhotoGallery apartment={featuredApartments[0]} showVideos={true} />
          )}
        </div>
      </section>

      {/* Video Presentation Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Présentations Vidéo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plongez dans l'expérience premium de nos appartements à Bonamoussadi
            </p>
          </motion.div>

          <VideoPresentation 
            apartmentName="Appartements Premium Bonamoussadi"
            autoplay={false}
            showControls={true}
            className="max-w-5xl mx-auto"
          />
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24" style={{ backgroundColor: themeColors.surface }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('home.sections.whyChoose')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('home.sections.whyChooseDesc')}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="feature-card">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {feature.benefits.map((benefit, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Studio Bonamoussadi Video Presentation */}
      <StudioPresentation />

      {/* Newsletter Section */}
      <section className="py-24" style={{ background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.accent})` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-charcoal-950 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {t('home.sections.experience')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('home.sections.experienceDesc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href={generateWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-success-500 text-white font-semibold rounded-xl shadow-lg hover:bg-success-600 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('home.cta.immediate')}
              </a>
              
              <Link
                to="/appartements"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-charcoal-950 transition-all duration-300"
              >
                {t('home.cta.explore')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+237 656 46 70 51</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@doualaluxurystays.com</span>
              </div>
              <div className="flex items-center text-success-400">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>WhatsApp 24h/7j</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeEnhancedComplete;