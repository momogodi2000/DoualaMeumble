/**
 * Enhanced Video Presentation Component
 * Professional video showcase with multiple presentation options
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  SkipBack,
  SkipForward,
  Settings,
  Download,
  Share2,
  ExternalLink,
  Camera,
  Video,
  Film,
  Monitor
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useTheme } from '../../contexts/ThemeContext';

const VideoPresentation = ({ 
  videos = [], 
  apartmentName = "",
  autoplay = false,
  showControls = true,
  className = ""
}) => {
  const { t } = useLanguage();
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();
  
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [quality, setQuality] = useState('1080p');
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Sample video data structure
  const defaultVideos = [
    {
      id: 'tour-360',
      title: 'Visite Virtuelle 360°',
      description: 'Découvrez l\'appartement sous tous les angles',
      type: 'tour',
      thumbnail: '/images/videos/tour-360-thumb.jpg',
      sources: {
        '1080p': '/videos/apartment-tour-1080p.mp4',
        '720p': '/videos/apartment-tour-720p.mp4',
        '480p': '/videos/apartment-tour-480p.mp4'
      },
      duration: '3:45',
      category: 'tour'
    },
    {
      id: 'amenities',
      title: 'Équipements et Services',
      description: 'Tous les équipements à votre disposition',
      type: 'showcase',
      thumbnail: '/images/videos/amenities-thumb.jpg',
      sources: {
        '1080p': '/videos/amenities-showcase-1080p.mp4',
        '720p': '/videos/amenities-showcase-720p.mp4',
        '480p': '/videos/amenities-showcase-480p.mp4'
      },
      duration: '2:30',
      category: 'amenities'
    },
    {
      id: 'neighborhood',
      title: 'Quartier Bonamoussadi',
      description: 'Découvrez les environs et commodités',
      type: 'location',
      thumbnail: '/images/videos/neighborhood-thumb.jpg',
      sources: {
        '1080p': '/videos/neighborhood-1080p.mp4',
        '720p': '/videos/neighborhood-720p.mp4',
        '480p': '/videos/neighborhood-480p.mp4'
      },
      duration: '4:20',
      category: 'location'
    },
    {
      id: 'testimonials',
      title: 'Témoignages Clients',
      description: 'Ce que disent nos clients satisfaits',
      type: 'testimonial',
      thumbnail: '/images/videos/testimonials-thumb.jpg',
      sources: {
        '1080p': '/videos/testimonials-1080p.mp4',
        '720p': '/videos/testimonials-720p.mp4',
        '480p': '/videos/testimonials-480p.mp4'
      },
      duration: '5:15',
      category: 'testimonials'
    }
  ];

  const videoData = videos.length > 0 ? videos : defaultVideos;
  const currentVideoData = videoData[currentVideo];

  // Video controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const changeVideo = (index) => {
    setCurrentVideo(index);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const nextVideo = () => {
    const nextIndex = (currentVideo + 1) % videoData.length;
    changeVideo(nextIndex);
  };

  const previousVideo = () => {
    const prevIndex = (currentVideo - 1 + videoData.length) % videoData.length;
    changeVideo(prevIndex);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const seekTo = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Auto-play handling
  useEffect(() => {
    if (autoplay && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [currentVideo, autoplay]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      ref={containerRef}
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        background: `linear-gradient(135deg, ${colors.background} 0%, ${colors.surface} 100%)`
      }}
    >
      {/* Header */}
      <motion.div 
        className="p-6 border-b border-gray-100"
        variants={itemVariants}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Présentation Vidéo
            </h3>
            <p className="text-gray-600">
              {apartmentName || 'Appartements Premium Bonamoussadi'}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setShowSettings(!showSettings)}
            >
              <Settings className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Video Player */}
      <motion.div 
        className="relative aspect-video bg-black"
        variants={itemVariants}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={currentVideoData?.thumbnail}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={nextVideo}
          muted={isMuted}
        >
          <source 
            src={currentVideoData?.sources?.[quality] || currentVideoData?.sources?.['1080p']} 
            type="video/mp4" 
          />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
          {/* Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 text-white hover:bg-opacity-30 transition-all"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="w-12 h-12" />
              ) : (
                <Play className="w-12 h-12 ml-1" />
              )}
            </motion.button>
          </div>

          {/* Controls */}
          {showControls && (
            <div className="absolute bottom-0 left-0 right-0 p-4">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="relative bg-gray-600 bg-opacity-50 rounded-full h-1">
                  <div 
                    className="absolute top-0 left-0 h-full bg-white rounded-full transition-all"
                    style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                  />
                  <button
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg"
                    style={{ left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                    onMouseDown={(e) => {
                      const rect = e.currentTarget.parentElement.getBoundingClientRect();
                      const percent = (e.clientX - rect.left) / rect.width;
                      seekTo(duration * percent);
                    }}
                  />
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button onClick={previousVideo} className="text-white hover:text-gray-300">
                    <SkipBack className="w-5 h-5" />
                  </button>
                  <button onClick={togglePlay} className="text-white hover:text-gray-300">
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <button onClick={nextVideo} className="text-white hover:text-gray-300">
                    <SkipForward className="w-5 h-5" />
                  </button>
                  <button onClick={toggleMute} className="text-white hover:text-gray-300">
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>

                <div className="flex items-center space-x-3 text-white text-sm">
                  <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                  <button onClick={toggleFullscreen} className="text-white hover:text-gray-300">
                    {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Video Information */}
      <motion.div 
        className="p-6"
        variants={itemVariants}
      >
        <div className="mb-4">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">
            {currentVideoData?.title}
          </h4>
          <p className="text-gray-600">
            {currentVideoData?.description}
          </p>
        </div>

        {/* Video Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['tour', 'amenities', 'location', 'testimonials'].map((category) => (
            <span
              key={category}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                currentVideoData?.category === category
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {category === 'tour' && 'Visite'}
              {category === 'amenities' && 'Équipements'}
              {category === 'location' && 'Quartier'}
              {category === 'testimonials' && 'Témoignages'}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Video Playlist */}
      <motion.div 
        className="p-6 bg-gray-50 border-t border-gray-100"
        variants={itemVariants}
      >
        <h5 className="text-lg font-semibold text-gray-900 mb-4">
          Playlist ({videoData.length} vidéos)
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videoData.map((video, index) => (
            <motion.div
              key={video.id}
              className={`relative group cursor-pointer rounded-lg overflow-hidden transition-all ${
                index === currentVideo
                  ? 'ring-2 ring-blue-500 shadow-lg'
                  : 'hover:shadow-md'
              }`}
              whileHover={{ scale: 1.02 }}
              onClick={() => changeVideo(index)}
            >
              <div className="aspect-video bg-gray-200">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/video-placeholder.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-3">
                <h6 className="text-sm font-medium text-gray-900 truncate">
                  {video.title}
                </h6>
                <p className="text-xs text-gray-500 mt-1">
                  {video.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-2xl border-l border-gray-200 z-50"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-gray-900">Paramètres</h4>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quality Settings */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Qualité Vidéo
                </label>
                <div className="space-y-2">
                  {['1080p', '720p', '480p'].map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuality(q)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        quality === q
                          ? 'bg-blue-100 text-blue-800'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {q} - {q === '1080p' ? 'HD' : q === '720p' ? 'Standard' : 'Mobile'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Playback Speed */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Vitesse de Lecture
                </label>
                <div className="space-y-2">
                  {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                    <button
                      key={speed}
                      onClick={() => setPlaybackSpeed(speed)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        playbackSpeed === speed
                          ? 'bg-blue-100 text-blue-800'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default VideoPresentation;
