import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Experiencia', path: '/experiencia' },
    { name: 'Seguridad', path: '/seguridad' },
    { name: 'Políticas', path: '/politicas' },
    { name: 'Filosofía', path: '/filosofia' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Conócenos', path: '/conocenos' },
    { name: 'Contacto', path: '/contacto' },
    { name: 'FAQ', path: '/faq' }
  ];
  
  const isActive = (path) => location.pathname === path;
  
  const handleBooking = () => {
    window.open(buildWhatsAppUrl({ servicio: 'Consulta general' }), '_blank');
  };
  
  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" aria-label="Ir a inicio">
            <span className="logo-text">Belleza Elegante</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="nav-desktop" role="navigation" aria-label="Navegación principal">
            <ul className="nav-list">
              {navigation.map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* CTA Button */}
          <button
            onClick={handleBooking}
            className="btn btn-primary header-cta"
            aria-label="Reservar cita por WhatsApp"
          >
            Reservar
          </button>
          
          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú de navegación"
          >
            <span className="menu-icon"></span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="nav-mobile" role="navigation">
            <ul className="nav-mobile-list">
              {navigation.map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-mobile-link ${isActive(item.path) ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    handleBooking();
                    setIsMenuOpen(false);
                  }}
                  className="btn btn-primary nav-mobile-cta"
                >
                  Reservar
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
