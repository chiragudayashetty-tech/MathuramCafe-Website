import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaTimes } from 'react-icons/fa';
import galleryData from '../data/gallery.json';
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
    <motion.div 
      className="gallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="page-header text-center">
          <h1 className="gold-text">Our Gallery</h1>
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

        <motion.div 
          className="masonry-gallery"
          layout
        >
          <AnimatePresence>
            {filteredGallery.map((img, idx) => (
              <motion.div 
                key={img.src} // Use src as key for reliable layout animations
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="masonry-item-wrapper"
              >
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                  <div 
                    className="masonry-item"
                    onClick={() => openLightbox(img.src)}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" />
                    <div className="item-overlay">
                      <span className="glass-panel">View</span>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
    </motion.div>
  );
};

export default Gallery;
