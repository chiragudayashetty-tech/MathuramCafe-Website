import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './TravelGuide.css';

const TravelGuide = () => {
  return (
    <>
      <Helmet>
        <title>Travel Guides & Itineraries | Mathuram Cafe</title>
        <meta name="description" content="Explore Udupi and Brahmavara with our comprehensive travel guides. Discover pristine beaches, historic temples, and authentic local food." />
      </Helmet>

      <div className="travel-guide-page">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="travel-guide-header"
          >
            <h1 className="gold-text" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Udupi Travel Guides</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto' }}>
              Your ultimate resource for exploring the beautiful Udupi district. From pristine beaches to ancient temples, discover the best of coastal Karnataka.
            </p>
          </motion.div>

          <div className="travel-guide-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/travel-guide/udupi-2-day-itinerary" className="guide-card">
                <div 
                  className="guide-image" 
                  style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/77/St._Mary%27s_Islands%2C_Udupi.jpg')" }}
                ></div>
                <div className="guide-content">
                  <span className="guide-tag">Itinerary</span>
                  <h3>2 Days in Udupi: The Perfect Weekend Itinerary</h3>
                  <p>Explore pristine beaches, historic temples, and the finest South Indian cuisine on this ultimate weekend getaway.</p>
                  <div className="guide-footer">
                    <span><FaClock /> 2 Days</span>
                    <span><FaMapMarkerAlt /> Udupi / Malpe</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Placeholder for future guides */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="guide-card" style={{ opacity: 0.7, cursor: 'default', transform: 'none', boxShadow: 'var(--shadow-md)' }}>
                <div 
                  className="guide-image" 
                  style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/9/90/Kaup_Lighthouse.jpg')", filter: 'grayscale(100%)' }}
                ></div>
                <div className="guide-content">
                  <span className="guide-tag" style={{ background: '#9ca3af' }}>Coming Soon</span>
                  <h3>Best Hidden Beaches Near Brahmavara</h3>
                  <p>A local's guide to the most secluded, pristine beaches along the NH66 coastal highway.</p>
                  <div className="guide-footer">
                    <span><FaClock /> 1 Day</span>
                    <span><FaMapMarkerAlt /> Coastal Highway</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelGuide;
