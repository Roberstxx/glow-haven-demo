import { Link } from "react-router-dom";
import "./PolicyPreview.css";

const PolicyPreview = () => {
  const items = [
    {
      title: "Bioseguridad",
      img: "/images/Uniforme1.png",
      to: "/seguridad",
    },
    {
      title: "Esterilización",
      img: "/images/bioseguridad2.jpg",
      to: "/seguridad",
    },
    {
      title: "Material Descartable",
      img: "/images/bioseguridad3.png",
      to: "/seguridad",
    },
    {
      title: "Políticas del Estudio",
      img: "/images/politicas1.png",
      to: "/politicas",
    },
  ];

  return (
    <section className="policy-preview py-16">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Políticas y Seguridad</h2>
          <p className="section-subtitle">
            Cuidamos cada detalle para garantizar tu bienestar y confianza.
          </p>
        </div>

        <div className="policy-grid">
          {items.map((item, i) => (
            <Link key={i} to={item.to} className="policy-card">
              <img src={item.img} alt={item.title} className="policy-image" />
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyPreview;
