import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { portfolioItems, getPortfolioByCategory } from '../data/portfolio';
import { categories } from '../data/services';
import { setDocumentMeta } from '../utils/seo';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [lightboxImage, setLightboxImage] = useState(null);
  
  useEffect(() => {
    setDocumentMeta({
      title: 'Galería de Resultados | Estudio de Belleza Elegante',
      description: 'Mira nuestros trabajos: transformaciones antes/después, diseños de uñas, maquillajes y peinados profesionales.'
    });
  }, []);
  
  const filteredPortfolio = selectedCategory
    ? getPortfolioByCategory(selectedCategory)
    : portfolioItems;
  
  const openLightbox = (item) => {
    setLightboxImage(item);
  };
  
  const closeLightbox = () => {
    setLightboxImage(null);
  };
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    
    if (lightboxImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);
  
  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />
      
      <main className="gallery-page">
        <div className="container py-8">
          <header className="page-header mb-12">
            <h1 className="page-title">Galería de Resultados</h1>
            <p className="page-subtitle">
              Descubre nuestros trabajos y transformaciones
            </p>
          </header>
          
          {/* Category Filters */}
          <div className="gallery-filters mb-8">
            <button
              onClick={() => setSelectedCategory('')}
              className={`filter-btn ${selectedCategory === '' ? 'active' : ''}`}
            >
              Todos
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredPortfolio.map(item => (
              <article key={item.id} className="gallery-item">
                {item.beforeImage && item.afterImage ? (
                  // Before/After Item
                  <div className="gallery-ba-wrapper">
                    <BeforeAfterSlider
                      beforeImage={item.beforeImage}
                      afterImage={item.afterImage}
                      alt={item.title}
                    />
                    <div className="gallery-item-info">
                      <h3 className="gallery-item-title">{item.title}</h3>
                      <p className="gallery-item-description">{item.description}</p>
                    </div>
                  </div>
                ) : (
                  // Single Image Item
                  <button
                    onClick={() => openLightbox(item)}
                    className="gallery-image-btn"
                    aria-label={`Ver ${item.title}`}
                  >
                    <img
                      <img src={item.image} ... />

                      alt={item.title}
                      className="gallery-image"
                      loading="lazy"
                    />
                    <div className="gallery-item-overlay">
                      <h3 className="gallery-item-title">{item.title}</h3>
                      <p className="gallery-item-description">{item.description}</p>
                    </div>
                  </button>
                )}
              </article>
            ))}
          </div>
          
          {filteredPortfolio.length === 0 && (
            <div className="empty-state">
              <p className="empty-state-text">No hay trabajos en esta categoría aún.</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen"
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar vista ampliada"
          >
            ✕
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              <img src={lightboxImage.image} ... />

              alt={lightboxImage.title}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <h3>{lightboxImage.title}</h3>
              <p>{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
