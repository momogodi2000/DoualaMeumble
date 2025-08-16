import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  Users, 
  Shield, 
  Clock, 
  Heart, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Star,
  MessageCircle,
  Phone,
  Building2,
  MapPin,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { t } = useLanguage();
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // CEO Carousel Images
  const ceoImages = [
    {
      src: '/images/admin-sorel2.jpg',
      alt: 'MOMO Sorel - PDG Douala Luxury Stays',
      title: 'MOMO Sorel',
      subtitle: 'Fondatrice & PDG'
    },
    {
      src: '/images/sorel-admin.jpg', 
      alt: 'MOMO Sorel - Entrepreneur',
      title: 'MOMO Sorel',
      subtitle: 'Visionnaire de l\'immobilier'
    }
  ];

  // Auto-slide every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ceoImages.length);
    }, 30000);

    return () => clearInterval(timer);
  }, [ceoImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % ceoImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + ceoImages.length) % ceoImages.length);
  };

  const stats = [
    { value: '1000+', label: 'Clients satisfaits', icon: Users },
    { value: '4.9/5', label: 'Note moyenne', icon: Star },
    { value: '25+', label: 'Appartements premium', icon: Building2 },
    { value: '24h/7j', label: 'Support client', icon: Clock }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Sécurité Premium',
      description: 'Tous nos appartements bénéficient d\'une sécurité renforcée avec gardien et surveillance 24h/7j pour votre tranquillité d\'esprit.'
    },
    {
      icon: Heart,
      title: 'Confort Absolu',
      description: 'Nous sélectionnons uniquement des logements répondant à nos standards élevés de luxe et de confort pour une expérience inoubliable.'
    },
    {
      icon: Users,
      title: 'Service Exceptionnel',
      description: 'Une équipe dédiée et expérimentée pour vous accompagner avant, pendant et après votre séjour avec un service personnalisé.'
    },
    {
      icon: Clock,
      title: 'Réactivité Express',
      description: 'Réservation instantanée via WhatsApp avec confirmation immédiate et support client disponible à tout moment.'
    }
  ];

  const upcomingQuarters = [
    {
      name: 'Logpom',
      description: 'Nouveau quartier résidentiel premium en développement',
      status: 'Bientôt disponible',
      features: ['Résidences modernes', 'Sécurité renforcée', 'Proximité centres commerciaux']
    },
    {
      name: 'Logbessou', 
      description: 'Zone d\'expansion avec appartements haut de gamme',
      status: 'Prochainement',
      features: ['Quartier calme', 'Infrastructures neuves', 'Accès facile centre-ville']
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}90, ${colors.secondary}90)`
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              À Propos de Douala Luxury Stays
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Pionniers de l'hébergement premium à Douala depuis 2025. 
              Nous redéfinissons l'expérience de l'hébergement de luxe à Bonamoussadi et dans toute la capitale économique du Cameroun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEO Section with Carousel */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* CEO Carousel */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-luxury">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={ceoImages[currentImageIndex].src}
                      alt={ceoImages[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1PTU8gU29yZWw8L3RleHQ+PC9zdmc+';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">
                        {ceoImages[currentImageIndex].title}
                      </h3>
                      <p className="text-lg opacity-90">
                        {ceoImages[currentImageIndex].subtitle}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {ceoImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CEO Story */}
            <motion.div variants={fadeInUp}>
              <div className="mb-6">
                <span 
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white mb-4"
                  style={{ backgroundColor: colors.primary }}
                >
                  Fondatrice & Visionnaire
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  MOMO Sorel
                  <span className="block text-xl font-normal text-gray-600 mt-2">
                    Entrepreneure & PDG
                  </span>
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  <strong>MOMO Sorel</strong>, entrepreneure visionnaire et fondatrice de Douala Luxury Stays, 
                  a révolutionné le marché de l'hébergement premium à Douala depuis 2025.
                </p>
                <p>
                  Avec une passion pour l'excellence et une vision claire de l'avenir de l'hospitalité au Cameroun, 
                  elle a créé une plateforme qui redéfinit les standards de l'hébergement de luxe.
                </p>
                <p>
                  Son expertise en immobilier et sa connaissance approfondie du marché doualaís lui permettent 
                  d'offrir des expériences d'hébergement exceptionnelles, particulièrement dans le quartier 
                  prestigieux de Bonamoussadi.
                </p>
                <p className="font-semibold" style={{ color: colors.primary }}>
                  "Notre mission est de faire de chaque séjour une expérience inoubliable, 
                  alliant luxe, confort et authenticité camerounaise."
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/237656467051?text=Bonjour MOMO Sorel, j'aimerais en savoir plus sur Douala Luxury Stays"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contacter MOMO Sorel
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: colors.surface }}>
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <stat.icon className="w-8 h-8" style={{ color: colors.primary }} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.primary }}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Quarters */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nouveaux Quartiers en Développement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous étendons notre réseau d'appartements premium vers de nouveaux quartiers 
              stratégiques de Douala pour mieux vous servir.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {upcomingQuarters.map((quarter, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="p-8 rounded-2xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-2xl font-bold text-gray-900">
                      {quarter.name}
                    </h3>
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: colors.accent }}
                    >
                      {quarter.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {quarter.description}
                  </p>
                  
                  <div className="space-y-2">
                    {quarter.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20" style={{ backgroundColor: colors.surface }}>
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <Building2 className="w-10 h-10" style={{ color: colors.primary }} />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Rejoignez Notre Réseau Premium
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Propriétaires d'appartements de luxe, intégrez notre réseau exclusif 
                et bénéficiez de notre expertise marketing pour maximiser vos revenus.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-luxury border-2" style={{ borderColor: `${colors.primary}30` }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                    Partenariat Exclusif
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Marketing digital professionnel</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Gestion complète des réservations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Service client 24h/7j</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Visibilité sur notre plateforme premium</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-4xl font-bold" style={{ color: colors.primary }}>
                      40 000 FCFA
                    </div>
                    <div className="text-gray-600">Frais d'inscription unique</div>
                  </div>
                  
                  <a
                    href="https://wa.me/237656467051?text=Bonjour, je souhaite inscrire mon appartement dans votre réseau premium pour 40,000 FCFA. Pouvez-vous me donner plus d'informations ?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Rejoindre le Réseau
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui nous guident au quotidien pour vous offrir une expérience d'exception.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-center h-full p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <value.icon className="w-8 h-8" style={{ color: colors.primary }} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
          }}
        />
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Prêt à Découvrir l'Excellence ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Rejoignez nos clients satisfaits et découvrez pourquoi Douala Luxury Stays 
              est la référence de l'hébergement premium à Douala.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/237656467051?text=Bonjour, je souhaite découvrir vos appartements premium à Bonamoussadi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Réserver Maintenant
              </a>
              <a
                href="/appartements"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Voir nos Appartements
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;