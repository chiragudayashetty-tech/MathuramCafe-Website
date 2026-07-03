import React from 'react';
import { Link } from 'react-router-dom';

const Post2 = () => (
  <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px', minHeight: '80vh' }}>
    <h1 className="gold-text" style={{ marginBottom: '30px', fontSize: '2.5rem' }}>The Ultimate Guide to South Indian Breakfast in Udupi & Brahmavara</h1>
    
    <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
      <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
        There is simply no better way to start your day than with a hearty, steaming hot <strong>South Indian breakfast</strong>. Udupi is globally famous for its cuisine, but finding that perfect, nostalgic flavor can sometimes be tricky amidst all the commercialized food joints. 
      </p>

      <p style={{ marginBottom: '20px' }}>
        That’s why I want to talk about my recent morning visits to <strong>Mathuram Cafe</strong>. If you are looking for the absolute best breakfast experience in the Udupi and Brahmavara region, you need to add this spot to your morning itinerary.
      </p>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>The Holy Trinity of Breakfast</h3>
      <p style={{ marginBottom: '20px' }}>
        Mathuram Cafe doesn’t just serve breakfast; they elevate it. Here’s what you absolutely must try:
      </p>

      <div style={{ marginBottom: '20px', paddingLeft: '15px', borderLeft: '3px solid var(--color-primary)' }}>
        <h4 style={{ marginBottom: '5px' }}>1. Ghee Podi Thatte Idli</h4>
        <p>Forget standard idlis. These Thatte Idlis are massive, unbelievably soft, and literally melt in your mouth. They generously smother them in pure ghee and their secret spicy 'podi' (gunpowder). It’s a flavor explosion.</p>
      </div>

      <div style={{ marginBottom: '20px', paddingLeft: '15px', borderLeft: '3px solid var(--color-primary)' }}>
        <h4 style={{ marginBottom: '5px' }}>2. Benne Masala Dosa</h4>
        <p>If you love a dosa that is golden-brown and crispy on the outside but soft on the inside, this is it. Cooked with rich butter (benne) and filled with a perfectly spiced potato palya, it sets the standard for how a dosa should taste.</p>
      </div>

      <div style={{ marginBottom: '20px', paddingLeft: '15px', borderLeft: '3px solid var(--color-primary)' }}>
        <h4 style={{ marginBottom: '5px' }}>3. Kumbakonam Degree Filter Coffee</h4>
        <p>You cannot finish a South Indian breakfast without coffee. Their degree filter coffee is brewed to perfection—strong, aromatic, and served piping hot in a traditional dabara set.</p>
      </div>

      <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>Early Bird Gets the Dosa</h3>
      <p style={{ marginBottom: '20px' }}>
        They open bright and early at 7:00 AM, making it the perfect pitstop for travelers on the highway or locals looking for an early bite. The service is brisk, the food is fresh, and the experience is thoroughly satisfying.
      </p>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          Ready for a breakfast treat? <Link to="/contact" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Get directions to Mathuram Cafe here</Link>.
        </p>
      </div>
    </div>
  </div>
);

export default Post2;
