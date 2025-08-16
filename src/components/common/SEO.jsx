/**
 * Enhanced SEO Component
 * Provides comprehensive SEO optimization with structured data
 */

import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

const SEO = ({ 
  title,
  description,
  keywords = [],
  image = '/images/og-douala-luxury-stays.jpg',
  type = 'website',
  apartment = null
}) => {
  const { t, language } = useLanguage();
  const location = useLocation();
  
  const baseUrl = 'https://doualaluxurystays.com';
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  // Default SEO values
  const defaultTitle = t('home.title');
  const defaultDescription = t('home.description');
  const defaultKeywords = [
    'appartements meublés douala',
    'location douala',
    'bonamoussadi',
    'appartements premium',
    'logement douala',
    'furnished apartments douala',
    'luxury stays',
    'whatsapp booking',
    'cameroun accommodation'
  ];

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = [...defaultKeywords, ...keywords];

  useEffect(() => {
    // Update document title
    document.title = seoTitle;
    
    // Update meta tags
    updateMetaTag('description', seoDescription);
    updateMetaTag('keywords', seoKeywords.join(', '));
    updateMetaTag('author', 'Douala Luxury Stays');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', language);
    
    // Open Graph tags
    updateMetaProperty('og:title', seoTitle);
    updateMetaProperty('og:description', seoDescription);
    updateMetaProperty('og:image', `${baseUrl}${image}`);
    updateMetaProperty('og:url', currentUrl);
    updateMetaProperty('og:type', type);
    updateMetaProperty('og:site_name', 'Douala Luxury Stays');
    updateMetaProperty('og:locale', language === 'fr' ? 'fr_FR' : 'en_US');
    
    // Twitter Card tags
    updateMetaName('twitter:card', 'summary_large_image');
    updateMetaName('twitter:title', seoTitle);
    updateMetaName('twitter:description', seoDescription);
    updateMetaName('twitter:image', `${baseUrl}${image}`);
    
    // Schema.org structured data
    updateStructuredData();
    
  }, [seoTitle, seoDescription, seoKeywords, currentUrl, language, image, type, apartment, baseUrl, updateStructuredData]);

  const updateMetaTag = (name, content) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateMetaProperty = (property, content) => {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateMetaName = (name, content) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateStructuredData = () => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          "name": "Douala Luxury Stays",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/icons/app-logo.svg`
          },
          "sameAs": [
            "https://wa.me/237656467051"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+237656467051",
            "contactType": "customer service",
            "availableLanguage": ["French", "English"],
            "areaServed": "CM"
          }
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "url": baseUrl,
          "name": "Douala Luxury Stays - Bonamoussadi",
          "description": seoDescription,
          "publisher": {
            "@id": `${baseUrl}/#organization`
          },
          "inLanguage": language === 'fr' ? 'fr-FR' : 'en-US'
        },
        {
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#localbusiness`,
          "name": "Douala Luxury Stays",
          "description": seoDescription,
          "url": baseUrl,
          "telephone": "+237656467051",
          "priceRange": "$$$$",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "CM",
            "addressLocality": "Douala",
            "addressRegion": "Littoral",
            "streetAddress": "Bonamoussadi"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "4.0891",
            "longitude": "9.7123"
          },
          "openingHours": "Mo-Su 24:00",
          "image": `${baseUrl}${image}`,
          "serviceArea": {
            "@type": "City",
            "name": "Douala"
          }
        }
      ]
    };

    // Add apartment-specific structured data if available
    if (apartment) {
      structuredData["@graph"].push({
        "@type": "Accommodation",
        "name": apartment.title,
        "description": apartment.description,
        "image": apartment.images?.map(img => `${baseUrl}${img.url}`) || [],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CM",
          "addressLocality": "Douala",
          "addressRegion": "Littoral",
          "streetAddress": apartment.location?.address || "Bonamoussadi"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": apartment.location?.coordinates?.lat || "4.0891",
          "longitude": apartment.location?.coordinates?.lng || "9.7123"
        },
        "offers": {
          "@type": "Offer",
          "price": apartment.pricing?.daily || "35000",
          "priceCurrency": "XAF",
          "availability": "InStock"
        },
        "amenityFeature": apartment.amenities?.map(amenity => ({
          "@type": "LocationFeatureSpecification",
          "name": amenity.name,
          "value": true
        })) || [],
        "numberOfRooms": apartment.bedrooms || 1,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": apartment.surface || 45,
          "unitCode": "MTK"
        }
      });
    }

    // Create and append structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  };

  return null; // This component doesn't render anything
};

export default SEO;
