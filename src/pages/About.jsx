import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import stylistImage from '../assets/images/hero.webp';
import './About.css';

const About = () => {
  useEffect(() => {
    setDocumentMeta({
      title: 'Conócenos | Estudio de Belleza Elegante',
      description: 'Descubre quién está detrás del estudio, nuestra formación y valores.'
    });
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main className="about-page">
        <div className="container py-12">
          <header className="page-header">
            <h1 className="page-title">Conócenos</h1>
            <p className="page-subtitle">
              Soy Mariana López, estilista profesional con 10 años de experiencia en maquillaje, uñas y cuidado del cabello.
            </p>
          </header>

          <section className="about-hero" aria-label="Equipo del estudio">
            <div className="about-portrait">
              <img src={stylistImage} alt="Mariana López, estilista profesional" loading="lazy" />
            </div>
            <div className="about-story">
              <p>
                Mi formación inició en academias reconocidas de la CDMX y continuó con certificaciones internacionales en bioseguridad,
                maquillaje HD y estilismo nupcial. Trabajo únicamente con productos hipoalergénicos, cruelty-free y de alta gama para
                garantizar resultados impecables y seguros.
              </p>
              <p>
                Creo en el poder de escuchar a cada persona. Por eso, cada cita inicia con un diagnóstico personalizado donde definimos
                estilo, necesidades y cuidados posteriores. Mi promesa: resultados hermosos en un entorno seguro y cómodo.
              </p>
            </div>
          </section>

          <section className="about-details">
            <article>
              <h2>Certificaciones</h2>
              <ul>
                <li>Certificación en Bioseguridad para Centros de Belleza (2023).</li>
                <li>Makeup Designory® – Maquillaje HD y aerógrafo.</li>
                <li>Academia Vidal Sassoon – Técnicas de corte y styling avanzado.</li>
              </ul>
            </article>
            <article>
              <h2>Valores del estudio</h2>
              <ul>
                <li>Seguridad ante todo: protocolos visibles y esterilización rigurosa.</li>
                <li>Atención humana: escuchamos y acompañamos cada paso.</li>
                <li>Excelencia estética: productos premium y actualización constante.</li>
              </ul>
            </article>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
