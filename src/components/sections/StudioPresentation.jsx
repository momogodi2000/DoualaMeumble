/**
 * Studio Presentation Component
 * Showcases the Bonamoussadi studio with video presentation
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Eye,
  Star,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Wifi,
  Shield,
  Car,
  Coffee
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

const StudioPresentation = ({ apartment = null }) => {
  const { getThemeColors } = useTheme();
  const { t } = useLanguage();
  const colors = getThemeColors();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const videoRef = useRef(null);

  // Studio Bonamoussadi data
  const studioData = apartment || {
    id: 'apt_bon_001',
    title: 'Studio Premium Bonamoussadi',
    location: 'Bonamoussadi, Douala',
    price: 28000,
    rating: 4.9,
    reviews: 24,
    bedrooms: 1,
    bathrooms: 1,
    surface: 38,
    images: [
      '/images/bonamoussadi/studio-main.jpg',
      '/images/bonamoussadi/studio-kitchen.jpg',
      '/images/bonamoussadi/studio-bathroom.jpg',
      '/images/bonamoussadi/studio-balcony.jpg'
    ],
    video: {
      poster: '/images/bonamoussadi/studio-video-poster.jpg',
      src: '/videos/bonamoussadi-studio-presentation.mp4',
      duration: '2:30'
    },
    features: [
      { icon: Wifi, text: 'WiFi Haut Débit' },
      { icon: Shield, text: 'Sécurité 24h/7j' },
      { icon: Car, text: 'Parking Gratuit' },
      { icon: Coffee, text: 'Cuisine Équipée' }
    ],
    amenities: [
      'Climatisation silencieuse',
      'TV câble/satellite',
      'Lave-linge automatique',
      'Réfrigérateur congélateur',
      'Micro-ondes',
      'Balcon avec vue',
      'Ménage hebdomadaire',
      'Linge fourni'
    ]
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
    };

    const updateDuration = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [showVideo]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleProgressClick = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    
    video.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white mb-4"
            style={{ backgroundColor: colors.primary }}
          >
            Présentation Vidéo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Découvrez Notre Studio Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visitez virtuellement notre magnifique studio à Bonamoussadi et découvrez 
            tout ce qui fait son charme et son confort exceptionnel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="relative"
          >
            {!showVideo ? (
              // Video Poster
              <div className="relative rounded-2xl overflow-hidden shadow-luxury group cursor-pointer">
                <div className="aspect-video relative">
                  <img
                    src={studioData.video.poster}
                    alt="Aperçu Studio Bonamoussadi"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJvbmFtb3Vzc2FkaSBTdHVkaW88L3RleHQ+PC9zdmc+';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      onClick={() => setShowVideo(true)}
                      className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center text-gray-900 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </motion.button>
                  </div>

                  {/* Video Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    {studioData.video.duration}
                  </div>

                  {/* Video Quality Badge */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    HD
                  </div>
                </div>
              </div>
            ) : (
              // Video Player
              <div className="relative rounded-2xl overflow-hidden shadow-luxury bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full aspect-video"
                  poster={studioData.video.poster}
                  onError={() => {
                    // Fallback if video doesn't exist
                    setShowVideo(false);
                  }}
                >
                  <source src={studioData.video.src} type="video/mp4" />
                  <track kind="captions" srcLang="fr" label="Français" default />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  {/* Progress Bar */}
                  <div 
                    className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-3"
                    onClick={handleProgressClick}
                  >
                    <div 
                      className="h-full rounded-full transition-all duration-200"
                      style={{ 
                        width: `${progress}%`,
                        backgroundColor: colors.primary 
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={togglePlay}
                        className="p-2 text-white hover:text-gray-300 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                      </button>
                      
                      <button
                        onClick={toggleMute}
                        className="p-2 text-white hover:text-gray-300 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      
                      <span className="text-white text-sm">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <button
                      onClick={() => videoRef.current?.requestFullscreen?.()}
                      className="p-2 text-white hover:text-gray-300 transition-colors"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Studio Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(studioData.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">
                    {studioData.rating} ({studioData.reviews} avis)
                  </span>
                </div>
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {studioData.title}
              </h3>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{studioData.location}</span>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="text-gray-700">{studioData.bedrooms} chambre</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="text-gray-700">{studioData.bathrooms} salle de bain</span>
                </div>
                <div className="flex items-center">
                  <Maximize2 className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="text-gray-700">{studioData.surface} m²</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold" style={{ color: colors.primary }}>
                    {studioData.price.toLocaleString()} FCFA
                  </span>
                  <span className="text-gray-600 ml-2">/ nuit</span>
                </div>
                <a
                  href={`https://wa.me/237656467051?text=Bonjour, je souhaite réserver le ${studioData.title} pour ${studioData.price} FCFA/nuit`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  Réserver
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {studioData.features.map((feature, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <feature.icon className="w-5 h-5 mr-3" style={{ color: colors.primary }} />
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Équipements inclus</h4>
              <div className="grid grid-cols-1 gap-2">
                {studioData.amenities.slice(0, 6).map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div 
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: colors.primary }}
                    />
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
              
              {studioData.amenities.length > 6 && (
                <button className="mt-3 text-sm font-medium" style={{ color: colors.primary }}>
                  Voir tous les équipements ({studioData.amenities.length})
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioPresentation;