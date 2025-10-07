import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import './Experience.css';

const amenities = [
  { icon: '📶', title: 'Wifi ilimitado', description: 'Conexión estable para trabajar o compartir tu experiencia.' },
  { icon: '❄️', title: 'Aire acondicionado', description: 'Clima agradable todo el año para tu comodidad.' },
  { icon: '📺', title: 'TV con streaming', description: 'Netflix, Spotify y playlists personalizadas.' },
  { icon: '🍰', title: 'Snacks y bebidas', description: 'Delicias artesanales y bebidas preparadas al momento.' },
  { icon: '🅿️', title: 'Estacionamiento', description: 'Espacio reservado para clientas con cita confirmada.' },
  { icon: '🎶', title: 'Música ambiental', description: 'Curaduría sonora pensada para relajarte.' },
  { icon: '🧼', title: 'Higiene visible', description: 'Protocolos abiertos y herramientas selladas por cliente.' },
  { icon: '🪟', title: 'Privacidad', description: 'Cabinas semi privadas y atención personalizada.' },
  { icon: '🔌', title: 'Cargadores', description: 'Conexiones USB-C, Lightning y adaptadores disponibles.' },
  { icon: '💳', title: 'Pago en línea', description: 'Links de pago y terminal contactless.' }
];

const Experience = () => {
  useEffect(() => {
    setDocumentMeta({ title: 'Experiencia & Amenidades | Estudio Elegante' });
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main className="experience-page">
        <div className="container py-12">
          <header className="page-header">
            <h1 className="page-title">Experiencia & Amenidades</h1>
            <p className="page-subtitle">
              Cada visita está pensada para consentirte con detalles premium y un ambiente seguro.
            </p>
          </header>

          <section className="amenities-grid" aria-label="Amenidades disponibles">
            {amenities.map(item => (
              <article key={item.title} className="amenity-tile">
                <div className="amenity-icon" aria-hidden="true">{item.icon}</div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </section>

          <section className="premium-highlight" aria-label="Experiencia premium para novias y eventos">
            <div className="premium-highlight-content">
              <span className="premium-badge">Premium</span>
              <h2>Para novias y eventos</h2>
              <p>
                Incluimos champán o vino de cortesía, kit exclusivo de retoque y asistencia personalizada
                durante tu preparación. Queremos que vivas un momento inolvidable.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
