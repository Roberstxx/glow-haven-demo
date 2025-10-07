/**
 * Format price in Mexican pesos
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

/**
 * Format price range
 */
export const formatPriceRange = (priceFrom, priceTo) => {
  if (!priceTo || priceFrom === priceTo) {
    return formatPrice(priceFrom);
  }
  return `${formatPrice(priceFrom)} - ${formatPrice(priceTo)}`;
};

/**
 * Format duration in minutes to readable string
 */
export const formatDuration = (minutes) => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) {
    return `${hours} ${hours === 1 ? 'hora' : 'horas'}`;
  }
  return `${hours}h ${mins}min`;
};

/**
 * Format date to readable string
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text, maxLength = 140) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};
