import React, { useState } from 'react';
import galleryData from '../data/gallery.json';
import { FaTimes } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', ...new Set(galleryData.map(img => img.category))];

  const filteredGallery = activeCategory === 'All' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  const openLightbox = (imgSrc) => {
    setLightboxImage(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-page">
      <div className="container">
        <div className="page-header text-center">
          <h1>Our Gallery</h1>
          <p>A glimpse into Mathuram Cafe's ambiance, food, and culture.</p>
        </div>

        <div className="gallery-filters">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="masonry-gallery">
          {filteredGallery.map((img, idx) => (
            <div 
              key={idx} 
              className="masonry-item"
              onClick={() => openLightbox(img.src)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="item-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <img src={lightboxImage} alt="Enlarged" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
