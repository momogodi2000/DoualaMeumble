/**
 * Button Component System
 * Enterprise-grade button components with accessibility and motion
 */

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ANIMATIONS } from '@/constants/design-tokens';

const baseClasses = `
  inline-flex items-center justify-center
  font-accent font-semibold
  transition-all duration-300
  focus:outline-none focus:ring-2 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  antialiased
`;

// Button Variants
const variants = {
  primary: `
    bg-gradient-to-r from-gold-500 to-gold-600
    text-white shadow-gold
    hover:from-gold-600 hover:to-gold-700 hover:shadow-lg
    focus:ring-gold-500
    active:transform active:scale-95
  `,
  secondary: `
    bg-blue-500 text-white shadow-medium
    hover:bg-blue-600 hover:shadow-lg
    focus:ring-blue-500
    active:transform active:scale-95
  `,
  outline: `
    border-2 border-gold-500 text-gold-600
    bg-transparent
    hover:bg-gold-500 hover:text-white hover:shadow-gold
    focus:ring-gold-500
  `,
  ghost: `
    text-charcoal-700 bg-transparent
    hover:bg-charcoal-100 hover:text-charcoal-900
    focus:ring-charcoal-500
  `,
  whatsapp: `
    bg-success-500 text-white shadow-medium
    hover:bg-success-600 hover:shadow-lg
    focus:ring-success-500
    active:transform active:scale-95
  `,
  danger: `
    bg-red-500 text-white shadow-medium
    hover:bg-red-600 hover:shadow-lg
    focus:ring-red-500
    active:transform active:scale-95
  `
};

// Size Variants
const sizes = {
  sm: 'px-3 py-2 text-sm rounded-lg',
  md: 'px-4 py-2.5 text-base rounded-lg',
  lg: 'px-6 py-3 text-lg rounded-xl',
  xl: 'px-8 py-4 text-xl rounded-xl',
  icon: 'p-2.5 rounded-lg'
};

export const Button = forwardRef(({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  as: Component = 'button',
  className = '',
  children,
  ...props
}, ref) => {
  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const content = (
    <>
      {loading && (
        <svg 
          className={`animate-spin -ml-1 mr-3 h-5 w-5 text-current`}
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      
      {children}
      
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  return (
    <Component
      ref={ref}
      className={buttonClasses}
      disabled={loading}
      {...props}
    >
      {content}
    </Component>
  );
});

// Animated Button with Framer Motion
export const MotionButton = forwardRef((props, ref) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button ref={ref} {...props} />
    </motion.div>
  );
});

// WhatsApp specific button with optimized styling
export const WhatsAppButton = forwardRef(({
  phoneNumber,
  message = '',
  apartmentName = '',
  children = 'Réserver via WhatsApp',
  className = '',
  ...props
}, ref) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <MotionButton
      ref={ref}
      as="a"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant="whatsapp"
      icon={
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
        </svg>
      }
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </MotionButton>
  );
});

// Icon Button for minimal actions
export const IconButton = forwardRef(({
  icon,
  'aria-label': ariaLabel,
  size = 'md',
  variant = 'ghost',
  className = '',
  ...props
}, ref) => (
  <Button
    ref={ref}
    variant={variant}
    size="icon"
    aria-label={ariaLabel}
    className={`${sizes[size]} ${className}`}
    {...props}
  >
    {icon}
  </Button>
));

// Floating Action Button
export const FloatingButton = forwardRef(({
  className = '',
  ...props
}, ref) => (
  <MotionButton
    ref={ref}
    className={`
      fixed bottom-6 right-6 z-50
      rounded-full shadow-hard
      ${className}
    `}
    size="lg"
    {...props}
  />
));

Button.displayName = 'Button';
MotionButton.displayName = 'MotionButton';
WhatsAppButton.displayName = 'WhatsAppButton';
IconButton.displayName = 'IconButton';
FloatingButton.displayName = 'FloatingButton';