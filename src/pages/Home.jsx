import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import CardService from '../components/CardService';
import CardReview from '../components/CardReview';

import { services } from '../data/services';
import { getRecentTestimonials } from '../data/testimonials';
import { portfolioItems } from '../data/portfolio'; // <- usamos los mismos datos que Gallery

import { buildWhatsAppUrl } from '../utils/whatsapp';
import { setDocumentMeta, generateBeautySalonJsonLd, injectJsonLd } from '../utils/seo';

import heroImage from '../assets/images/hero.webp';
import './Home.css';

const Home = () => {
  useEffect(() => {
    setDocumentMeta({
      title: 'Ahavah Beauty Studio | Amarte es Belleza',
      description:
        'En Ahavah te consentimos con servicios seguros, personalizados y llenos de amor. Agenda por WhatsApp y vive una experiencia profesional con bioseguridad.',
      ogImage: heroImage
    });
    injectJsonLd(generateBeautySalonJsonLd());
  }, []);

  // Efecto de revelado al hacer scroll
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('main > section'));
    els.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ❗️Secciones que NO se tocan
  const featuredServices = services.slice(0, 3);
  const recentReviews = getRecentTestimonials(3);

  /* ====== HOME: Preview de Galería por IDs (Opción B) ======
    Usa IDs reales del dataset y arma src igual que Gallery.jsx:
    /src/assets/images/${file}
 */
  const HOME_GALLERY_IDS = [
    'boda-transformation',
    'peinado-recogido-evento',
    'unas-french',
  ];

  const galleryPreview = useMemo(() => {
    // Buscar por ID
    const picked = HOME_GALLERY_IDS
      .map(id => portfolioItems.find(it => it.id === id))
      .filter(Boolean);

    // Completar hasta 3 con featured…
    if (picked.length < 3) {
      const extras = getFeaturedPortfolio().filter(
        it => !picked.some(p => p.id === it.id)
      );
      picked.push(...extras);
    }

    // …y si aún faltan, con los primeros que no estén ya
    if (picked.length < 3) {
      const extras2 = portfolioItems.filter(
        it => !picked.some(p => p.id === it.id)
      );
      picked.push(...extras2);
    }

    return picked.slice(0, 3).map((it, idx) => {
      const file = it.image || it.afterImage || it.beforeImage || '';
      return {
        id: it.id || `hg-${idx}`,
        title: it.title || 'Resultado Ahavah',
        src: file ? `/src/assets/images/${file}` : heroImage,
      };
    });
  }, []);


  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main>
        {/* HERO */}
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            {/* Badge */}
            <div
              className="beauty-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background:
                  'linear-gradient(90deg, rgba(247,71,128,0.85), rgba(255,228,236,0.7))',
                color: '#fff',
                fontWeight: 500,
                fontSize: 'var(--fs-sm)',
                padding: '6px 14px',
                borderRadius: '9999px',
                backdropFilter: 'blur(6px)',
                boxShadow: '0 2px 6px rgba(0,0,0,.15)',
                marginBottom: 'var(--space-6)'
              }}
            >
              <span role="img" aria-label="sparkles">✨</span>
              <span>Amor propio & bioseguridad</span>
            </div>

            <h1 className="hero-title">🌸 Amarte es Belleza 🌸</h1>
            <p className="hero-subtitle">
              En Ahavah te consentimos con servicios seguros, personalizados y llenos de amor.
              Porque amarte siempre será el mejor plan.
            </p>

            <div className="hero-ctas">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Agenda tu cita
              </a>
              <Link to="/servicios" className="btn btn-secondary btn-lg">
                Ver servicios
              </Link>
            </div>
          </div>
        </section>

        {/* 1) SERVICIOS (se deja igual) */}
        <section id="servicios" className="py-16" style={{ backgroundColor: 'var(--clr-bg)' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Servicios Destacados</h2>
              <p className="section-subtitle">Descubre nuestros tratamientos más populares</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service) => (
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

        {/* 2) EXPERIENCIA & AMENIDADES (preview) */}
        <section id="experiencia-amenidades" className="py-16">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Experiencia Ahavah</h2>
              <p className="section-subtitle">
                Comodidad, detalle y un ambiente pensado para ti: snacks & bebidas, TV con streaming,
                Wi-Fi, higiene visible y privacidad.
              </p>
            </div>

            <div className="grid md:grid-cols-2">
              <article className="card">
                <h3 className="mb-4">Tu visita, paso a paso</h3>
                <ul className="flex flex-col gap-3">
                  <li>• Recepción y evaluación breve de estilo.</li>
                  <li>• Productos profesionales y materiales esterilizados.</li>
                  <li>• Zona cómoda con bebida/snack según paquete.</li>
                  <li>• Recomendaciones de cuidado post-servicio.</li>
                </ul>
              </article>

              <article className="card">
                <h3 className="mb-4">Amenidades</h3>
                <ul className="flex flex-col gap-3">
                  <li>• Wi-Fi ilimitado y cargadores disponibles.</li>
                  <li>• A/A, música ambiental y TV con streaming.</li>
                  <li>• Estacionamiento y privacidad.</li>
                  <li>• Premium eventos/novias: champán o vino de cortesía.</li>
                </ul>
                <div className="mt-6">
                  <Link to="/experiencia" className="btn btn-primary btn-sm">Ver experiencia completa</Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 3) POLÍTICAS & SEGURIDAD (preview) */}
        <section id="politicas-seguridad" className="py-16" style={{ backgroundColor: 'var(--clr-bg)' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Políticas & Seguridad</h2>
              <p className="section-subtitle">La belleza empieza por la salud.</p>
            </div>

            <div className="grid md:grid-cols-2">
              <article className="card">
                <h3 className="mb-4">Protocolos</h3>
                <ul className="flex flex-col gap-3">
                  <li>• Uniforme antifluidos, guantes y mascarilla.</li>
                  <li>• Materiales desechables y toallas limpias por cliente.</li>
                  <li>• Limpieza quirúrgica, esterilización de instrumental.</li>
                  <li>• Ventilación y superficies desinfectadas.</li>
                </ul>
                <div className="mt-6">
                  <Link to="/seguridad" className="btn btn-outline btn-sm">Ver protocolos</Link>
                </div>
              </article>

              <article className="card">
                <h3 className="mb-4">Políticas de servicio</h3>
                <ul className="flex flex-col gap-3">
                  <li>• Agendamiento con anticipo (30%).</li>
                  <li>• Tolerancia de 15 min; después se reprograma.</li>
                  <li>• Sin acompañantes ni mascotas dentro del estudio.</li>
                  <li>• Llega sin cremas/aceites; avisa si requieres remoción.</li>
                </ul>
                <div className="mt-6">
                  <Link to="/politicas" className="btn btn-primary btn-sm">Ver todas las políticas</Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 4) FILOSOFÍA & CONÓCENOS (preview) */}
        <section id="filosofia-conocenos" className="py-16">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Nuestra Esencia</h2>
              <p className="section-subtitle">Amor propio, detalle y profesionalismo.</p>
            </div>

            <div className="grid md:grid-cols-2">
              <article className="card">
                <h3 className="mb-4">Filosofía</h3>
                <p>
                  Creemos que la belleza se siente tanto como se ve. No competimos en precio;
                  competimos en calidad y seguridad con productos premium y atención personalizada.
                </p>
                <div className="mt-6">
                  <Link to="/filosofia" className="btn btn-primary btn-sm">Nuestra filosofía</Link>
                </div>
              </article>

              <article className="card">
                <h3 className="mb-4">Conócenos</h3>
                <p>
                  Somos un equipo profesional que ama su oficio. Te recibimos en un espacio seguro,
                  limpio y cómodo para que disfrutes una experiencia a tu medida.
                </p>
                <div className="mt-6">
                  <Link to="/conocenos" className="btn btn-primary btn-sm">Conoce al estudio</Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 5) GALERÍA (preview) */}
        <section id="galeria" className="py-16" style={{ backgroundColor: 'var(--clr-bg)' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Galería</h2>
              <p className="section-subtitle">Un vistazo a nuestros resultados</p>
            </div>

            <div className="grid md:grid-cols-3">
              {galleryPreview.map((item) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="card-image"
                  style={{ height: 220, objectFit: 'cover' }}
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = heroImage; }}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/galeria" className="btn btn-primary">Ver galería completa</Link>
            </div>
          </div>
        </section>

        {/* 6) OPINIONES (se deja igual) */}
        <section id="opiniones" className="py-16" style={{ backgroundColor: 'var(--clr-bg)' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Lo que dicen nuestras clientas</h2>
              <p className="section-subtitle">Experiencias reales de personas como tú</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {recentReviews.map((review) => (
                <CardReview key={review.id} testimonial={review} />
              ))}
            </div>
          </div>
        </section>

        {/* 7) FAQ (preview) */}
        <section id="faq" className="py-16">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Preguntas frecuentes</h2>
              <p className="section-subtitle">Resolvemos tus dudas más comunes</p>
            </div>

            <div className="grid md:grid-cols-3">
              <article className="card">
                <h3 className="mb-2">¿Cómo reservo?</h3>
                <p>Por WhatsApp o desde Contacto. Confirmamos fecha y hora con anticipo.</p>
              </article>
              <article className="card">
                <h3 className="mb-2">¿Qué medidas de higiene aplican?</h3>
                <p>Esterilización por cliente y superficies desinfectadas en cada servicio.</p>
              </article>
              <article className="card">
                <h3 className="mb-2">¿Formas de pago?</h3>
                <p>Efectivo y transferencia. Consulta políticas para más detalles.</p>
              </article>
            </div>

            <div className="text-center mt-8">
              <Link to="/faq" className="btn btn-primary">Ver todas las preguntas</Link>
            </div>
          </div>
        </section>

        {/* 8) CONTACTO / RESERVA (preview) */}
        <section id="contacto" className="py-16" style={{ backgroundColor: 'var(--clr-bg)' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Contacto / Reserva</h2>
              <p className="section-subtitle">
                Agenda por WhatsApp o escríbenos. Aquí encuentras nuestras redes y cómo llegar.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center gap-3">
                <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Agendar por WhatsApp
                </a>
                <Link to="/contacto" className="btn btn-outline">Ir a Contacto</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
