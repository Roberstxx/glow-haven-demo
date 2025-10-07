import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import CardService from '../components/CardService';
import CardReview from '../components/CardReview';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { services } from '../data/services';
import { getRecentTestimonials } from '../data/testimonials';
import { getFeaturedPortfolio } from '../data/portfolio';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { setDocumentMeta, generateBeautySalonJsonLd, injectJsonLd } from '../utils/seo';
import heroImage from '../assets/images/hero.webp';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Set SEO metadata
    setDocumentMeta({
      title: 'Estudio de Belleza Elegante | Servicios Premium en CDMX',
      description: 'Belleza segura, personalizada y con experiencia premium. Especialistas en uñas, maquillaje, peinados y cuidado personal con los más altos estándares de calidad.',
      ogImage: heroImage
    });
    
    // Inject JSON-LD structured data
    injectJsonLd(generateBeautySalonJsonLd());
  }, []);
  
  const featuredServices = services.slice(0, 3);
  const recentReviews = getRecentTestimonials(3);
  const featuredPortfolio = getFeaturedPortfolio();
  
  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />
      
      <main>
        {/* Hero Section */}
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <h1 className="hero-title">Estudio de Belleza Elegante</h1>
            <p className="hero-subtitle">
              Belleza segura, personalizada y con experiencia premium
            </p>
            <div className="hero-ctas">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Agendar por WhatsApp
              </a>
              <Link to="/servicios" className="btn btn-secondary btn-lg">
                Ver servicios
              </Link>
            </div>
          </div>
        </section>
        
        {/* Quick Access */}
        <section className="py-12">
          <div className="container">
            <div className="quick-access-grid">
              <Link to="/servicios" className="quick-access-card">
                <div className="quick-access-icon">💅</div>
                <h3>Servicios</h3>
                <p>Catálogo completo</p>
              </Link>
              <Link to="/experiencia" className="quick-access-card">
                <div className="quick-access-icon">✨</div>
                <h3>Experiencia</h3>
                <p>Amenidades premium</p>
              </Link>
              <Link to="/seguridad" className="quick-access-card">
                <div className="quick-access-icon">🛡️</div>
                <h3>Seguridad</h3>
                <p>Protocolos de higiene</p>
              </Link>
              <Link to="/galeria" className="quick-access-card">
                <div className="quick-access-icon">📸</div>
                <h3>Galería</h3>
                <p>Nuestro trabajo</p>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Services */}
        <section className="py-16" style={{ backgroundColor: 'var(--clr-bg)' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Servicios Destacados</h2>
              <p className="section-subtitle">
                Descubre nuestros tratamientos más populares
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map(service => (
                <CardService key={service.id} service={service} />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/servicios" className="btn btn-primary">
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>
        
        {/* Before/After Showcase */}
        {featuredPortfolio.length > 0 && featuredPortfolio[0].beforeImage && (
          <section className="py-16">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Transformaciones</h2>
                <p className="section-subtitle">
                  Ve el antes y después de nuestro trabajo
                </p>
              </div>
              
              <BeforeAfterSlider
                beforeImage={featuredPortfolio[0].beforeImage}
                afterImage={featuredPortfolio[0].afterImage}
                alt={featuredPortfolio[0].title}
              />
              
              <div className="text-center mt-8">
                <Link to="/galeria" className="btn btn-outline">
                  Ver más transformaciones
                </Link>
              </div>
            </div>
          </section>
        )}
        
        {/* Testimonials */}
        <section className="py-16" style={{ backgroundColor: 'var(--clr-bg)' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Lo que dicen nuestros clientes</h2>
              <p className="section-subtitle">
                Experiencias reales de personas como tú
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {recentReviews.map(review => (
                <CardReview key={review.id} testimonial={review} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Mini About */}
        <section className="py-16">
          <div className="container">
            <div className="about-mini">
              <div className="about-mini-content">
                <h2 className="section-title">Conoce nuestro estudio</h2>
                <p className="about-mini-text">
                  En Belleza Elegante combinamos técnica profesional, productos premium y 
                  atención personalizada para brindarte una experiencia única. Cada servicio 
                  es diseñado especialmente para ti, en un ambiente cómodo y seguro.
                </p>
                <p className="about-mini-text">
                  Nuestro compromiso es tu satisfacción y bienestar. No competimos en precio, 
                  competimos en calidad y seguridad.
                </p>
                <Link to="/conocenos" className="btn btn-primary mt-6">
                  Conoce más sobre nosotros
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Strip */}
        <section className="cta-strip">
          <div className="container">
            <div className="cta-strip-content">
              <h2>¿Lista para lucir increíble?</h2>
              <p>Agenda tu cita ahora y vive la experiencia Belleza Elegante</p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Reservar ahora
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
