/**
 * Enhanced Motion Variants for Framer Motion Animations
 * Premium animation presets for luxury apartment website
 */

// ============= BASIC ANIMATIONS =============

// Fade animations with enhanced timing
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

// ============= LUXURY SCALE ANIMATIONS =============

export const luxuryScaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 100
    }
  }
};

export const premiumHover = {
  hover: { 
    scale: 1.03,
    y: -8,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { 
      duration: 0.4, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

export const goldShimmer = {
  animate: {
    background: [
      "linear-gradient(90deg, #D4A574 0%, #F7E7CE 50%, #D4A574 100%)",
      "linear-gradient(90deg, #F7E7CE 0%, #D4A574 50%, #F7E7CE 100%)",
      "linear-gradient(90deg, #D4A574 0%, #F7E7CE 50%, #D4A574 100%)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ============= STAGGER ANIMATIONS =============

export const luxuryStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      duration: 0.6
    }
  }
};

export const luxuryStaggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  }
};

export const cascadeStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

// ============= PREMIUM SLIDE ANIMATIONS =============

export const premiumSlideUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  }
};

export const luxurySlideIn = {
  hidden: { opacity: 0, x: -100, scale: 0.8 },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 1.0, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  }
};

// ============= ROTATION & COMPLEX ANIMATIONS =============

export const elegantRotateIn = {
  hidden: { opacity: 0, rotate: -90, scale: 0.5 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    scale: 1,
    transition: { 
      duration: 1.5, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  }
};

export const premiumBounce = {
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
      stiffness: 200,
      damping: 15,
      duration: 1.8
    } 
  }
};

export const luxuryFloat = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const goldSparkle = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    rotate: [0, 180, 360],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ============= CARD ANIMATIONS =============

export const luxuryCard = {
  hidden: { opacity: 0, y: 50, rotateY: -15 },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateY: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  },
  hover: { 
    y: -12,
    rotateY: 5,
    boxShadow: "0 32px 64px -12px rgba(0, 0, 0, 0.25)",
    transition: { 
      duration: 0.4, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  }
};

export const premiumCardFlip = {
  hover: {
    rotateY: 180,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

// ============= TEXT ANIMATIONS =============

export const luxuryTypewriter = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "auto",
    opacity: 1,
    transition: { 
      width: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 }
    }
  }
};

export const premiumTextReveal = {
  hidden: { opacity: 0, y: 100 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  })
};

export const goldGradientText = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ============= PAGE TRANSITIONS =============

export const luxuryPageTransition = {
  initial: { opacity: 0, scale: 0.95, y: 40 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 1.05, 
    y: -40,
    transition: { 
      duration: 0.5, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  }
};

export const premiumSlideTransition = {
  initial: { x: "100%", opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  },
  exit: { 
    x: "-100%", 
    opacity: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  }
};

// ============= MODAL ANIMATIONS =============

export const luxuryModalBackdrop = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

export const luxuryModalContent = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    y: 100,
    rotateX: -15
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    rotateX: 0,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 25,
      duration: 0.6
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    y: 100,
    rotateX: 15,
    transition: { duration: 0.3 }
  }
};

// ============= INTERACTIVE ANIMATIONS =============

export const magneticHover = {
  hover: {
    scale: 1.1,
    rotate: [0, -1, 1, 0],
    transition: {
      scale: { duration: 0.3 },
      rotate: { duration: 0.5, repeat: Infinity }
    }
  }
};

export const pulseOnHover = {
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity
    }
  }
};

export const luxuryButton = {
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 40px -8px rgba(0, 0, 0, 0.3)",
    background: "linear-gradient(135deg, #F7E7CE 0%, #D4A574 100%)",
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

// ============= LOADING ANIMATIONS =============

export const luxurySpinner = {
  animate: {
    rotate: [0, 360],
    scale: [1, 1.1, 1],
    transition: {
      rotate: { duration: 1, repeat: Infinity, ease: "linear" },
      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  }
};

export const goldRipple = {
  animate: {
    scale: [1, 2, 3],
    opacity: [1, 0.5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeOut"
    }
  }
};

// ============= SCROLL ANIMATIONS =============

export const parallaxY = (speed = 1) => ({
  animate: {
    y: [`${-10 * speed}px`, `${10 * speed}px`],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
});

export const scrollReveal = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// ============= HERO ANIMATIONS =============

export const heroTitle = {
  hidden: { opacity: 0, y: 100, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 0.2
    }
  }
};

export const heroSubtitle = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 0.8
    }
  }
};

export const heroButton = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 1.2
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 25px 50px -12px rgba(212, 165, 116, 0.5)",
    transition: {
      duration: 0.3
    }
  }
};

// ============= LEGACY ANIMATIONS (for compatibility) =============

export const scaleIn = luxuryScaleIn;
export const scaleOnHover = premiumHover;
export const staggerContainer = luxuryStaggerContainer;
export const staggerItem = luxuryStaggerItem;
export const slideInFromBottom = premiumSlideUp;
export const slideInFromTop = fadeInDown;
export const rotateIn = elegantRotateIn;
export const cardHover = luxuryCard.hover;
export const cardTap = { tap: { scale: 0.98 } };
export const typewriter = luxuryTypewriter;
export const bounceIn = premiumBounce;
export const floatingAnimation = luxuryFloat;
export const pageTransition = luxuryPageTransition;
export const modalBackdrop = luxuryModalBackdrop;
export const modalContent = luxuryModalContent;