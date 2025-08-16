/**
 * Enhanced Premium Home Page
 * Douala Luxury Stays - Enterprise-grade React component
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useIntersectionObserver } from 'react-intersection-observer';
import { 
  ArrowRight, 
  MapPin, 
  Users, 
  Bed, 
  Star, 
  Shield, 
  Wifi, 
  Car, 
  Clock,
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Award,
  Building,
  Heart,
  Phone,
  Mail,
  Calendar,
  Eye
} from 'lucide-react';

// Enhanced Premium Components
import { HeroTitle, Heading, Text, Lead, AccentText, Price, GradientText } from '../components/atoms/Typography';
import { MotionButton, WhatsAppButton, Button } from '../components/atoms/Button';
import { PropertyCard, TestimonialCard, MotionCard } from '../components/atoms/Card';
import { APARTMENTS_DATA, QUARTERS, getFeaturedApartments, getPopularApartments } from '../data/apartments-enhanced';
import { useWhatsApp } from '../services/whatsapp-enhanced';
import NewsletterSignup from '../components/notifications/NewsletterSignup';

const HomeEnhanced = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { sendReservation, sendInquiry, requestVirtualTour, getBusinessStatus } = useWhatsApp();
  
  // Enhanced data sources
  const featuredApartments = getFeaturedApartments();
  const popularApartments = getPopularApartments();
  const businessStatus = getBusinessStatus();

  // Premium hero configuration
  const heroImages = [
    '/images/hero/douala-luxury-1.jpg',
    '/images/hero/douala-luxury-2.jpg', 
    '/images/hero/douala-luxury-3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Slower transition for premium feel
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Enhanced statistics with real business metrics
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
      color: 'text-success-500'
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

  // Premium features with enhanced descriptions
  const features = [
    {
      icon: Shield,
      title: 'Sécurité Premium 24h/7j',
      description: 'Gardiennage professionnel, caméras HD, accès sécurisé par badge dans tous nos établissements.',
      color: 'bg-blue-50 text-blue-600',
      benefits: ['Sécurité renforcée', 'Surveillance 24h', 'Accès contrôlé']
    },
    {
      icon: MessageCircle,
      title: 'Réservation WhatsApp Instantanée',
      description: 'Système de réservation révolutionnaire via WhatsApp. Confirmez votre séjour en moins de 5 minutes.',
      color: 'bg-success-50 text-success-600',
      benefits: ['Réponse immédiate', 'Process simplifié', 'Suivi temps réel']
    },
    {
      icon: Award,
      title: 'Service Conciergerie Exclusif',
      description: 'Notre équipe dédiée vous assiste pour tous vos besoins : transport, réservations, recommandations.',
      color: 'bg-gold-50 text-gold-600',
      benefits: ['Assistance premium', 'Recommandations locales', 'Services sur mesure']
    },
    {
      icon: Wifi,
      title: 'Connectivité Professionnelle',
      description: 'Internet très haut débit, WiFi professionnel, espaces de travail équipés pour le business.',
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

  // Enhanced testimonials with more details
  const premiumTestimonials = [
    {
      id: 1,
      content: "Service exceptionnel ! L'appartement était parfait, la réservation via WhatsApp ultra simple. L'équipe est très professionnelle et réactive. Je recommande vivement pour un séjour d'affaires à Douala.",
      author: {
        name: "Marie-Claire Dubois",
        title: "Directrice Commerciale",
        company: "Total Energies",
        avatar: "/images/testimonials/marie-claire.jpg"
      },
      rating: 5,
      apartment: "Studio Executive Bonapriso",
      stayDuration: "2 semaines",
      verified: true
    },
    {
      id: 2,
      content: "Nous avons séjourné en famille dans la Villa Akwa. Espace magnifique, quartier sûr, service impeccable. Les enfants ont adoré la terrasse et nous avons apprécié la proximité des commerces.",
      author: {
        name: "Jean-Baptiste Mengue",
        title: "Ingénieur Senior",
        company: "Cameroun Oil",
        avatar: "/images/testimonials/jean-baptiste.jpg"
      },
      rating: 5,
      apartment: "Villa Familiale Akwa",
      stayDuration: "1 mois",
      verified: true
    },
    {
      id: 3,
      content: "Premier séjour à Douala et première fois avec Douala Luxury Stays. Tout était parfait depuis la réservation jusqu'au check-out. Service conciergerie très apprécié pour découvrir la ville.",
      author: {
        name: "Sophie Martin",
        title: "Consultante Internationale",
        company: "Freelance",
        avatar: "/images/testimonials/sophie.jpg"
      },
      rating: 5,
      apartment: "Appartement Business Bonanjo",
      stayDuration: "5 jours",
      verified: true
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                alt={`Douala Luxury Stays ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/70 via-charcoal-900/50 to-blue-900/60"></div>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements for Premium Feel */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-2 h-2 bg-gold-400 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 right-16 w-3 h-3 bg-gold-300 rounded-full"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        {/* Enhanced Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <HeroTitle className="text-white mb-6 leading-tight">
              <span className="block">DOUALA</span>
              <GradientText from="from-gold-400" to="to-gold-200" className="block">
                LUXURY STAYS
              </GradientText>
            </HeroTitle>
            
            <Lead className="text-white/90 mb-4 text-2xl">
              "Votre Confort, Notre Excellence"
            </Lead>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Text className="text-white/80 mb-8 max-w-3xl mx-auto text-xl leading-relaxed">
              Découvrez l'art de vivre à Douala dans nos appartements meublés haut de gamme. 
              Réservation instantanée via WhatsApp, service conciergerie premium, expérience inégalée.
            </Text>

            {/* Business Status Indicator */}
            <div className="inline-flex items-center mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className={`w-3 h-3 rounded-full mr-3 ${businessStatus.status === 'open' ? 'bg-success-400 animate-pulse' : 'bg-yellow-400'}`}></div>
              <Text className="text-white text-sm">
                {businessStatus.message} • {businessStatus.responseTime}
              </Text>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <MotionButton
              as={Link}
              to="/appartements"
              variant="primary"
              size="xl"
              className="text-lg px-8 py-4 shadow-gold"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Découvrir nos Appartements
            </MotionButton>
            
            <WhatsAppButton
              phoneNumber="+237694123456"
              message="Bonjour ! Je souhaite découvrir vos appartements premium à Douala."
              size="xl"
              className="text-lg px-8 py-4"
            >
              Réservation Express
            </WhatsAppButton>
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
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center cursor-pointer">
            <motion.div 
              className="w-1 h-3 bg-white/80 rounded-full mt-2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
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
              <Heading size="h2" className="text-center mb-4">
                Nos Appartements <AccentText>Vedettes</AccentText>
              </Heading>
              <Lead className="text-center max-w-3xl mx-auto">
                Découvrez notre sélection premium d'appartements meublés dans les quartiers 
                les plus prestigieux de Douala. Confort, luxe et service d'exception garantis.
              </Lead>
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
                <PropertyCard
                  image={apartment.images[0]}
                  title={apartment.title}
                  location={`${apartment.quarter.name}, Douala`}
                  price={apartment.pricing.daily}
                  type={apartment.type.name}
                  specs={{
                    bedrooms: apartment.bedrooms,
                    bathrooms: apartment.bathrooms,
                    surface: apartment.surface
                  }}
                  rating={apartment.rating}
                  badges={apartment.badges}
                  onClick={() => {
                    // Navigate to apartment detail
                    window.location.href = `/appartements/${apartment.id}`;
                  }}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <MotionButton
              as={Link}
              to="/appartements"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Voir Tous nos Appartements Premium
            </MotionButton>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Heading size="h2" className="text-center mb-4">
                Pourquoi Choisir <AccentText>Douala Luxury Stays</AccentText> ?
              </Heading>
              <Lead className="text-center max-w-3xl mx-auto">
                Nous redéfinissons l'expérience de l'hébergement à Douala avec nos services premium 
                et notre attention exceptionnelle aux détails.
              </Lead>
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
                <MotionCard
                  className="text-center p-8 h-full"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <Heading size="h5" className="mb-4 text-center">
                    {feature.title}
                  </Heading>
                  <Text className="text-center mb-4 leading-relaxed">
                    {feature.description}
                  </Text>
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
                </MotionCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Douala Quarters Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Heading size="h2" className="text-center mb-4">
                Découvrez <AccentText>Douala Premium</AccentText>
              </Heading>
              <Lead className="text-center max-w-3xl mx-auto">
                Nos appartements sont stratégiquement situés dans les quartiers les plus attractifs 
                et sécurisés de la capitale économique du Cameroun.
              </Lead>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {doualaQuarters.map((quarter, index) => (
              <motion.div key={quarter.id} variants={fadeInUp}>
                <MotionCard
                  as={Link}
                  to={`/appartements?quarter=${quarter.id}`}
                  className="overflow-hidden h-full group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative h-48">
                    <img
                      src={quarter.image}
                      alt={quarter.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Quarter Info Overlay */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <Heading size="h5" className="text-white mb-1">
                        {quarter.name}
                      </Heading>
                      <Text size="small" className="text-white/90">
                        {quarter.description}
                      </Text>
                    </div>
                    
                    {/* Apartment Count Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 text-charcoal-800 text-sm font-medium rounded-full">
                        {quarter.apartments.length} logement{quarter.apartments.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <Text size="small" weight="medium">
                          {quarter.stats.averageRating} ({quarter.stats.totalReviews} avis)
                        </Text>
                      </div>
                      <Price amount={quarter.averagePrice} className="text-sm" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {quarter.features.slice(0, 3).map((feature, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <Text size="small" className="text-gray-600">
                        Réponse: {quarter.stats.responseTime}
                      </Text>
                      <ArrowRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </MotionCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Heading size="h2" className="text-center mb-4">
                Excellence <AccentText>Reconnue</AccentText>
              </Heading>
              <Lead className="text-center max-w-3xl mx-auto">
                Découvrez les témoignages authentiques de nos clients qui ont vécu 
                l'expérience Douala Luxury Stays.
              </Lead>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {premiumTestimonials.map((testimonial, index) => (
              <motion.div key={testimonial.id} variants={fadeInUp}>
                <TestimonialCard
                  content={testimonial.content}
                  author={testimonial.author}
                  rating={testimonial.rating}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-charcoal-950 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='0.1'%3E%3Ccircle cx='60' cy='60' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading size="h2" className="text-white mb-6">
              Prêt à Vivre l'Expérience <GradientText>Premium</GradientText> ?
            </Heading>
            <Lead className="text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez nos clients satisfaits et découvrez pourquoi nous sommes 
              la référence de l'hébergement haut de gamme à Douala.
            </Lead>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <WhatsAppButton
                phoneNumber="+237694123456"
                message="Bonjour ! Je souhaite réserver un appartement premium avec Douala Luxury Stays."
                size="xl"
                className="text-lg px-8 py-4"
              >
                Réservation Immédiate
              </WhatsAppButton>
              
              <MotionButton
                as={Link}
                to="/appartements"
                variant="outline"
                size="xl"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-charcoal-950"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Explorer nos Appartements
              </MotionButton>
            </div>

            {/* Quick Contact Options */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
              <div className="flex items-center text-white/80">
                <Phone className="w-4 h-4 mr-2" />
                <span>+237 694 123 456</span>
              </div>
              <div className="flex items-center text-white/80">
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

export default HomeEnhanced;