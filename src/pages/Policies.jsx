import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import useScrollToTop from '../hooks/useScrollToTop';
import './Policies.css';

const policyCards = [
  {
    title: 'Agendamiento',
    icon: '🗓️',
    points: [
      'Las citas se confirman con anticipo del 30%.',
      'Cancelaciones o cambios con 24h de anticipación.',
      'Tolerancia máxima de 15 minutos.'
    ]
  },
  {
    title: 'Seguridad',
    icon: '🛡️',
    points: [
      'No se permiten acompañantes dentro de cabina.',
      'No se permite el ingreso de mascotas.',
      'Reagendamos si presentas síntomas o lesiones visibles.'
    ]
  },
  {
    title: 'Antes de tu cita',
    icon: '🧴',
    points: [
      'Llega con la zona limpia y sin cremas o aceites.',
      'Avísanos si requieres remoción o servicio adicional.',
      'Trae referencias de estilo para personalizar tu experiencia.'
    ]
  }
];

const extendedPolicies = [
  'Reagendar después de la tolerancia implica reprogramar con nuevo anticipo.',
  'Si no podemos contactarte al llegar tu hora, liberamos el espacio para la siguiente persona.',
  'Pagos aceptados: transferencia, tarjeta y links de pago seguros.',
  'Contamos con historial clínico básico para detectar alergias o restricciones.',
  'Los anticipos no son reembolsables pero pueden transferirse una vez dentro del mes en curso.'
];

const PoliciesModal = ({ open, onClose }) => {
  if (!open) return null;

  return createPortal(
    <div className="policies-modal" role="dialog" aria-modal="true" aria-labelledby="policies-modal-title">
      <div className="policies-modal-backdrop" onClick={onClose} />
      <div className="policies-modal-content" role="document">
        <button className="policies-modal-close" type="button" onClick={onClose} aria-label="Cerrar políticas completas">
          ✕
        </button>
        <h2 id="policies-modal-title">Políticas completas</h2>
        <ul>
          {extendedPolicies.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  );
};

const Policies = () => {
  useScrollToTop();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setDocumentMeta({
      title: 'Políticas & Recordatorios | Estudio Elegante',
      description: 'Conoce nuestras reglas de agendamiento, seguridad y preparación antes de tu cita.'
    });
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main className="policies-page">
        <div className="container py-12">
          <header className="page-header">
            <h1 className="page-title">Políticas & Recordatorios</h1>
            <p className="page-subtitle">
              Queremos brindarte una experiencia impecable. Ayúdanos a lograrlo siguiendo estas recomendaciones.
            </p>
          </header>

          <section className="policies-grid" aria-label="Resumen de políticas">
            {policyCards.map(card => (
              <article key={card.title} className="policy-card">
                <div className="policy-icon" aria-hidden="true">{card.icon}</div>
                <h2>{card.title}</h2>
                <ul>
                  {card.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <div className="policies-footer">
            <p className="policies-note">
              Tu tiempo es valioso — y el nuestro también. Gracias por ayudarnos a cuidarlo.
            </p>
            <button className="btn btn-outline" type="button" onClick={() => setIsModalOpen(true)}>
              Ver todas las políticas
            </button>
          </div>
        </div>
      </main>

      <Footer />

      <PoliciesModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Policies;
