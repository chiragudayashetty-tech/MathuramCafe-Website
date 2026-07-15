import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const SouthIndian = () => {
  return (
    <>
      <Helmet>
        <title>Authentic South Indian Restaurant in Brahmavara | Mathuram Cafe</title>
        <meta name="description" content="Craving authentic South Indian food? Mathuram Cafe is the premier South Indian restaurant in Brahmavara, serving iconic dosas, idlis, and meals." />
      </Helmet>

      <div className="seo-landing-page" style={{ paddingTop: '180px', paddingBottom: '80px', minHeight: '100vh' }}>
        <div className="container">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="seo-header"
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <h1 className="gold-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>Authentic South Indian Restaurant in Brahmavara</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto' }}>
              Savor the rich, traditional flavors of Udupi at Mathuram Cafe, the ultimate destination for authentic South Indian cuisine.
            </p>
          </motion.div>

          <div className="seo-content glass-panel" style={{ padding: '50px', borderRadius: '16px', lineHeight: '1.8' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginBottom: '40px' }}>
              <div style={{ flex: '1 1 400px' }}>
                <h2 className="gold-text" style={{ marginBottom: '20px' }}>The Heart of South Indian Flavors</h2>
                <p>
                  When you step into Mathuram Cafe, you are stepping into a culinary heritage that spans generations. As the leading <strong>South Indian restaurant in Brahmavara</strong>, we are deeply committed to preserving the authentic taste, texture, and aroma of traditional Udupi cuisine. Our recipes are not just instructions; they are closely guarded secrets passed down through skilled culinary masters who understand the delicate balance of spices, tamarind, jaggery, and freshly grated coconut.
                </p>
                <p style={{ marginTop: '15px' }}>
                  South Indian cuisine is celebrated globally for its incredible diversity and health benefits, primarily relying on fermented rice and lentil batters. Here at Mathuram Cafe, we take this tradition seriously. Every batter is freshly ground daily on our premises, ensuring that your idlis are cloud-soft and your dosas possess that perfect, golden crispness that you crave.
                </p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <img 
                  src="/assets/Photos/Food/best-masala-dosa-brahmavara.webp" 
                  alt="Crispy Masala Dosa at Mathuram Cafe, Brahmavara" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
                />
              </div>
            </div>

            <h2 className="gold-text" style={{ marginBottom: '20px' }}>Iconic Dosas and Idlis</h2>
            <p>
              No South Indian restaurant in Brahmavara is complete without a stellar breakfast lineup. Our menu boasts an impressive array of iconic dishes. The undeniable star of the show is our signature <strong>Masala Dosa</strong>. Roasted to perfection in generous amounts of pure ghee, stuffed with a mildly spiced, flavorful potato palya, and served with a variety of freshly ground chutneys and piping hot sambar, it is a culinary masterpiece.
            </p>
            <p style={{ marginTop: '15px' }}>
              For those who prefer a softer, comforting meal, our <Link to="/menu" className="gold-text" style={{ textDecoration: 'underline' }}>Ghee Podi Thatte Idli</Link> is a must-try. These oversized, incredibly fluffy idlis are generously coated in our special house-made spice powder (podi) and drizzled with hot ghee. We also serve authentic Neer Dosa, Kotte Kadubu (idli steamed in jackfruit leaves), and crispy Medu Vada, ensuring every morning starts on a delicious note.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', margin: '40px 0' }}>
              <div style={{ flex: '1 1 300px' }}>
                <img 
                  src="/assets/Photos/Food/filter-coffee-mathuram-cafe.webp" 
                  alt="Authentic Degree Filter Coffee at Mathuram Cafe, Udupi" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
                />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h2 className="gold-text" style={{ marginBottom: '20px' }}>The Kumbakonam Degree Filter Coffee Experience</h2>
                <p>
                  A South Indian meal is simply incomplete without a strong, frothy cup of filter coffee. At Mathuram Cafe, we serve authentic Kumbakonam-style degree coffee. We source premium coffee beans, freshly roasted and ground, and brew the decoction slowly to extract the maximum flavor and aroma. 
                </p>
                <p style={{ marginTop: '15px' }}>
                  Served traditionally in a brass davara and tumbler, our filter coffee provides the perfect robust finish to your meal. The theatrical pouring from a height not only mixes the decoction and pure cow's milk perfectly but also creates that signature layer of foam that coffee lovers in Brahmavara simply adore.
                </p>
              </div>
            </div>

            <h2 className="gold-text" style={{ marginBottom: '20px' }}>The Ultimate South Indian Meals (Thali)</h2>
            <p>
              When lunchtime arrives, our South Indian restaurant transforms into a haven for Thali lovers. Our traditional banana leaf meals represent the complete spectrum of South Indian flavors—sweet, sour, spicy, and salty. A typical meal at Mathuram Cafe includes steaming hot rice, hearty sambar, tangy rasam, multiple freshly prepared vegetable palyas (stir-fries), papad, pickle, thick curd, and a traditional sweet dish to round off the experience.
            </p>
            <p style={{ marginTop: '15px' }}>
              Whether you are a local resident or a traveler passing through the NH66 highway, stopping at Mathuram Cafe guarantees you a genuinely authentic, deeply satisfying <Link to="/about" className="gold-text" style={{ textDecoration: 'underline' }}>pure veg dining experience</Link>. Our commitment to traditional South Indian culinary arts makes us a beloved landmark in the district.
            </p>

            <div style={{ marginTop: '50px', padding: '30px', backgroundColor: 'var(--color-background)', borderRadius: '12px', textAlign: 'center' }}>
              <h3 className="gold-text" style={{ marginBottom: '15px' }}>Experience the Taste of Tradition</h3>
              <p style={{ marginBottom: '25px' }}>
                Craving a crispy dosa or a comforting South Indian Thali? Visit Mathuram Cafe today and indulge in the finest traditional cuisine Brahmavara has to offer.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link to="/menu" className="btn btn-primary">View Full Menu</Link>
                <Link to="/contact" className="btn btn-secondary">Find Us on Map</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SouthIndian;
