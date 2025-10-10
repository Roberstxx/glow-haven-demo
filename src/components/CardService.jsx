import { Link } from 'react-router-dom';
import { formatPriceRange, formatDuration } from '../utils/formatters';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { amenitiesOptions } from '../data/services';
import Badge from './Badge';
import './CardService.css';

const CardService = ({ service, onOpenDetail }) => {
  const handleBooking = (e) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl({ servicio: service.name }), '_blank');
  };

  // Get image path
  const imagePath = service.images?.[0] ?? null; // ya viene como "/images/archivo.webp"

  
  return (
    <article className="card-service">
      {/* Image */}
      {imagePath && (
        <div className="card-service-image-wrapper">
          <img
            src={imagePath}
            alt={`Servicio de ${service.name}`}
            className="card-service-image"
            loading="lazy"
          />
          {service.badge && (
            <div className="card-service-badge-overlay">
              <Badge type={service.badge} />
            </div>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="card-service-content">
        <h3 className="card-service-title">{service.name}</h3>
        
        <p className="card-service-description">
          {service.shortDescription}
        </p>
        
        {/* Amenities Chips */}
        {service.amenities && service.amenities.length > 0 && (
          <div className="card-service-amenities">
            {service.amenities.map(amenity => {
              const amenityInfo = amenitiesOptions.find(option => option.id === amenity);
              if (!amenityInfo) return null;
              return (
                <span key={amenity} className="chip" title={amenityInfo.description}>
                  <strong>{amenityInfo.name}</strong>
                  <span className="chip-detail"> · {amenityInfo.description}</span>
                </span>
              );
            })}
          </div>
        )}
        
        {/* Meta Info */}
        <div className="card-service-meta">
          <div className="card-service-meta-item">
            <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{formatDuration(service.duration)}</span>
          </div>
          
          <div className="card-service-meta-item">
            <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span className="price-text">
              {formatPriceRange(service.priceFrom, service.priceTo)}
            </span>
          </div>
        </div>
        
        {/* CTAs */}
        <div className="card-service-actions">
          {onOpenDetail ? (
            <button
              type="button"
              onClick={() => onOpenDetail(service)}
              className="btn btn-outline btn-sm"
            >
              Ver detalle
            </button>
          ) : (
            <Link
              to={`/servicios/${service.slug}`}
              className="btn btn-outline btn-sm"
            >
              Ver detalle
            </Link>
          )}
          <button
            onClick={handleBooking}
            className="btn btn-primary btn-sm"
          >
            Agendar
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardService;
