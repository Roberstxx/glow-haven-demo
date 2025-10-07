import { Link } from 'react-router-dom';
import { buildWhatsAppUrl, getFormattedPhone } from '../utils/whatsapp';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Belleza Elegante</h3>
            <p className="footer-text">
              Estudio profesional de belleza dedicado a realzar tu confianza con servicios de calidad premium y los más altos estándares de higiene.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/experiencia">Experiencia</Link></li>
              <li><Link to="/seguridad">Seguridad</Link></li>
              <li><Link to="/politicas">Políticas</Link></li>
              <li><Link to="/filosofia">Filosofía</Link></li>
              <li><Link to="/faq">Preguntas Frecuentes</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contacto</h4>
            <ul className="footer-contact">
              <li>
                <strong>Teléfono:</strong><br />
                <a href={buildWhatsAppUrl()}>{getFormattedPhone()}</a>
              </li>
              <li>
                <strong>Horario:</strong><br />
                Lun-Vie: 10:00 - 20:00<br />
                Sáb: 09:00 - 18:00
              </li>
              <li>
                <strong>Dirección:</strong><br />
                Av. Ejemplo 123, Col. Centro<br />
                Ciudad de México, CDMX
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Síguenos</h4>
            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Belleza Elegante. Todos los derechos reservados.
          </p>
          <div className="footer-legal">
            <Link to="/politicas">Políticas</Link>
            <span className="divider">•</span>
            <Link to="/privacidad">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
