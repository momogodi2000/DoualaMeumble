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

  const updateStructuredData = useCallback(() => {
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
            "areaServed": "Douala, Cameroun"
          }
        },
        {
          "@type": type === 'apartment' ? "LodgingBusiness" : "WebSite",
          "@id": `${currentUrl}/#webpage`,
          "url": currentUrl,
          "name": seoTitle,
          "description": seoDescription,
          "inLanguage": language === 'fr' ? 'fr-FR' : 'en-US',
          "isPartOf": {
            "@type": "WebSite",
            "@id": `${baseUrl}/#website`,
            "url": baseUrl,
            "name": "Douala Luxury Stays"
          }
        }
      ]
    };

    // Add apartment-specific structured data
    if (type === 'apartment' && apartment) {
      structuredData["@graph"].push({
        "@type": "LodgingBusiness",
        "@id": `${currentUrl}/#apartment`,
        "name": `${apartment.title} - Douala Luxury Stays`,
        "description": apartment.description,
        "image": apartment.images?.map(img => `${baseUrl}${img}`) || [],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": apartment.location?.area || "Douala",
          "addressCountry": "CM"
        },
        "priceRange": apartment.pricing ? `${apartment.pricing.monthly}€-${apartment.pricing.weekly}€` : "€€",
        "amenityFeature": apartment.amenities?.map(amenity => ({
          "@type": "LocationFeatureSpecification",
          "name": amenity
        })) || []
      });
    }

    // Create and append script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [baseUrl, currentUrl, seoTitle, seoDescription, language, type, apartment]);

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

  return null; // This component doesn't render anything
};

export default SEO;
