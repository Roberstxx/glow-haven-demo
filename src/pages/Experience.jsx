import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';

const Experience = () => {
  useEffect(() => {
    setDocumentMeta({ title: 'Experiencia Premium | Estudio Elegante' });
  }, []);
  
  const amenities = ['Wifi', 'A/C', 'TV Streaming', 'Snacks/Bebidas', 'Estacionamiento', 'Música', 'Higiene visible', 'Privacidad', 'Cargadores', 'Pago en línea'];
  
  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />
      <main className="container py-8">
        <h1 className="page-title mb-8">Experiencia Premium</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map(a => (
            <div key={a} className="card text-center"><p>{a}</p></div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
