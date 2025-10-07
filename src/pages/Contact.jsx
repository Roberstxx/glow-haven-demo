import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { buildWhatsAppUrl, getFormattedPhone } from '../utils/whatsapp';
import { setDocumentMeta } from '../utils/seo';

const Contact = () => {
  useEffect(() => {
    setDocumentMeta({
      title: 'Contacto | Estudio de Belleza Elegante',
      description: 'Agenda tu cita por WhatsApp, teléfono o visítanos. Lun-Sáb con cita previa.'
    });
  }, []);
  
  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />
      
      <main className="container py-8">
        <header className="page-header mb-12">
          <h1 className="page-title">Contacto</h1>
          <p className="page-subtitle">Estamos aquí para atenderte</p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="mb-4">Información de Contacto</h2>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="mb-2">WhatsApp</h3>
                <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Enviar mensaje
                </a>
              </div>
              <div>
                <h3 className="mb-2">Teléfono</h3>
                <p>{getFormattedPhone()}</p>
              </div>
              <div>
                <h3 className="mb-2">Horario</h3>
                <p>Lunes - Viernes: 10:00 - 20:00</p>
                <p>Sábado: 09:00 - 18:00</p>
              </div>
              <div>
                <h3 className="mb-2">Dirección</h3>
                <p>Av. Ejemplo 123, Col. Centro<br />Ciudad de México, CDMX 01000</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2 className="mb-4">Ubicación</h2>
            <div style={{ width: '100%', height: '400px', backgroundColor: 'var(--clr-gray-200)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: 'var(--clr-gray-600)' }}>Mapa de ubicación</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
