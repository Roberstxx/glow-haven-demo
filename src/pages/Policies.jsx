// Policies.jsx (Corregido para coincidir con la estructura de Home)

import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import './Policies.css';
import useScrollToTop from '../hooks/useScrollToTop';

// --- Datos y Modal (sin cambios) ---
const policyCards = [ { title: 'Agendamiento', icon: '🗓️', points: [ 'Las citas se confirman con anticipo del 30%.', 'Cancelaciones o cambios con 24h de anticipación.', 'Tolerancia máxima de 15 minutos.' ] }, { title: 'Seguridad', icon: '🛡️', points: [ 'No se permiten acompañantes dentro de cabina.', 'No se permite el ingreso de mascotas.', 'Reagendamos si presentas síntomas o lesiones visibles.' ] }, { title: 'Antes de tu cita', icon: '🧴', points: [ 'Llega con la zona limpia y sin cremas o aceites.', 'Avísanos si requieres remoción o servicio adicional.', 'Trae referencias de estilo para personalizar tu experiencia.' ] } ];
const safetyBlocks = [ { icon: '👩🏻‍⚕️', title: 'Profesional', items: ['Uniforme antifluidos', 'Guantes y mascarilla', 'Certificaciones vigentes'] }, { icon: '🤍', title: 'Cliente', items: ['Diagnóstico previo a cada cita', 'Materiales desechables', 'Toallas sanitizadas'] }, { icon: '🛠️', title: 'Instrumental', items: ['Limpieza de grado quirúrgico', 'Esterilización por cliente', 'Herramientas en blíster sellado'] }, { icon: '🌬️', title: 'Ambiente', items: ['Ventilación constante', 'Superficies desinfectadas', 'Gestión responsable de residuos'] } ];
const extendedPolicies = [ 'Reagendar después de la tolerancia implica reprogramar con nuevo anticipo.', 'Si no podemos contactarte al llegar tu hora, liberamos el espacio para la siguiente persona.', 'Pagos aceptados: transferencia, tarjeta y links de pago seguros.', 'Contamos con historial clínico básico para detectar alergias o restricciones.', 'Los anticipos no son reembolsables pero pueden transferirse una vez dentro del mes en curso.' ];

const PoliciesModal = ({ open, onClose }) => {
  if (!open) return null;
  return createPortal(
    <div className="policies-modal" role="dialog" aria-modal="true" aria-labelledby="policies-modal-title">
      <div className="policies-modal-backdrop" onClick={onClose} />
      <div className="policies-modal-content" role="document">
        <button className="policies-modal-close" type="button" onClick={onClose} aria-label="Cerrar políticas completas">✕</button>
        <h2 id="policies-modal-title">Políticas completas</h2>
        <ul>{extendedPolicies.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
    </div>,
    document.body
  );
};

// --- Componente Principal ---
const Policies = () => {
  useScrollToTop();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSafetySectionVisible, setSafetySectionVisible] = useState(false);
  const safetySectionRef = useRef(null);

  useEffect(() => {
    setDocumentMeta({
      title: 'Políticas y Seguridad | Estudio Elegante',
      description: 'Conoce nuestras políticas, recordatorios y protocolos de bioseguridad para una experiencia segura y confiable.'
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setSafetySectionVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: '0px', threshold: 0.2 }
    );
    const currentRef = safetySectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return (
    <div className="policies-page-background">
      <Header />
      <WhatsAppFloat />
      <main className="info-page">
        {/* Sección de Políticas */}
        <section className="info-section policies-background" aria-labelledby="policies-heading">
          <div className="container py-12">
            
            {/* ✅ ESTRUCTURA DE TÍTULO PRINCIPAL IGUAL A HOME */}
            <div className="section-header">
              <h1 className="hero-title">Políticas & Bioseguridad</h1>
              <p className="hero-subtitle">Tu bienestar y confianza son nuestra prioridad.</p>
            </div>
            
            {/* ✅ ESTRUCTURA DE SUBTÍTULO DE SECCIÓN IGUAL A HOME */}
            <div className="section-header">
              <h2 id="policies-heading" className="section-title">Nuestras Políticas</h2>
            </div>
            
            <div className="info-grid">
              {policyCards.map(card => (
                <article key={card.title} className="info-card">
                  <div className="info-card-icon">{card.icon}</div>
                  <h2>{card.title}</h2>
                  <ul className="policy-list">{card.points.map(point => <li key={point}>{point}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="policies-footer">
              <p className="policies-note">Tu tiempo es valioso y el nuestro también. Ayudanos a cuidarlo.</p>
              <button className="btn btn-outline" type="button" onClick={() => setIsModalOpen(true)}>Ver todas las políticas</button>
            </div>
          </div>
        </section>

        {/* Sección de Seguridad */}
        <section
          ref={safetySectionRef}
          className={`info-section safety-background reveal-section ${isSafetySectionVisible ? 'is-visible' : ''}`}
          aria-labelledby="safety-heading"
        >
          <div className="container py-12">

            {/* ✅ ESTRUCTURA DE SUBTÍTULO DE SECCIÓN IGUAL A HOME */}
            <div className="section-header">
              <h2 id="safety-heading" className="section-title">Bioseguridad</h2>
              <p className="section-subtitle">La belleza empieza por la salud.</p>
            </div>
            
            <div className="info-grid">
              {safetyBlocks.map(block => (
                <article key={block.title} className="info-card">
                  <div className="info-card-icon">{block.icon}</div>
                  <h2>{block.title}</h2>
                  <ul className="safety-list">{block.items.map(item => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            {/* La frase "La belleza empieza..." ya se movió al subtítulo de la sección */ }
          </div>
        </section>
      </main>
      <Footer />
      <PoliciesModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Policies;
