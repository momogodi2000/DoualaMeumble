import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Star, MapPin, Users, Bed, Maximize, CheckCircle, Play } from 'lucide-react';
import { APARTMENTS_DATA } from '../data/apartments-enhanced';
import { formatPrice, formatCapacity } from '../utils/formatting';
import { generateWhatsAppURL } from '../utils/whatsapp';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const ApartmentDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const [apartment, setApartment] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const foundApartment = APARTMENTS_DATA.find(apt => apt.id === id);
    if (foundApartment) {
      setApartment(foundApartment);
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-20">
        <LoadingSpinner size="lg" text="Chargement de l'appartement..." />
      </div>
    );
  }

  if (!apartment) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Appartement introuvable</h1>
          <Link to="/appartements" className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            Retour aux appartements
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <Link 
            to="/appartements" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux appartements
          </Link>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
              <div className="relative h-96">
                <img
                  src={apartment.images?.[currentImageIndex] || '/images/placeholder.jpg'}
                  alt={apartment.title || 'Apartment'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {(apartment.images || []).map((_, index) => (
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
              <div className="p-4">
                <div className="grid grid-cols-4 gap-2">
                  {(apartment.images || []).slice(0, 4).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-primary-500' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${apartment.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Section */}
            {apartment.videos && Array.isArray(apartment.videos) && apartment.videos.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Play className="w-5 h-5 mr-2 text-primary-500" />
                    Présentation Vidéo
                  </h2>
                </div>
                <div className="p-6">
                  <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100">
                    <video
                      key={apartment.videos[currentVideoIndex]?.url}
                      controls
                      className="w-full h-full object-cover"
                      poster={apartment.videos[currentVideoIndex]?.thumbnail}
                    >
                      <source src={apartment.videos[currentVideoIndex]?.url} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                  </div>
                  {apartment.videos.length > 1 && (
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {apartment.videos.map((video, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentVideoIndex(index)}
                          className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                            index === currentVideoIndex ? 'border-primary-500' : 'border-gray-200'
                          }`}
                        >
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute bottom-2 left-2 right-2">
                            <p className="text-white text-sm font-medium truncate">
                              {video.title}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Apartment Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h1 className="font-display text-3xl font-bold text-gray-900 mb-4">
                {apartment.title}
              </h1>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{apartment.quarter?.name || apartment.address || 'Douala'}, Douala</span>
                </div>
                <div className="flex items-center text-secondary-500">
                  <Star className="w-5 h-5 fill-current mr-1" />
                  <span className="font-medium">4.9</span>
                  <span className="text-gray-600 ml-1">(24 avis)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Capacité</div>
                  <div className="font-semibold">{formatCapacity(apartment.capacity)}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bed className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Chambres</div>
                  <div className="font-semibold">{apartment.type?.rooms || apartment.bedrooms || 0}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Maximize className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Surface</div>
                  <div className="font-semibold">{apartment.surface} m²</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Salles de bain</div>
                  <div className="font-semibold">{apartment.bathrooms}</div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {apartment.description || 'Description non disponible.'}
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-gray-900 mb-4">
                  Équipements et Services
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {(apartment.amenities || []).map((amenity, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">
                        {typeof amenity === 'string' ? amenity : amenity?.name || 'Équipement'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900">
                  {formatPrice(apartment.pricing?.daily || 0)}
                </div>
                <div className="text-gray-600">par nuit</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Prix semaine :</span>
                  <span className="font-medium">{formatPrice(apartment.pricing?.weekly || 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Prix mensuel :</span>
                  <span className="font-medium">{formatPrice(apartment.pricing?.monthly || 0)}</span>
                </div>
              </div>

              <button
                onClick={() => window.open(generateWhatsAppURL(apartment), '_blank')}
                className="w-full btn-primary mb-4"
              >
                <MessageCircle className="w-5 h-5" />
                Réserver via WhatsApp
              </button>

              <div className="text-center text-sm text-gray-600">
                Réponse rapide garantie sous 2h
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Informations importantes</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Check-in : 14h00</li>
                  <li>• Check-out : 11h00</li>
                  <li>• Annulation gratuite 24h avant</li>
                  <li>• WiFi gratuit inclus</li>
                  <li>• Parking sécurisé</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetail;