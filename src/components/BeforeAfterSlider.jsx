import { useState } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  alt = 'Comparación antes y después'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' && sliderPosition > 0) {
      setSliderPosition(Math.max(0, sliderPosition - 1));
    } else if (e.key === 'ArrowRight' && sliderPosition < 100) {
      setSliderPosition(Math.min(100, sliderPosition + 1));
    }
  };

  return (
    <div className="before-after-container" role="img" aria-label={alt}>
      <div className="before-after-wrapper">
        {/* Imagen "Después" (capa inferior) */}
        <div className="after-image-wrapper">
          <img
            src={afterImage} // ✅ corregido: ya viene como "/images/after-boda.webp"
            alt={`Después - ${alt}`}
            className="comparison-image"
          />
          <div className="image-label label-after" aria-hidden="true">
            DESPUÉS
          </div>
        </div>

        {/* Imagen "Antes" (capa superior con clip dinámico) */}
        <div
          className="before-image-wrapper"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage} // ✅ corregido: ya viene como "/images/before-boda.webp"
            alt={`Antes - ${alt}`}
            className="comparison-image"
          />
          <div className="image-label label-before" aria-hidden="true">
            ANTES
          </div>
        </div>

        {/* Línea del deslizador */}
        <div
          className="slider-line"
          style={{ left: `${sliderPosition}%` }}
          aria-hidden="true"
        >
          <div className="slider-handle">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Input tipo range para controlar el slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        onKeyDown={handleKeyDown}
        className="slider-input"
        aria-label="Control deslizante de comparación antes y después"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={sliderPosition}
        aria-valuetext={`${sliderPosition}% visible de la imagen 'antes'`}
      />
    </div>
  );
};

export default BeforeAfterSlider;
