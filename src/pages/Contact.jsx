import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { buildWhatsAppUrl, getFormattedPhone } from '../utils/whatsapp';
import { setDocumentMeta } from '../utils/seo';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    setDocumentMeta({
      title: 'Contacto | Estudio de Belleza Elegante',
      description: 'Agenda tu cita por WhatsApp, teléfono o visítanos. Lun-Sáb con cita previa.'
    });
  }, []);

  const quickActions = [
    { label: 'WhatsApp', href: buildWhatsAppUrl(), icon: '💬', aria: 'Agendar por WhatsApp' },
    { label: 'Teléfono', href: `tel:${getFormattedPhone().replace(/[^\d+]/g, '')}`, icon: '📞', aria: 'Llamar al estudio' },
    { label: 'Instagram', href: 'https://instagram.com/estudioelegante', icon: '📸', aria: 'Abrir Instagram' },
    { label: 'Maps', href: 'https://maps.google.com/?q=Av.+Ejemplo+123+CDMX', icon: '🗺️', aria: 'Abrir mapa en Google Maps' }
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nombre = formData.get('nombre');
    const servicio = formData.get('servicio');
    const mensaje = formData.get('mensaje');
    const url = buildWhatsAppUrl({
      texto: `Hola, soy ${nombre || 'una clienta'}. Me interesa ${servicio || 'un servicio'}: ${mensaje}`
    });
    window.open(url, '_blank');
    event.currentTarget.reset();
  };

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main className="contact-page">
        <div className="container py-12">
          <header className="page-header">
            <h1 className="page-title">Contacto & Reserva</h1>
            <p className="page-subtitle">Elige el canal que prefieras — respondemos personalmente.</p>
          </header>

          <section className="contact-actions" aria-label="Accesos rápidos">
            {quickActions.map(action => (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action"
                aria-label={action.aria}
              >
                <span aria-hidden="true">{action.icon}</span>
                {action.label}
              </a>
            ))}
          </section>

          <div className="contact-grid">
            <section className="contact-card" aria-label="Información de contacto">
              <h2>Información general</h2>
              <div className="contact-info">
                <div>
                  <h3>WhatsApp</h3>
                  <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">{getFormattedPhone()}</a>
                </div>
                <div>
                  <h3>Horario</h3>
                  <p>Lunes a Viernes · 10:00 - 20:00</p>
                  <p>Sábado · 09:00 - 18:00</p>
                </div>
                <div>
                  <h3>Dirección</h3>
                  <address>
                    Av. Ejemplo 123, Col. Centro<br />
                    Ciudad de México, CDMX 01000
                  </address>
                </div>
              </div>
            </section>

            <section className="contact-card" aria-label="Ubicación">
              <h2>Cómo llegar</h2>
              <div className="contact-map">
                <iframe
                  title="Mapa del Estudio de Belleza Elegante"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123456789!2d-99.133178!3d19.432608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92c1234567%3A0xabcdef123456789!2sCentro%20Hist%C3%B3rico%20de%20la%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1700000000000"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>

          <section className="contact-card" aria-label="Formulario de contacto">
            <h2>Solicitar información</h2>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" />

              <label htmlFor="servicio">Servicio de interés</label>
              <input id="servicio" name="servicio" type="text" placeholder="Ej. Maquillaje de evento" />

              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={4} placeholder="Cuéntanos qué necesitas"></textarea>

              <button type="submit" className="btn btn-primary">Enviar por WhatsApp</button>
            </form>
          </section>
        </div>
      </main>

      <Footer />

      <div className="contact-sticky-cta">
        <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
          Agendar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Contact;
