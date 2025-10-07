import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import './Philosophy.css';

const Philosophy = () => {
  useEffect(() => {
    setDocumentMeta({
      title: 'Nuestra Filosofía | Estudio Elegante',
      description: 'Conoce el valor diferencial de nuestro estudio comparado con opciones económicas.'
    });
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main className="philosophy-page">
        <div className="container py-12">
          <header className="page-header">
            <h1 className="page-title">Nuestra Filosofía</h1>
            <p className="page-subtitle">
              Creemos en la belleza responsable: productos premium, bioseguridad y atención consciente.
            </p>
          </header>

          <section className="comparison" aria-label="Comparativo de valor">
            <article className="comparison-column comparison-basic">
              <h2>Servicios económicos</h2>
              <ul>
                <li>Protocolos básicos o inexistentes.</li>
                <li>Productos genéricos y sin control de caducidad.</li>
                <li>Atención rápida con rotación masiva.</li>
                <li>Herramientas compartidas entre clientes.</li>
              </ul>
            </article>

            <article className="comparison-column comparison-premium">
              <h2>Nuestro estudio</h2>
              <ul>
                <li>Bioseguridad validada y esterilización por cliente.</li>
                <li>Productos dermatológicamente probados y de lujo.</li>
                <li>Diagnóstico previo y plan personalizado.</li>
                <li>Acompañamiento experto con garantía de resultado.</li>
              </ul>
            </article>
          </section>

          <p className="philosophy-quote">No competimos en precio; competimos en calidad y seguridad.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Philosophy;
