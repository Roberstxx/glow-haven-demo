import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { services } from '../data/services';
import { formatPriceRange, formatDuration } from '../utils/formatters';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { setDocumentMeta } from '../utils/seo';
import useScrollToTop from '../hooks/useScrollToTop';

const ServiceDetail = () => {
  useScrollToTop();

  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      setDocumentMeta({
        title: `${service.name} | Estudio de Belleza Elegante`,
        description: service.fullDescription,
      });
    }
  }, [service]);

  if (!service) {
    return (
      <div className="page-wrapper">
        <Header />
        <div className="container py-16">
          <div className="text-center">
            <h1 className="page-title">Servicio no encontrado</h1>
            <Link to="/servicios" className="btn btn-primary mt-6">
              Ver todos los servicios
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main className="container py-8">
        <Link to="/servicios" className="btn btn-outline mb-6">
          ← Volver a servicios
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {service.images?.[0] && (
              // ✅ Ruta corregida:
              // Antes: src={`/src/assets/images/${service.images[0]}`}
              // Ahora: usamos directamente service.images[0] (ya viene como "/images/...")
              <img
                src={service.images[0]}
                alt={service.name}
                className="card-image"
              />
            )}
          </div>

          <div>
            <h1 className="page-title mb-4">{service.name}</h1>
            <p
              className="mb-6"
              style={{ fontSize: 'var(--fs-lg)', lineHeight: 'var(--lh-relaxed)' }}
            >
              {service.fullDescription}
            </p>

            <div className="mb-6">
              <p>
                <strong>Duración:</strong> {formatDuration(service.duration)}
              </p>
              <p>
                <strong>Precio:</strong>{' '}
                {formatPriceRange(service.priceFrom, service.priceTo)}
              </p>
            </div>

            {service.extras?.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-3">Extras</h3>
                <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
                  {service.extras.map((extra, i) => (
                    <li key={i}>{extra}</li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href={buildWhatsAppUrl({ servicio: service.name })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Agendar este servicio
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
