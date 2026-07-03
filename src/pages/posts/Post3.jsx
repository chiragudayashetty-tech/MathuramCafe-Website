import React from 'react';
import { Link } from 'react-router-dom';

const Post3 = () => (
  <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px', minHeight: '80vh' }}>
    <h1 className="gold-text" style={{ marginBottom: '30px' }}>Best Family Restaurant Near Manipal and Udupi</h1>
    <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
      <p>Finding a comfortable, clean, and delicious dining spot for the whole family can be a challenge. Mathuram Cafe stands out as the <strong>best family restaurant in Brahmavara</strong>, just a short drive from Manipal and Udupi.</p>
      <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Why Families Love Us</h3>
      <p>Our restaurant features spacious seating arrangements with both AC and Non-AC sections to suit your comfort. The ambiance is warm and welcoming, perfect for weekend family outings, birthday celebrations, or casual dinners.</p>
      <p>With a diverse menu that caters to both kids and adults, everyone leaves happy. Come experience our hospitality. <Link to="/visit" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Plan your visit today</Link>.</p>
    </div>
  </div>
);

export default Post3;
