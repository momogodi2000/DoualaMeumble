/**
 * Enhanced Premium Logo Component
 * Beautiful animated logo with multiple variants and theme support
 */

import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Building2, Home, Crown, Star } from 'lucide-react';

const Logo = ({ 
  variant = 'full', 
  size = 'md', 
  animate = true,
  className = ''
}) => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  const sizes = {
    xs: { text: 'text-lg', icon: 'w-6 h-6', subtitle: 'text-xs' },
    sm: { text: 'text-xl', icon: 'w-8 h-8', subtitle: 'text-sm' },
    md: { text: 'text-2xl', icon: 'w-10 h-10', subtitle: 'text-base' },
    lg: { text: 'text-3xl', icon: 'w-12 h-12', subtitle: 'text-lg' },
    xl: { text: 'text-4xl', icon: 'w-16 h-16', subtitle: 'text-xl' }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -10
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const subTextVariants = {
    hidden: { 
      opacity: 0, 
      y: 10 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Icon only variant
  if (variant === 'icon') {
    return (
      <motion.div
        className={`inline-flex items-center justify-center ${className}`}
        variants={animate ? logoVariants : {}}
        initial={animate ? "hidden" : "visible"}
        animate="visible"
        whileHover="hover"
      >
        <motion.div
          variants={animate ? iconVariants : {}}
          className={`
            relative ${sizes[size].icon}
            bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600
            rounded-xl shadow-gold
            flex items-center justify-center
            text-white
          `}
          style={{
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
          }}
        >
          <Building2 className="w-1/2 h-1/2" />
          
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </motion.div>
    );
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <motion.div
        className={`inline-flex items-center space-x-3 ${className}`}
        variants={animate ? logoVariants : {}}
        initial={animate ? "hidden" : "visible"}
        animate="visible"
        whileHover="hover"
      >
        <motion.div
          variants={animate ? iconVariants : {}}
          className={`
            relative ${sizes[size].icon}
            bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600
            rounded-xl shadow-gold
            flex items-center justify-center
            text-white
          `}
        >
          <Building2 className="w-1/2 h-1/2" />
          <Crown className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
        </motion.div>
        
        <motion.div variants={animate ? textVariants : {}}>
          <div className={`${sizes[size].text} font-display font-bold text-gray-900`}>
            <span style={{ color: colors.primary }}>Douala</span>
            <span className="text-gray-700"> Stays</span>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Full variant (default)
  return (
    <motion.div
      className={`inline-flex flex-col items-center ${className}`}
      variants={animate ? logoVariants : {}}
      initial={animate ? "hidden" : "visible"}
      animate="visible"
      whileHover="hover"
    >
      {/* Logo Icon */}
      <motion.div
        variants={animate ? iconVariants : {}}
        className={`
          relative ${sizes[size].icon}
          bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600
          rounded-2xl shadow-luxury
          flex items-center justify-center
          text-white mb-3
          border-4 border-white
        `}
        style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
        }}
      >
        <Building className="w-1/2 h-1/2" />
        
        {/* Decorative crown */}
        <motion.div
          className="absolute -top-2 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, -2, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Crown className="w-6 h-6 text-yellow-400 drop-shadow-sm" />
        </motion.div>

        {/* Floating stars */}
        <motion.div
          className="absolute -top-1 -right-1"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
        </motion.div>

        <motion.div
          className="absolute -bottom-1 -left-1"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Star className="w-3 h-3 text-yellow-300 fill-current" />
        </motion.div>
      </motion.div>

      {/* Main Text */}
      <motion.div 
        variants={animate ? textVariants : {}}
        className="text-center"
      >
        <div className={`${sizes[size].text} font-display font-bold leading-tight`}>
          <div style={{ color: colors.primary }}>DOUALA</div>
          <div className="text-gray-700">LUXURY STAYS</div>
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.div 
        variants={animate ? subTextVariants : {}}
        className="text-center mt-2"
      >
        <div className="text-sm font-medium text-gray-600 tracking-wider">
          "Votre Confort, Notre Excellence"
        </div>
        
        {/* Rating stars */}
        <div className="flex items-center justify-center mt-1 space-x-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            >
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Logo;