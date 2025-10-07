import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';

const About = () => {
  useEffect(() => {
    setDocumentMeta({ title: 'Conócenos | Estudio de Belleza Elegante' });
  }, []);
  
  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />
      <main className="container py-8">
        <div className="container-md">
          <h1 className="page-title mb-8">Conócenos</h1>
          <div className="card">
            <p className="mb-4">Somos un estudio profesional de belleza dedicado a realzar tu confianza con servicios de calidad premium.</p>
            <p>Nuestro compromiso es tu satisfacción y bienestar. No competimos en precio, competimos en calidad y seguridad.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
