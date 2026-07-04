import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Reusing some base styles

const About = () => {
  return (
    <div className="home-page" style={{ paddingTop: '180px' }}>
      <section className="intro-section section">
        <div className="container intro-container">
          <motion.div 
            className="intro-text glass-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ padding: '40px', borderRadius: '16px' }}
          >
            <h1 className="gold-text">Family Restaurant in Brahmavara</h1>
            <p>
              Welcome to Mathuram Cafe, the premier family restaurant in Brahmavara. We pride ourselves on offering a welcoming environment for families to gather and enjoy authentic South Indian cuisine.
            </p>
            <p>
              Our establishment features both AC and Non-AC dining areas to ensure your absolute comfort. From our famous pure veg meals to our crispy dosas and degree filter coffee, every recipe is crafted to give you a taste of tradition.
            </p>
            <p>
              Whether you are planning a casual breakfast, a hearty family lunch, or a relaxed dinner, Mathuram Cafe guarantees exceptional service and unforgettable flavors. We look forward to serving you!
            </p>
          </motion.div>
          <motion.div 
            className="intro-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/assets/Photos/Resturant/family-restaurant-mathuram-cafe-brahmavara.webp" alt="Mathuram Cafe Family Dining" loading="lazy" style={{ borderRadius: '16px', border: '1px solid var(--color-border)' }} />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
