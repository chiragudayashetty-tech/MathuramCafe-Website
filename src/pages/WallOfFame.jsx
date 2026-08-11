import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vipsData from '../data/vips.json';
import './WallOfFame.css';

const WallOfFame = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="wall-of-fame-page" style={{ paddingTop: '160px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="section-title">Our Esteemed Guests</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 40px', color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
            Mathuram Cafe has become a favorite destination for prominent leaders, celebrities, and visionaries. 
            Here are some of the eminent personalities who have visited us.
          </p>
        </motion.div>

        <div className="vip-grid">
          {vipsData.map((vip, index) => (
            <motion.div 
              key={vip.id} 
              className="vip-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className="vip-media-container"
                onClick={() => setActiveVideo(vip)}
              >
                {vip.image ? (
                  <img src={vip.image} alt={vip.title} className="vip-image" />
                ) : (
                  <div className="vip-no-image">
                    <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--color-primary)' }}>star</span>
                  </div>
                )}
                
                {vip.video && (
                  <div className="play-button-overlay">
                    <div className="play-icon">▶</div>
                  </div>
                )}
              </div>
              
              <div className="vip-content">
                <h3 className="gold-text">{vip.name}</h3>
                {vip.role && <p className="vip-role">{vip.role}</p>}
                <p className="vip-description">{vip.description}</p>
                {vip.instagram_link && (
                  <a href={vip.instagram_link} target="_blank" rel="noopener noreferrer" className="vip-social-link">
                    View on Instagram
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              className="video-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal-btn" onClick={() => setActiveVideo(null)}>✕</button>
              <div className="video-wrapper">
                <video 
                  src={activeVideo.video} 
                  controls 
                  autoPlay 
                  className="vip-video-player"
                />
              </div>
              <div className="video-modal-info">
                <h3>{activeVideo.name}</h3>
                <p>{activeVideo.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WallOfFame;
