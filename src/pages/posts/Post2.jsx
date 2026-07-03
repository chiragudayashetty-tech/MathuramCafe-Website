import React from 'react';
import { Link } from 'react-router-dom';

const Post2 = () => (
  <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px', minHeight: '80vh' }}>
    <h1 className="gold-text" style={{ marginBottom: '30px' }}>Where to Eat South Indian Breakfast in Udupi</h1>
    <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
      <p>A great day begins with a fantastic <strong>South Indian breakfast</strong>. If you are anywhere near Udupi or Brahmavara, Mathuram Cafe is your ideal morning stop.</p>
      <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Our Morning Specialties</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li><strong>Ghee Podi Idli:</strong> Soft, fluffy idlis smothered in premium ghee and our signature spicy podi.</li>
        <li><strong>Masala Dosa:</strong> Perfectly crisp on the outside, filled with a flavorful potato masala on the inside.</li>
        <li><strong>Degree Filter Coffee:</strong> The only authentic way to finish a South Indian breakfast.</li>
      </ul>
      <p>Don't settle for average. <Link to="/contact" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Get directions to Mathuram Cafe</Link> and start your day right.</p>
    </div>
  </div>
);

export default Post2;
