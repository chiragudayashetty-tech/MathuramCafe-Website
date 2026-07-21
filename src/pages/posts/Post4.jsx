import React from 'react';
import { Link } from 'react-router-dom';

const Post4 = () => (
  <div className="container" style={{ paddingTop: '180px', paddingBottom: '80px', maxWidth: '800px', minHeight: '80vh' }}>
    <h1 className="gold-text" style={{ marginBottom: '30px', fontSize: '2.5rem' }}>The Best Veg Restaurant Near NH 66: A Must-Stop Highway Oasis</h1>
    
    <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
      <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
        Driving along the scenic NH 66 coastal highway is an incredible experience, but finding a clean, hygienic, and high-quality pure vegetarian restaurant for a pitstop can sometimes be a challenge. If you are traveling between Mangalore, Udupi, and Kundapura, we have the perfect recommendation for you: <strong>Mathuram Cafe in Brahmavara</strong>.
      </p>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>Why Mathuram Cafe is the Ultimate Highway Stop</h3>
      <p style={{ marginBottom: '20px' }}>
        Conveniently located just off the NH 66 in Brahmavara, Mathuram Cafe has quickly become a favorite stopping point for families, solo travelers, and road-trippers. Here is why it stands out as the best veg restaurant near NH 66:
      </p>
      
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>Easy Highway Access &amp; Parking:</strong> Situated in the Laxmi Empire Building, getting in and out of the highway is a breeze, and you won't have to worry about finding safe parking for your vehicle.</li>
        <li style={{ marginBottom: '10px' }}><strong>Impeccable Hygiene &amp; Clean Restrooms:</strong> One of the biggest concerns during a road trip is finding clean facilities. Mathuram Cafe maintains a spotless environment, from the dining tables to the pristine restrooms, ensuring a comfortable break for families.</li>
        <li style={{ marginBottom: '10px' }}><strong>Authentic &amp; Fresh Pure Veg Food:</strong> Forget the typical heavy highway dhaba food. Enjoy authentic Udupi-style South Indian cuisine that is light, flavorful, and freshly prepared. Their Kumbakonam Filter Coffee is exactly what you need to stay alert on the road.</li>
      </ul>

      <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
        <img src="/assets/Photos/Food/Masala Dose and filter Cofee.webp" alt="Authentic Masala Dosa and Filter Coffee at Mathuram Cafe" style={{ width: '100%', height: 'auto', display: 'block' }} />
        <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
          Crispy Masala Dosa and authentic Kumbakonam Filter Coffee
        </div>
      </div>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>What to Order on a Quick Pitstop</h3>
      <p style={{ marginBottom: '20px' }}>
        If you are short on time, order the <strong>Ghee Podi Thatte Idli</strong> or a classic crispy <strong>Masala Dosa</strong>. They are served quickly, perfectly hot, and absolutely delicious. Pair it with their signature filter coffee for the ultimate refreshment before hitting the highway again.
      </p>

      <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
        <img src="/assets/Photos/Food/Thatte Idli.webp" alt="Ghee Podi Thatte Idli at Mathuram Cafe near NH 66" style={{ width: '100%', height: 'auto', display: 'block' }} />
        <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
          The crowd-favorite Ghee Podi Thatte Idli
        </div>
      </div>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>The Verdict</h3>
      <p style={{ marginBottom: '20px' }}>
        Don't settle for mediocre highway food. Mathuram Cafe offers a premium dining experience that revitalizes you for the journey ahead. The next time you are cruising on NH 66, make sure to schedule a stop at the best pure veg restaurant near NH 66.
      </p>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          Planning your road trip? <Link to="/menu" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>View our full menu</Link> or get directions via our <Link to="/contact" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Contact page</Link>!
        </p>
      </div>
    </div>
  </div>
);

export default Post4;
