import React from 'react';
import { Link } from 'react-router-dom';

const Post1 = () => (
  <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px', minHeight: '80vh' }}>
    <h1 className="gold-text" style={{ marginBottom: '30px' }}>Best Vegetarian Restaurant in Brahmavara</h1>
    <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
      <p>When it comes to finding the <strong>best pure veg restaurant in Brahmavara</strong>, locals and travelers alike point to one destination: Mathuram Cafe.</p>
      <p>Located conveniently at the Laxmi Empire Building, our restaurant is dedicated to serving 100% pure vegetarian cuisine that delights the senses and comforts the soul.</p>
      <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Authentic Flavors</h3>
      <p>We believe in tradition. Our chefs use age-old recipes to prepare every dish, ensuring that each bite of our meals, dosas, and curries is packed with authentic South Indian flavor.</p>
      <p>Ready to taste the difference? <Link to="/menu" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Explore our full menu today</Link>.</p>
    </div>
  </div>
);

export default Post1;
