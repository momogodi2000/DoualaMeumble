/**
 * Typography Component System
 * Reusable text components following atomic design principles
 */

import { forwardRef } from 'react';
import { TYPOGRAPHY } from '@/constants/design-tokens';

const baseClasses = 'antialiased font-smoothing-auto';

// Heading Components
export const Heading = forwardRef(({ 
  as: Component = 'h1', 
  size = 'h1', 
  weight = 'bold',
  color = 'text-charcoal-950',
  className = '',
  children,
  ...props 
}, ref) => (
  <Component
    ref={ref}
    className={`
      ${baseClasses}
      font-display
      ${TYPOGRAPHY.sizes[size]}
      ${TYPOGRAPHY.weights[weight]}
      ${color}
      ${className}
    `}
    {...props}
  >
    {children}
  </Component>
));

export const HeroTitle = forwardRef(({ className = '', children, ...props }, ref) => (
  <Heading
    ref={ref}
    as="h1"
    size="hero"
    weight="bold"
    className={`leading-tight ${className}`}
    {...props}
  >
    {children}
  </Heading>
));

// Body Text Components
export const Text = forwardRef(({ 
  as: Component = 'p',
  size = 'body',
  weight = 'normal',
  color = 'text-charcoal-700',
  className = '',
  children,
  ...props 
}, ref) => (
  <Component
    ref={ref}
    className={`
      ${baseClasses}
      font-body
      ${TYPOGRAPHY.sizes[size]}
      ${TYPOGRAPHY.weights[weight]}
      ${color}
      leading-relaxed
      ${className}
    `}
    {...props}
  >
    {children}
  </Component>
));

export const Lead = forwardRef(({ className = '', children, ...props }, ref) => (
  <Text
    ref={ref}
    size="h6"
    weight="medium"
    color="text-charcoal-600"
    className={`leading-relaxed ${className}`}
    {...props}
  >
    {children}
  </Text>
));

export const Caption = forwardRef(({ className = '', children, ...props }, ref) => (
  <Text
    ref={ref}
    as="span"
    size="small"
    color="text-charcoal-500"
    className={className}
    {...props}
  >
    {children}
  </Text>
));

// Accent Text Components
export const AccentText = forwardRef(({ 
  className = '', 
  color = 'text-gold-500',
  children, 
  ...props 
}, ref) => (
  <Text
    ref={ref}
    as="span"
    weight="semibold"
    color={color}
    className={`font-accent ${className}`}
    {...props}
  >
    {children}
  </Text>
));

export const Price = forwardRef(({ amount, currency = 'FCFA', className = '', ...props }, ref) => (
  <span
    ref={ref}
    className={`
      font-accent font-bold text-gold-600
      ${className}
    `}
    {...props}
  >
    {amount?.toLocaleString()} {currency}
  </span>
));

// Link Components
export const Link = forwardRef(({ 
  variant = 'primary',
  className = '',
  children,
  ...props 
}, ref) => {
  const variants = {
    primary: 'text-blue-500 hover:text-blue-600 font-medium transition-colors',
    secondary: 'text-charcoal-600 hover:text-charcoal-700 transition-colors',
    accent: 'text-gold-500 hover:text-gold-600 font-medium transition-colors',
    underline: 'text-blue-500 hover:text-blue-600 underline underline-offset-2'
  };

  return (
    <a
      ref={ref}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </a>
  );
});

// Gradient Text Effect
export const GradientText = forwardRef(({ 
  from = 'from-gold-400',
  to = 'to-gold-600',
  className = '',
  children,
  ...props 
}, ref) => (
  <span
    ref={ref}
    className={`
      bg-gradient-to-r ${from} ${to}
      bg-clip-text text-transparent
      ${className}
    `}
    {...props}
  >
    {children}
  </span>
));

Heading.displayName = 'Heading';
HeroTitle.displayName = 'HeroTitle';
Text.displayName = 'Text';
Lead.displayName = 'Lead';
Caption.displayName = 'Caption';
AccentText.displayName = 'AccentText';
Price.displayName = 'Price';
Link.displayName = 'Link';
GradientText.displayName = 'GradientText';