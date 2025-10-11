import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { amenitiesOptions } from '../data/services';
import { formatDuration, formatPriceRange } from '../utils/formatters';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import './ServiceDetailModal.css';

const ServiceDetailModal = ({ service, onClose }) => {
  useEffect(() => {
    if (service) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [service]);

  if (!service) return null;

  // ✅ Ruta corregida:
  // Antes: `/src/assets/images/${service.images[0]}`
  // Ahora usamos directamente `service.images[0]` porque ya viene como `/images/...` desde services.js
  const imagePath =
    service.images && service.images.length > 0 ? service.images[0] : null;

  const amenityDetails =
    service.amenities
      ?.map((amenityId) =>
        amenitiesOptions.find((option) => option.id === amenityId)
      )
      .filter(Boolean) ?? [];

  const whatsappUrl = buildWhatsAppUrl({ servicio: service.name });

  return createPortal(
    <div
      className="service-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className="service-modal-backdrop" onClick={onClose} />
      <div className="service-modal-content" role="document">
        <button
          type="button"
          className="service-modal-close"
          onClick={onClose}
          aria-label="Cerrar detalle de servicio"
        >
          ✕
        </button>

        <div className="service-modal-body">
          {imagePath && (
            <div className="service-modal-image">
              <img src={imagePath} alt={service.name} loading="lazy" />
            </div>
          )}

          <div className="service-modal-info">
            <header className="service-modal-header">
              <h2 id="service-modal-title">{service.name}</h2>
              <p className="service-modal-subtitle">
                {service.shortDescription}
              </p>
            </header>

            <div className="service-modal-meta">
              <span>{formatDuration(service.duration)}</span>
              <span>{formatPriceRange(service.priceFrom, service.priceTo)}</span>
            </div>

            {amenityDetails.length > 0 && (
              <section
                className="service-modal-section"
                aria-label="Amenidades incluidas"
              >
                <h3>Amenidades</h3>
                <ul className="service-modal-amenities">
                  {amenityDetails.map((detail) => (
                    <li key={detail.id}>
                      <span className="amenity-label">{detail.name}</span>
                      <span className="amenity-note">
                        {detail.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {service.extras && service.extras.length > 0 && (
              <section
                className="service-modal-section"
                aria-label="Extras disponibles"
              >
                <h3>Extras opcionales</h3>
                <ul>
                  {service.extras.map((extra) => (
                    <li key={extra}>{extra}</li>
                  ))}
                </ul>
              </section>
            )}

            {service.requirements && service.requirements.length > 0 && (
              <section
                className="service-modal-section"
                aria-label="Recomendaciones previas"
              >
                <h3>Antes de tu cita</h3>
                <ul>
                  {service.requirements.map((req) => (
                    <li key={req}>{req}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        <footer className="service-modal-footer">
          <a
            className="btn btn-primary"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar por WhatsApp
          </a>
          <Link
            className="btn btn-outline"
            to={`/servicios/${service.slug}`}
            onClick={onClose}
          >
            Ver ficha completa
          </Link>
        </footer>
      </div>
    </div>,
    document.body
  );
};

export default ServiceDetailModal;
