/**
 * Design Tokens for Douala Luxury Stays
 * Enterprise-grade design system constants
 */

export const BRAND_COLORS = {
  primary: {
    gold: '#D4A574',
    blue: '#1E3A5F',
    charcoal: '#2C2C2C',
    white: '#FFFFFF',
  },
  accent: {
    success: '#27AE60', // WhatsApp Green
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  }
};

export const TYPOGRAPHY = {
  fonts: {
    display: ['Playfair Display', 'Georgia', 'serif'],
    body: ['Inter', 'system-ui', 'sans-serif'],
    accent: ['Poppins', 'system-ui', 'sans-serif'],
  },
  sizes: {
    hero: 'text-5xl md:text-6xl lg:text-7xl',
    h1: 'text-4xl md:text-5xl lg:text-6xl',
    h2: 'text-3xl md:text-4xl lg:text-5xl',
    h3: 'text-2xl md:text-3xl lg:text-4xl',
    h4: 'text-xl md:text-2xl lg:text-3xl',
    h5: 'text-lg md:text-xl lg:text-2xl',
    h6: 'text-base md:text-lg lg:text-xl',
    body: 'text-base',
    small: 'text-sm',
    tiny: 'text-xs',
  },
  weights: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  }
};

export const SPACING = {
  section: 'py-16 md:py-24 lg:py-32',
  container: 'px-4 sm:px-6 lg:px-8',
  gap: {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
    xxl: 'gap-16',
  }
};

export const SHADOWS = {
  soft: 'shadow-soft',
  medium: 'shadow-medium',
  hard: 'shadow-hard',
  luxury: 'shadow-luxury',
  gold: 'shadow-gold',
};

export const ANIMATIONS = {
  duration: {
    fast: 'duration-200',
    normal: 'duration-300',
    slow: 'duration-500',
    slower: 'duration-700',
  },
  ease: {
    default: 'ease-out',
    in: 'ease-in',
    out: 'ease-out',
    inOut: 'ease-in-out',
  }
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const Z_INDEX = {
  dropdown: 'z-10',
  sticky: 'z-20',
  fixed: 'z-30',
  modal: 'z-40',
  popover: 'z-50',
  tooltip: 'z-60',
  notification: 'z-70',
};