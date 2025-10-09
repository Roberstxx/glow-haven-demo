import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        {/* Col 1: Marca */}
        <div className="footer-brand">
          <h3 className="footer-title">Ahavah Beauty Studio</h3>
          <p className="footer-text">
            Estudio profesional dedicado a realzar tu confianza con servicios de
            calidad premium y protocolos de bioseguridad.
          </p>
        </div>

        {/* Col 2: Enlaces */}
        <nav className="footer-links" aria-label="Enlaces rápidos">
          <h4 className="footer-subtitle">Enlaces Rápidos</h4>
          <ul>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/experiencia">Experiencia</Link></li>
            <li><Link to="/seguridad">Seguridad</Link></li>
            <li><Link to="/politicas">Políticas</Link></li>
            <li><Link to="/filosofia">Filosofía</Link></li>
            <li><Link to="/faq">Preguntas Frecuentes</Link></li>
          </ul>
        </nav>

        {/* Col 3: Contacto */}
        <div className="footer-contact">
          <h4 className="footer-subtitle">Contacto</h4>
          <ul>
            <li><strong>Teléfono:</strong> <a href="tel:+5219812061662">+52 1 981 206 1662</a></li>
            <li><strong>Horario:</strong> Lun–Vie 10:00–20:00 · Sáb 09:00–18:00</li>
            <li>
              <strong>Dirección:</strong>{' '}
              <a
                href="https://maps.google.com/?q=Av.+Ejemplo+123,+Col.+Centro,+CDMX"
                target="_blank" rel="noopener noreferrer"
              >
                Av. Ejemplo 123, Col. Centro, CDMX
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Redes */}
        <div className="footer-social">
          <h4 className="footer-subtitle">Síguenos</h4>
          <div className="social-row">
            <a className="social-icon ig" aria-label="Instagram"
              href="https://instagram.com/ahavahbeautystudio" target="_blank" rel="noopener noreferrer">
              {/* Instagram */}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" /></svg>
            </a>

            <a className="social-icon fb" aria-label="Facebook"
              href="https://www.facebook.com/profile.php?id=100082316936923" target="_blank" rel="noopener noreferrer">
              {/* Facebook */}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 9H16V6h-2.5C11.6 6 11 7.2 11 8.8V10H9v3h2v7h3v-7h2.3l.7-3H14v-1c0-.6.2-1 .5-1z" /></svg>
            </a>

            <a className="social-icon wa" aria-label="WhatsApp"
              href="https://wa.me/5219812061662" target="_blank" rel="noopener noreferrer">
              <svg
                className="whatsapp-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>



            <a className="social-icon tt" aria-label="TikTok"
              href="https://tiktok.com/@ahavahbeautystudio" target="_blank" rel="noopener noreferrer">
              {/* TikTok */}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 2a5.9 5.9 0 0 0 4.1 4.1v3.1a9.6 9.6 0 0 1-4.1-1.1v6.7a6.8 6.8 0 1 1-6.8-6.8c.4 0 .8 0 1.2.1v3.2c-.4-.1-.8-.2-1.2-.2a3.6 3.6 0 1 0 3.6 3.6V2z" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Ahavah Beauty Studio. Todos los derechos reservados.</p>
        <nav aria-label="Legal" className="footer-legal">
          <Link to="/politicas">Políticas</Link>
          <span aria-hidden="true">·</span>
          <Link to="/privacidad">Privacidad</Link>
        </nav>
      </div>
    </footer>
  );
}

