import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';

const FAQ = () => {
  useEffect(() => { setDocumentMeta({ title: 'Preguntas Frecuentes | Estudio Elegante' }); }, []);
  
  const faqs = [
    { q: '¿Cómo reprogramo o cancelo?', a: 'Contáctanos por WhatsApp con 24h de anticipación.' },
    { q: '¿Aceptan anticipo?', a: 'Sí, requerimos anticipo para confirmar todas las citas.' },
    { q: '¿Hay garantía o retoque?', a: 'Sí, dentro de 7 días según condiciones del servicio.' }
  ];
  
  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />
      <main className="container py-8">
        <h1 className="page-title mb-8">Preguntas Frecuentes</h1>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="card">
              <h3 className="mb-2">{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
