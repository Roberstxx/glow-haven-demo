import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import './Contact.css';

const EMAIL_TO = 'Correoooo'; // cámbialo por tu correo real

// === Iconos SVG (como los del footer) ===
const IconIG = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="ig" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f58529" />
        <stop offset="50%" stopColor="#dd2a7b" />
        <stop offset="100%" stopColor="#8134af" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig)"></rect>
    <path fill="#fff" d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6.1 3 3 0 0 1 0 6.1Zm4.9-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    <path fill="#fff" d="M17.4 4H6.6A2.6 2.6 0 0 0 4 6.6v10.8A2.6 2.6 0 0 0 6.6 20h10.8a2.6 2.6 0 0 0 2.6-2.6V6.6A2.6 2.6 0 0 0 17.4 4Zm.9 13.4c0 .5-.4.9-.9.9H6.6a.9.9 0 0 1-.9-.9V6.6c0-.5.4-.9.9-.9h10.8c.5 0 .9.4.9.9v10.8Z" />
  </svg>
);
const IconFB = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#1877F2"></rect>
    <path fill="#fff" d="M13 20v-6h2l.3-3H13V9.2c0-.9.3-1.5 1.6-1.5H15V5.1c-.3 0-1-.1-2-.1-2.2 0-3.7 1.3-3.7 3.8V11H7v3h2.3v6H13Z" />
  </svg>
);
const IconWA = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#25D366"></rect>
    <path fill="#fff" d="M12.1 4a7.8 7.8 0 0 0-6.7 11.7L4 20l4.4-1.2a7.8 7.8 0 1 0 3.7-14.8Zm4.5 11.3c-.2.6-1 1-1.6 1.1-.4 0-.9 0-3-1-2.5-1.1-4.2-3.7-4.3-3.9-.1-.2-1-1.3-1-2.6 0-1.3.7-2 1-2.2.2-.2.6-.3 1-.3h.4c.3 0 .5 0 .8.6.3.6 1.1 2 .1 2.3-.2.1-.4.3-.3.6.2.6.9 1.8 2 2.6 1.4 1 2.4 1.3 2.8 1 .3-.2.4-.6.6-.8.1-.2.4-.2.6-.1.2.1 1.7.8 2 1 .2.1.3.2.4.3 0 .3 0 .7-.5 1.4Z" />
  </svg>
);
const IconTT = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#0f0f0f"></rect>
    <path fill="#fff" d="M16.5 9.9a6.5 6.5 0 0 1-2.4-.8v4.1a4.8 4.8 0 1 1-4.1-4.8v2a2.8 2.8 0 1 0 2.2 2.7V4.5h2a4.6 4.6 0 0 0 2.3 3.2 4.6 4.6 0 0 0 2 .5v2.1a6 6 0 0 1-2 .4Z" />
  </svg>
);

const Contact = () => {
  useEffect(() => {
    setDocumentMeta({
      title: 'Contacto | Ahavah Beauty Studio',
      description: 'Redes sociales, horarios por día y ubicación para visitarnos.'
    });
  }, []);

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com/ahavahbeautystudio', Icon: IconIG },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100082316936923', Icon: IconFB },
    { label: 'WhatsApp', href: 'https://wa.me/529812061662', Icon: IconWA },
    { label: 'TikTok', href: 'https://www.tiktok.com/@ahavahbeautystudio', Icon: IconTT },
  ];

  const serviceOptions = [
    'Uñas acrílicas',
    'Uñas gelish',
    'Manicure / Pedicure',
    'Maquillaje social',
    'Peinado',
    'Cejas / Pestañas',
    'Otro'
  ];

  const schedule = [
    { day: 'Lunes', time: '11:00 am – 6:00 pm' },
    { day: 'Martes', time: '10:00 am – 5:00 pm' },
    { day: 'Miércoles', time: '11:00 am – 6:00 pm' },
    { day: 'Jueves', time: '11:00 am – 6:00 pm' },
    { day: 'Viernes', time: '10:00 am – 5:00 pm' },
    { day: 'Sábado', time: '11:00 am – 6:00 pm' },
    { day: 'Domingo', time: 'Cerrado' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nombre = form.get('nombre');
    const servicio = form.get('servicio');
    const telefono = form.get('telefono');
    const mensaje = form.get('mensaje');
    const subject = encodeURIComponent(`Consulta — ${servicio}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nTeléfono: ${telefono}\nServicio: ${servicio}\n\nMensaje:\n${mensaje}`
    );
    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
    e.currentTarget.reset();
  };

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main className="contact-page">
        <div className="container py-12">
          <header className="page-header animate-fade-in">
            <h1 className="page-title">Contacto / Reserva</h1>
            <p className="page-subtitle">Síguenos en redes, revisa horarios y visítanos.</p>
          </header>

          {/* Redes sociales (mismos íconos que footer) */}
          <section className="social-links">
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={label}>
                <Icon />
              </a>
            ))}
          </section>

          <div className="contact-grid">
            {/* Horarios con formato destacado */}
            <section className="contact-card">
              <h2>Horarios de atención</h2>
              <dl className="schedule">
                {schedule.map(({ day, time }) => (
                  <div className="schedule-row" key={day}>
                    <dt className="schedule-day">{day}</dt>
                    <dd className="schedule-time">{time}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Mapa + dirección debajo (versión final con ubicación exacta de Ahavah) */}
            <section className="contact-card">
              <h2>Cómo llegar</h2>
              <div className="contact-map">
                <iframe
                  title="Mapa del Estudio Ahavah Beauty Studio"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4613.101012192213!2d-90.54866469999999!3d19.8386225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f833049c5db98b%3A0x73900e75d332c356!2sAhavah%20Beauty%20Studio!5e1!3m2!1ses!2smx!4v1760060408301!5m2!1ses!2smx"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="map-address">
                <span className="pin" aria-hidden="true">📍</span>
                <span className="address-text">Ahavah Beauty Studio, C. 10 477, entre victoria y abasolo, Barrio de San Román, 24040 San Francisco de Campeche, Camp.</span>
              </p>
            </section>


            {/* Form correo (nombre, servicio, teléfono, mensaje) */}
            <section className="contact-card">
              <h2>Escríbenos</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" placeholder="Tu nombre completo" required />

                <label htmlFor="servicio">Servicio de interés</label>
                <select id="servicio" name="servicio" required>
                  {serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>

                <label htmlFor="telefono">Teléfono</label>
                <input id="telefono" name="telefono" type="tel" placeholder="Ej. +52 981 206 1662" required />

                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={4} placeholder="Cuéntanos qué necesitas"></textarea>

                <button type="submit" className="btn btn-primary">Enviar mensaje</button>
              </form>
            </section>
          </div>

          {/* Recordatorios (con más aire) */}
          <section className="contact-card contact-notes">
            <ul>
              <li>💅 Todas las reservas se confirman con anticipo del 30%.</li>
              <li>🕒 Tolerancia de 15 minutos por cita.</li>
              <li>💗 Si presentas síntomas o lesiones, reagenda tu visita por seguridad.</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
