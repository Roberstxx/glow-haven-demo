/**
 * SEO utilities for managing document metadata
 */

/**
 * Set document metadata (title, description, OG tags)
 */
export const setDocumentMeta = ({
  title = 'Estudio de Belleza Elegante',
  description = 'Belleza segura, personalizada y con experiencia premium.',
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  ogType = 'website',
  canonical = null
} = {}) => {
  // Set title
  document.title = title;
  
  // Set or update meta tags
  setMetaTag('name', 'description', description);
  setMetaTag('property', 'og:title', title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:image', ogImage);
  setMetaTag('property', 'og:type', ogType);
  
  // Set canonical URL if provided
  if (canonical) {
    setLinkTag('canonical', canonical);
  }
};

/**
 * Helper to set or update a meta tag
 */
const setMetaTag = (attribute, key, content) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

/**
 * Helper to set or update a link tag
 */
const setLinkTag = (rel, href) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
};

/**
 * Generate JSON-LD structured data for BeautySalon
 */
export const generateBeautySalonJsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Estudio de Belleza Elegante",
    "description": "Estudio de belleza profesional especializado en uñas, maquillaje, peinados y cuidado personal con los más altos estándares de higiene y calidad.",
    "image": "https://lovable.dev/opengraph-image-p98pqg.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Ejemplo 123, Col. Centro",
      "addressLocality": "Ciudad de México",
      "addressRegion": "CDMX",
      "postalCode": "01000",
      "addressCountry": "MX"
    },
    "telephone": "+52-1-55-1234-5678",
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "24"
    }
  };
  
  return jsonLd;
};

/**
 * Inject JSON-LD script into document head
 */
export const injectJsonLd = (jsonLdData) => {
  // Remove existing JSON-LD if present
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Create and inject new JSON-LD script
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(jsonLdData);
  document.head.appendChild(script);
};
