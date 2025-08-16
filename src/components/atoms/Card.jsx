/**
 * Card Component System
 * Flexible card components for different content types
 */

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { SHADOWS } from '@/constants/design-tokens';

const baseClasses = `
  bg-white rounded-xl overflow-hidden
  transition-all duration-300
`;

// Card Variants
const variants = {
  default: `${SHADOWS.soft} hover:${SHADOWS.medium}`,
  elevated: `${SHADOWS.medium} hover:${SHADOWS.hard}`,
  luxury: `${SHADOWS.luxury} hover:${SHADOWS.gold}`,
  flat: 'border border-gray-200 hover:border-gray-300',
  ghost: 'bg-transparent'
};

export const Card = forwardRef(({
  variant = 'default',
  padding = 'p-6',
  hoverable = true,
  className = '',
  children,
  ...props
}, ref) => {
  const cardClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${padding}
    ${hoverable ? 'cursor-pointer transform hover:scale-105' : ''}
    ${className}
  `;

  return (
    <div ref={ref} className={cardClasses} {...props}>
      {children}
    </div>
  );
});

// Animated Card with Framer Motion
export const MotionCard = forwardRef(({
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6, ease: "easeOut" },
  whileHover = { y: -5 },
  ...props
}, ref) => (
  <motion.div
    ref={ref}
    initial={initial}
    animate={animate}
    transition={transition}
    whileHover={whileHover}
  >
    <Card {...props} hoverable={false} />
  </motion.div>
));

// Property Card specifically for apartments
export const PropertyCard = forwardRef(({
  image,
  title,
  location,
  price,
  type,
  specs,
  rating,
  badges = [],
  onClick,
  className = '',
  ...props
}, ref) => (
  <MotionCard
    ref={ref}
    variant="luxury"
    padding="p-0"
    className={className}
    onClick={onClick}
    {...props}
  >
    {/* Image Section */}
    <div className="relative h-48 sm:h-56 bg-gray-200">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
      
      {/* Price Badge */}
      {price && (
        <div className="absolute top-4 left-4">
          <div className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {price.toLocaleString()} FCFA
          </div>
        </div>
      )}

      {/* Type Badge */}
      {type && (
        <div className="absolute top-4 right-4">
          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {type}
          </div>
        </div>
      )}

      {/* Status Badges */}
      {badges.length > 0 && (
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={`
                px-2 py-1 rounded-md text-xs font-medium
                ${badge.type === 'available' ? 'bg-success-100 text-success-800' : ''}
                ${badge.type === 'new' ? 'bg-blue-100 text-blue-800' : ''}
                ${badge.type === 'premium' ? 'bg-gold-100 text-gold-800' : ''}
              `}
            >
              {badge.label}
            </span>
          ))}
        </div>
      )}
    </div>

    {/* Content Section */}
    <div className="p-6">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-charcoal-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-charcoal-600 text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {location}
        </p>
      </div>

      {/* Specs */}
      {specs && (
        <div className="flex items-center text-charcoal-600 text-sm mb-4 space-x-4">
          {specs.bedrooms && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
              {specs.bedrooms} ch.
            </div>
          )}
          {specs.bathrooms && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
              {specs.bathrooms} sdb.
            </div>
          )}
          {specs.surface && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
              </svg>
              {specs.surface}m²
            </div>
          )}
        </div>
      )}

      {/* Rating */}
      {rating && (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating.average) 
                      ? 'text-yellow-400' 
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-charcoal-600">
              {rating.average} ({rating.count} avis)
            </span>
          </div>
        </div>
      )}
    </div>
  </MotionCard>
));

// Testimonial Card
export const TestimonialCard = forwardRef(({
  content,
  author,
  rating,
  className = '',
  ...props
}, ref) => (
  <MotionCard
    ref={ref}
    variant="elevated"
    className={className}
    {...props}
  >
    {/* Rating Stars */}
    {rating && (
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
    )}

    {/* Content */}
    <blockquote className="text-charcoal-700 mb-6 italic">
      "{content}"
    </blockquote>

    {/* Author */}
    <div className="flex items-center">
      {author.avatar && (
        <img
          src={author.avatar}
          alt={author.name}
          className="w-12 h-12 rounded-full mr-4"
        />
      )}
      <div>
        <p className="font-semibold text-charcoal-900">{author.name}</p>
        {author.title && (
          <p className="text-sm text-charcoal-600">{author.title}</p>
        )}
      </div>
    </div>
  </MotionCard>
));

Card.displayName = 'Card';
MotionCard.displayName = 'MotionCard';
PropertyCard.displayName = 'PropertyCard';
TestimonialCard.displayName = 'TestimonialCard';