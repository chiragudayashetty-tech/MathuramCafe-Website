import React from 'react';
import { Link } from 'react-router-dom';

const Post3 = () => (
  <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px', minHeight: '80vh' }}>
    <h1 className="gold-text" style={{ marginBottom: '30px', fontSize: '2.5rem' }}>Looking for the Best Family Restaurant Near Manipal and Udupi?</h1>
    
    <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
      <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
        Let's be honest: taking the whole family out for dinner can be a stressful experience. You need a place with ample parking, a menu diverse enough to keep kids and grandparents happy, comfortable seating, and—most importantly—great food. 
      </p>

      <p style={{ marginBottom: '20px' }}>
        After trying out dozens of spots around Manipal and Udupi, I've finally found a restaurant that makes family dining completely effortless: <strong>Mathuram Cafe in Brahmavara</strong>.
      </p>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>A Space Designed for Comfort</h3>
      <p style={{ marginBottom: '20px' }}>
        The moment you pull up to Mathuram Cafe, the first thing you'll notice is the massive, hassle-free parking area—a rare luxury in this region! Inside, the restaurant is broadly divided into two spacious sections.
      </p>
      <p style={{ marginBottom: '20px' }}>
        They offer a beautifully air-conditioned dining hall, which is a blessing during humid summer days, as well as a well-ventilated Non-AC section. The seating is plush and comfortable, meaning you won't feel rushed to eat and leave. It’s a space where you can actually sit back, talk, and enjoy your time together.
      </p>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>A Menu to Please Everyone</h3>
      <p style={{ marginBottom: '20px' }}>
        What truly makes Mathuram Cafe the <strong>best family restaurant in Brahmavara</strong> is their extensive pure vegetarian menu. 
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>For the traditionalists:</strong> The classic South Indian banana leaf meals are hearty, unlimited, and packed with homestyle flavor.</li>
        <li style={{ marginBottom: '10px' }}><strong>For the kids:</strong> Crispy French fries, sweet corn soup, and indulgent milkshakes are always a hit.</li>
        <li style={{ marginBottom: '10px' }}><strong>For dinner crowds:</strong> Their North Indian gravies (like Paneer Butter Masala) paired with soft Butter Naans and Tandoori starters are remarkably authentic and rich.</li>
      </ul>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>Final Thoughts</h3>
      <p style={{ marginBottom: '20px' }}>
        Great food aside, it’s the attentive, polite staff and the exceptionally clean environment that makes Mathuram Cafe stand out as a premier family destination. The next time you're debating where to take the family for lunch or dinner, make the short drive to Brahmavara. You won't regret it.
      </p>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          Planning a family get-together? <Link to="/visit" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Check out their location and visiting details here</Link>.
        </p>
      </div>
    </div>
  </div>
);

export default Post3;
