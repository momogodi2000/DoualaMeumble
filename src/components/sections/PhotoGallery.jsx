/**
 * Enhanced Photo Gallery Component
 * Supports categorized photos, videos, and virtual tours
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Download,
  Share2,
  Heart,
  Camera,
  Video,
  Eye,
  Maximize
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

const PhotoGallery = ({ apartment, showVideos = true }) => {
  const { t } = useLanguage();
  const { getThemeColors } = useTheme();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Categories for photo organization
  const categories = [
    { id: 'all', name: 'Tout', icon: Camera, count: 0 },
    { id: 'exterior', name: 'Extérieur', icon: Camera, count: 0 },
    { id: 'living', name: 'Séjour', icon: Camera, count: 0 },
    { id: 'bedrooms', name: 'Chambres', icon: Camera, count: 0 },
    { id: 'kitchen', name: 'Cuisine', icon: Camera, count: 0 },
    { id: 'bathrooms', name: 'Salles de bain', icon: Camera, count: 0 },
    { id: 'videos', name: 'Vidéos', icon: Video, count: 0 }
  ];

  // Prepare media items
  const prepareMediaItems = () => {
    let mediaItems = [];
    
    // Add photos by category
    if (apartment.photoGallery) {
      Object.entries(apartment.photoGallery).forEach(([category, photos]) => {
        photos.forEach((photo, index) => {
          mediaItems.push({
            id: `${category}_${index}`,
            type: 'photo',
            category,
            url: photo.url,
            caption: photo.caption,
            thumbnail: photo.thumbnail || photo.url
          });
        });
      });
    }

    // Add regular images if no photoGallery
    if (!apartment.photoGallery && apartment.images) {
      apartment.images.forEach((image, index) => {
        mediaItems.push({
          id: `image_${index}`,
          type: 'photo',
          category: 'living',
          url: image,
          caption: `Vue ${index + 1}`,
          thumbnail: image
        });
      });
    }

    // Add videos
    if (showVideos && apartment.videos) {
      apartment.videos.forEach((video, index) => {
        mediaItems.push({
          id: video.id,
          type: 'video',
          category: 'videos',
          url: video.url,
          thumbnail: video.thumbnail,
          caption: video.title,
          description: video.description,
          duration: video.duration
        });
      });
    }

    return mediaItems;
  };

  const mediaItems = prepareMediaItems();

  // Filter media by category
  const filteredMedia = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  // Update category counts
  const categoriesWithCounts = categories.map(cat => ({
    ...cat,
    count: cat.id === 'all' 
      ? mediaItems.length 
      : mediaItems.filter(item => item.category === cat.id).length
  })).filter(cat => cat.count > 0);

  const openModal = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setIsFullscreen(false);
    setIsPlaying(false);
    document.body.style.overflow = 'unset';
  };

  const navigateMedia = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredMedia.length
      : (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
    setIsPlaying(false);
  };

  const toggleFavorite = (mediaId) => {
    setFavorites(prev => 
      prev.includes(mediaId) 
        ? prev.filter(id => id !== mediaId)
        : [...prev, mediaId]
    );
  };

  const shareMedia = async (media) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: media.caption,
          text: `Découvrez ${apartment.title}`,
          url: window.location.href
        });
      } catch (err) {
        console.log('Sharing failed:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const downloadMedia = (media) => {
    const link = document.createElement('a');
    link.href = media.url;
    link.download = `${apartment.title.replace(/\s+/g, '-')}-${media.id}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-12">
      {/* Category Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categoriesWithCounts.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2
                  ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-gold'
                    : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 shadow-soft'
                  }
                `}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMedia.map((media, index) => (
          <motion.div
            key={media.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative group cursor-pointer"
            onClick={() => openModal(media, index)}
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-200">
              <img
                src={media.thumbnail}
                alt={media.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {media.type === 'video' ? (
                    <div className="text-white text-center">
                      <Play className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm font-medium">{media.duration}</div>
                    </div>
                  ) : (
                    <Maximize className="w-8 h-8 text-white" />
                  )}
                </div>
              </div>

              {/* Type Badge */}
              <div className="absolute top-3 left-3">
                {media.type === 'video' ? (
                  <div className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
                    <Video className="w-3 h-3 mr-1" />
                    Vidéo
                  </div>
                ) : (
                  <div className="bg-black/50 text-white px-2 py-1 rounded-md text-xs font-medium">
                    <Camera className="w-3 h-3 mr-1 inline" />
                    Photo
                  </div>
                )}
              </div>

              {/* Favorite Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(media.id);
                }}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
              >
                <Heart 
                  className={`w-4 h-4 ${
                    favorites.includes(media.id) ? 'fill-red-500 text-red-500' : ''
                  }`} 
                />
              </button>
            </div>

            {/* Caption */}
            <div className="mt-2 px-2">
              <p className="text-sm font-medium text-gray-900 line-clamp-1">
                {media.caption}
              </p>
              {media.description && (
                <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                  {media.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMedia && isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            {filteredMedia.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateMedia('prev');
                  }}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateMedia('next');
                  }}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Action Buttons */}
            <div className="absolute top-6 left-6 flex space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(selectedMedia.id);
                }}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <Heart 
                  className={`w-5 h-5 ${
                    favorites.includes(selectedMedia.id) ? 'fill-red-500 text-red-500' : ''
                  }`} 
                />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  shareMedia(selectedMedia);
                }}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  downloadMedia(selectedMedia);
                }}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>

            {/* Media Content */}
            <div 
              className="max-w-7xl max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'video' ? (
                <div className="relative">
                  <video
                    src={selectedMedia.url}
                    className="max-w-full max-h-[80vh] rounded-lg"
                    controls
                    muted={isMuted}
                    autoPlay={isPlaying}
                  />
                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.caption}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
              )}
            </div>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white max-w-2xl">
              <h3 className="text-lg font-semibold mb-2">{selectedMedia.caption}</h3>
              {selectedMedia.description && (
                <p className="text-sm text-gray-300">{selectedMedia.description}</p>
              )}
              <div className="text-xs text-gray-400 mt-2">
                {currentIndex + 1} / {filteredMedia.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Navigation */}
      {typeof window !== 'undefined' && (
        <div className="hidden">
          {/* This handles keyboard events */}
          {isFullscreen && (
            <div
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Escape') closeModal();
                if (e.key === 'ArrowLeft') navigateMedia('prev');
                if (e.key === 'ArrowRight') navigateMedia('next');
                if (e.key === ' ') {
                  e.preventDefault();
                  if (selectedMedia?.type === 'video') {
                    setIsPlaying(!isPlaying);
                  }
                }
              }}
              className="absolute inset-0 outline-none"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;