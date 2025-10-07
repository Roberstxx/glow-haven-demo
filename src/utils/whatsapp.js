/**
 * WhatsApp integration utilities
 * Generates pre-filled WhatsApp URLs for booking
 */

// Store phone number (without + or spaces, with country code)
const WHATSAPP_NUMBER = '5215512345678'; // Replace with actual number

/**
 * Build WhatsApp URL with pre-filled message
 * @param {Object} params - Message parameters
 * @param {string} params.servicio - Service name
 * @param {string} params.fecha - Preferred date (optional)
 * @param {string} params.hora - Preferred time (optional)
 * @param {string} params.nombre - Client name (optional)
 * @returns {string} WhatsApp URL
 */
export const buildWhatsAppUrl = ({
  servicio = '',
  fecha = '',
  hora = '',
  nombre = '',
  texto = ''
} = {}) => {
  let message = texto || 'Hola, me interesa agendar una cita';

  if (!texto && servicio) {
    message += ` para el servicio de ${servicio}`;
  }

  if (!texto && fecha) {
    message += ` para el día ${fecha}`;
  }

  if (!texto && hora) {
    message += ` a las ${hora}`;
  }

  if (!texto && nombre) {
    message += `. Mi nombre es ${nombre}`;
  }

  if (!message.endsWith('.')) {
    message += '.';
  }
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * Build simple WhatsApp URL with custom message
 */
export const buildWhatsAppUrlSimple = (message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * Open WhatsApp in new window
 */
export const openWhatsApp = (params) => {
  const url = buildWhatsAppUrl(params);
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Get formatted phone number for display
 */
export const getFormattedPhone = () => {
  // Format: +52 1 55 1234 5678
  return '+52 1 55 1234 5678';
};
