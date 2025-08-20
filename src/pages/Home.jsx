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
  Clock,
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Award,
  Building,
  Heart
} from 'lucide-react';

// Enhanced imports
import { HeroTitle, Heading, Text, Lead, AccentText, Price } from '../components/atoms/Typography';
import { MotionButton, WhatsAppButton } from '../components/atoms/Button';
import { PropertyCard, TestimonialCard, MotionCard } from '../components/atoms/Card';
import { APARTMENTS_DATA, QUARTERS, getFeaturedApartments, getPopularApartments } from '../data/apartments-enhanced';
import { formatPrice, formatCapacity } from '../utils/formatting';
import { generateWhatsAppURL, generateInquiryWhatsAppURL } from '../utils/whatsapp';
import { useWhatsApp } from '../services/whatsapp-enhanced';
import NewsletterSignup from '../components/notifications/NewsletterSignup';
import StudioPresentation from '../components/sections/StudioPresentation';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { sendReservation, sendInquiry, getBusinessStatus } = useWhatsApp();
  
  // Enhanced data sources
  const featuredApartments = getFeaturedApartments();
  const popularApartments = getPopularApartments();
  
  // Premium hero configuration with logo
  const heroImages = [
    '/icons/app-logo.svg',
    '/icons/logo.jpg',
    '/images/salon bonamousadi.jpg'
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

  const features = [
    {
      icon: Shield,
      title: 'Sécurité garantie',
      description: 'Tous nos appartements sont sécurisés 24h/7j avec gardien et caméras.'
    },
    {
      icon: MessageCircle,
      title: 'Réservation WhatsApp',
      description: 'Réservez facilement via WhatsApp en quelques messages seulement.'
    },
    {
      icon: Wifi,
      title: 'WiFi haut débit',
      description: 'Internet gratuit et illimité dans tous nos logements.'
    },
    {
      icon: Car,
      title: 'Parking inclus',
      description: 'Place de parking sécurisée incluse dans tous nos appartements.'
    }
  ];

  const doualaQuarters = [
    {
      name: 'Bonamoussadi',
      description: 'Quartier résidentiel premium',
      count: 1,
      image: '/images/salon bonamousadi.jpg'
    },
    {
      name: 'Makepe College Orchide',
      description: 'Quartier étudiant moderne',
      count: 1,
      image: '/images/photo-akwa.jpg'
    },
    {
      name: 'Logbessou',
      description: 'Quartier en développement',
      count: 1,
      image: '/images/admin-sorel2.jpg'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Appartement ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Appartements Meublés
            <span className="block text-gradient">à Douala</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos appartements haut de gamme dans les meilleurs quartiers de Douala. 
            Réservation simple et rapide via WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/appartements" className="btn-primary text-lg px-8 py-4">
              Voir tous les appartements
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <button
              onClick={() => window.open(generateInquiryWhatsAppURL(), '_blank')}
              className="btn-secondary text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              Réserver via WhatsApp
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Appartements Vedettes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection d'appartements meublés dans les quartiers les plus prisés de Douala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApartments.map((apartment) => (
              <div key={apartment.id} className="card group hover:shadow-custom transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={apartment.images[0]}
                    alt={apartment.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                      {apartment.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                      {formatPrice(apartment.pricing.daily)}/nuit
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold text-gray-900">
                      {apartment.title}
                    </h3>
                    <div className="flex items-center text-secondary-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">4.9</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{apartment.location.quarter}, Douala</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{formatCapacity(apartment.capacity)}</span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{apartment.rooms} chambre{apartment.rooms > 1 ? 's' : ''}</span>
                    </div>
                    <div className="text-sm">
                      {apartment.surface} m²
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      to={`/appartements/${apartment.id}`}
                      className="flex-1 btn-outline"
                    >
                      Voir détails
                    </Link>
                    <button
                      onClick={() => window.open(generateWhatsAppURL(apartment), '_blank')}
                      className="flex-1 btn-primary"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/appartements" className="btn-outline text-lg">
              Voir tous nos appartements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Fresh Residence ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous nous engageons à vous offrir le meilleur service et confort pour votre séjour à Douala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
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

      {/* Douala Quarters */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Découvrez Douala
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nos appartements sont situés dans les quartiers les plus attractifs de Douala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doualaQuarters.map((quarter, index) => (
              <Link
                key={index}
                to={`/appartements?quarter=${quarter.name}`}
                className="card group overflow-hidden hover:shadow-custom transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={quarter.image}
                    alt={quarter.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-display text-xl font-semibold mb-1">
                      {quarter.name}
                    </h3>
                    <p className="text-sm text-gray-200">{quarter.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                      {quarter.count} logement{quarter.count > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Presentation */}
      <StudioPresentation />

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits de leur séjour à Douala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: 'Marie Dubois',
                location: 'Paris, France',
                rating: 5,
                text: 'Séjour exceptionnel dans le studio de Bonamoussadi ! L\'appartement était impeccable et très bien situé. Le service client est remarquable.',
                apartment: 'Studio Premium Bonamoussadi'
              },
              {
                id: 2,
                name: 'James Wilson',
                location: 'Londres, UK',
                rating: 5,
                text: 'Perfect for business travel. The Makepe apartment had everything I needed and the location was ideal for my meetings.',
                apartment: 'Appartement Makepe College Orchide'
              },
              {
                id: 3,
                name: 'Sophie Martin',
                location: 'Yaoundé, Cameroun',
                rating: 5,
                text: 'Un service irréprochable ! L\'appartement Logbessou était exactement conforme aux photos. Je recommande vivement.',
                apartment: 'Nouvel Appartement Logbessou'
              }
            ].map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-secondary-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                    <div className="text-sm text-primary-600 mt-1">{testimonial.apartment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary">
        <div className="container-custom">
          <NewsletterSignup />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Prêt à Réserver Votre Appartement ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant via WhatsApp pour une réservation rapide et un service personnalisé.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.open(generateInquiryWhatsAppURL(), '_blank')}
              className="btn-secondary text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              Réserver maintenant
            </button>
            
            <Link to="/appartements" className="btn-outline text-lg px-8 py-4">
              Parcourir les appartements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;