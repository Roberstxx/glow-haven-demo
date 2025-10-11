import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import useScrollToTop from '../hooks/useScrollToTop';
import './Safety.css';

const safetyBlocks = [
  {
    icon: '👩🏻‍⚕️',
    title: 'Profesional',
    items: ['Uniforme antifluidos', 'Guantes y mascarilla', 'Certificaciones vigentes']
  },
  {
    icon: '🤍',
    title: 'Cliente',
    items: ['Diagnóstico previo a cada cita', 'Materiales desechables', 'Toallas sanitizadas']
  },
  {
    icon: '🛠️',
    title: 'Instrumental',
    items: ['Limpieza de grado quirúrgico', 'Esterilización por cliente', 'Herramientas en blíster sellado']
  },
  {
    icon: '🌬️',
    title: 'Ambiente',
    items: ['Ventilación constante', 'Superficies desinfectadas', 'Gestión responsable de residuos']
  }
];

const Safety = () => {
  useScrollToTop();

  useEffect(() => {
    setDocumentMeta({
      title: 'Seguridad & Confianza | Estudio Elegante',
      description: 'Protocolos de bioseguridad con higiene visible, materiales desechables y espacios ventilados.'
    });
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main className="safety-page">
        <div className="container py-12">
          <header className="page-header">
            <h1 className="page-title">Seguridad & Confianza</h1>
            <p className="page-subtitle">
              Operamos con protocolos profesionales para que disfrutes tu cita con tranquilidad absoluta.
            </p>
          </header>

          <section className="safety-grid" aria-label="Protocolos de seguridad">
            {safetyBlocks.map(block => (
              <article key={block.title} className="safety-card">
                <div className="safety-icon" aria-hidden="true">{block.icon}</div>
                <h2>{block.title}</h2>
                <ul>
                  {block.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <p className="safety-quote">La belleza empieza por la salud.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Safety;
