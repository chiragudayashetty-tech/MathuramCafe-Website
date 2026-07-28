import React from 'react';
import { Link } from 'react-router-dom';

const Post5 = () => (
  <div className="container" style={{ paddingTop: '180px', paddingBottom: '80px', maxWidth: '800px', minHeight: '80vh' }}>
    <h1 className="gold-text" style={{ marginBottom: '30px', fontSize: '2.5rem' }}>Why Mathuram Cafe is the Best Pure Veg Restaurant in Udupi</h1>
    
    <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
      <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
        There is a profound magic in food that feels like home. When you travel through the spiritual and cultural heart of Karnataka, you aren't just looking for a meal; you are searching for an experience that warms your soul. Among the countless eateries dotted along the coastal belt, one place has quietly captured the hearts of locals and travelers alike: <strong>Mathuram Cafe</strong>. It isn't just another stop on the map—it has earned the reputation of being the <strong>best pure veg restaurant in Udupi district</strong>.
      </p>

      <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
        <img src="/assets/Photos/Resturant/Entrace.webp" alt="Exterior entrance of Mathuram Cafe, the best pure veg restaurant in Udupi" style={{ width: '100%', height: 'auto', display: 'block' }} />
        <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
          Welcome home: The inviting entrance of Mathuram Cafe in Brahmavara, Udupi.
        </div>
      </div>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>More Than Just a Meal, It’s a Memory</h3>
      <p style={{ marginBottom: '20px' }}>
        Udupi is world-renowned for its vegetarian cuisine, meaning the standards for a <strong>pure veg restaurant in Udupi</strong> are astronomically high. But at Mathuram Cafe, we don't just cook food; we craft memories. From the moment you walk through our doors, the aroma of roasted coffee beans, fresh curry leaves, and pure melting ghee instantly transports you back to the nostalgia of a childhood kitchen. We believe that true hospitality is about feeding the soul as much as the stomach.
      </p>
      
      <p style={{ marginBottom: '20px' }}>
        Families travel from all over to experience our authentic Udupi cuisine. Whether it's the comforting warmth of a fresh South Indian Thali or the crisp perfection of our dosas, every dish is prepared with an unwavering commitment to purity, hygiene, and tradition.
      </p>

      <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
        <img src="/assets/Photos/Food/south-indian-meals-brahmavara.webp" alt="Authentic South Indian Thali Meals at Mathuram Cafe" style={{ width: '100%', height: 'auto', display: 'block' }} />
        <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
          The soul-satisfying South Indian Thali—a feast of traditional Udupi flavors.
        </div>
      </div>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>Why We Stand Out Among Udupi Vegetarian Restaurants</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>Uncompromising Purity:</strong> We are a 100% pure vegetarian establishment. You can dine with absolute peace of mind knowing that our kitchen strictly adheres to the highest standards of vegetarian cooking.</li>
        <li style={{ marginBottom: '10px' }}><strong>A Family-First Atmosphere:</strong> Finding a clean, comfortable, and spacious <strong>family restaurant in Udupi</strong> can be tough during peak tourist seasons. With ample seating, pristine washrooms, and dedicated family sections, we ensure your loved ones dine in complete comfort.</li>
        <li style={{ marginBottom: '10px' }}><strong>The Taste of Authenticity:</strong> Our signature <strong>Kotte Kadubu</strong> (idli steamed in jackfruit leaves) and Ghee Podi Thatte Idli are crafted using recipes passed down through generations. It is this dedication to authenticity that makes us a must-visit destination.</li>
      </ul>

      <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
        <img src="/assets/Photos/Food/Kotte Idli.webp" alt="Traditional Kotte Idli steamed in jackfruit leaves" style={{ width: '100%', height: 'auto', display: 'block' }} />
        <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
          Traditional Kotte Kadubu (Idli in jackfruit leaves) served piping hot.
        </div>
      </div>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>Experience It For Yourself</h3>
      <p style={{ marginBottom: '20px' }}>
        We pour our hearts into every meal served. We invite you to step away from the fast-paced world, sit down with your family, and experience what many are calling the <strong>best pure veg restaurant in the whole Udupi region</strong>. Come as a guest, leave as family.
      </p>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          Ready to experience the magic? <Link to="/menu" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Explore our menu</Link> or get directions on our <Link to="/contact" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Contact page</Link>. We can't wait to serve you!
        </p>
      </div>
    </div>
  </div>
);

export default Post5;
