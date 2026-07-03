import React from 'react';
import { Link } from 'react-router-dom';

const Post1 = () => (
  <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px', minHeight: '80vh' }}>
    <h1 className="gold-text" style={{ marginBottom: '30px', fontSize: '2.5rem' }}>Review: Why Mathuram Cafe is the Best Vegetarian Restaurant in Brahmavara</h1>
    
    <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
      <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
        If you're anything like me, finding a genuinely good, pure vegetarian restaurant that ticks all the boxes—taste, hygiene, and ambiance—can feel like searching for a needle in a haystack. But recently, I stumbled upon a true hidden gem that locals are already raving about: <strong>Mathuram Cafe in Brahmavara</strong>.
      </p>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>The Authentic Udupi Experience</h3>
      <p style={{ marginBottom: '20px' }}>
        When you walk into Mathuram Cafe, located conveniently in the Laxmi Empire Building in Brahmavara, you immediately feel the welcoming vibe. It’s not just another eatery; it feels like a modern tribute to traditional South Indian culinary heritage. The aroma of freshly roasted coffee beans and ghee-laden dosas hits you right at the door.
      </p>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>What Makes It Stand Out?</h3>
      <p style={{ marginBottom: '20px' }}>
        I've visited plenty of vegetarian spots in Udupi and Manipal, but Mathuram Cafe brings something special to the table:
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>100% Pure Veg Commitment:</strong> No compromises. Every ingredient is strictly vegetarian, making it perfect for families who are particular about their dietary preferences.</li>
        <li style={{ marginBottom: '10px' }}><strong>Uncompromising Quality:</strong> The Ghee Podi Dosa here is out of this world. It's perfectly crisp, roasted in pure ghee, and coated with a spicy, flavorful podi that leaves a lingering taste you’ll crave for days.</li>
        <li style={{ marginBottom: '10px' }}><strong>Spotless Ambiance:</strong> The cleanliness is top-tier. Whether you choose the AC section for a cool retreat from the afternoon sun or the airy Non-AC seating, the space is immaculate.</li>
      </ul>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>The Verdict</h3>
      <p style={{ marginBottom: '20px' }}>
        If you are driving through Brahmavara or looking for a weekend dining spot for your family, you absolutely cannot skip this place. Mathuram Cafe has rightfully earned its title as the <strong>best pure veg restaurant in Brahmavara</strong>. It's a place where authentic taste meets modern comfort.
      </p>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          Hungry yet? <Link to="/menu" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Check out their full menu here</Link> and plan your visit!
        </p>
      </div>
    </div>
  </div>
);

export default Post1;
