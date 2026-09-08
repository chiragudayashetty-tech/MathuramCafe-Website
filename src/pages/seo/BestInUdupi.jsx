import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaLeaf, FaCar, FaUtensils, FaClock, FaMapMarkerAlt, FaSnowflake, FaCheckCircle, FaStar } from 'react-icons/fa';

const BestInUdupi = () => {
  return (
    <>
      <Helmet>
        <title>Best Pure Veg Restaurant in Udupi | Authentic Coastal Vegetarian Dining | Mathuram Cafe</title>
        <meta 
          name="description" 
          content="Discover why Mathuram Cafe is rated the best pure veg restaurant in Udupi. Savor authentic South Indian breakfast, traditional banana leaf thalis, degree filter coffee, and North Indian favorites with spacious parking on NH 66." 
        />
        <meta 
          name="keywords" 
          content="best veg restaurant in udupi, pure veg restaurant udupi, top vegetarian restaurants in udupi, authentic udupi cuisine, best breakfast in udupi, udupi banana leaf meals, family restaurant udupi, mathuram cafe udupi" 
        />
      </Helmet>

      <div className="seo-landing-page" style={{ paddingTop: '180px', paddingBottom: '80px', minHeight: '100vh', backgroundColor: 'var(--color-background)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          
          {/* Header Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="seo-header"
            style={{ textAlign: 'center', marginBottom: '45px' }}
          >
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              background: 'rgba(78, 107, 58, 0.12)', 
              color: '#2d451e', 
              border: '1px solid rgba(78, 107, 58, 0.35)',
              padding: '6px 16px', 
              borderRadius: '30px', 
              fontSize: '0.85rem', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              letterSpacing: '0.5px',
              marginBottom: '16px'
            }}>
              <FaLeaf /> 100% Pure Vegetarian Heritage
            </span>
            <h1 className="gold-text" style={{ fontSize: '2.8rem', marginBottom: '18px', lineHeight: '1.25' }}>
              Best Pure Veg Restaurant in Udupi
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-light)', maxWidth: '820px', margin: '0 auto', lineHeight: '1.65' }}>
              Welcome to Mathuram Cafe—the premier culinary destination in Udupi District where centuries-old coastal Brahmin recipes meet modern hygiene, premium ingredients, and warm South Indian hospitality.
            </p>
          </motion.div>

          {/* Quick Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            <div className="glass-panel" style={{ padding: '22px 18px', textAlign: 'center', background: '#fff' }}>
              <div style={{ fontSize: '1.8rem', color: '#4E6B3A', marginBottom: '8px' }}>🌿</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--color-primary)', marginBottom: '4px' }}>100% Pure Veg</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>Zero adulteration, pure desi ghee & fresh local produce</p>
            </div>
            <div className="glass-panel" style={{ padding: '22px 18px', textAlign: 'center', background: '#fff' }}>
              <div style={{ fontSize: '1.8rem', color: '#D4A65A', marginBottom: '8px' }}>🚗</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--color-primary)', marginBottom: '4px' }}>Spacious NH 66 Parking</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>Hassle-free parking for cars, tourist travellers & buses</p>
            </div>
            <div className="glass-panel" style={{ padding: '22px 18px', textAlign: 'center', background: '#fff' }}>
              <div style={{ fontSize: '1.8rem', color: '#4E6B3A', marginBottom: '8px' }}>❄️</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--color-primary)', marginBottom: '4px' }}>AC & Non-AC Dining</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>Comfortable family halls with modern aesthetics</p>
            </div>
            <div className="glass-panel" style={{ padding: '22px 18px', textAlign: 'center', background: '#fff' }}>
              <div style={{ fontSize: '1.8rem', color: '#D4A65A', marginBottom: '8px' }}>☕</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--color-primary)', marginBottom: '4px' }}>Degree Filter Coffee</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>Authentic Kumbakonam brass davarah filter coffee</p>
            </div>
          </div>

          {/* Main Content Article */}
          <div className="glass-panel" style={{ padding: '45px 35px', borderRadius: '16px', lineHeight: '1.85', background: '#fff' }}>
            
            {/* Section 1 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginBottom: '45px' }}>
              <div style={{ flex: '1 1 440px' }}>
                <h2 className="gold-text" style={{ fontSize: '1.9rem', marginBottom: '18px' }}>
                  The Benchmark of Vegetarian Excellence in Udupi
                </h2>
                <p>
                  Udupi has earned worldwide acclaim as the birthplace of South Indian vegetarian dining. From the sacred temple kitchens of <strong>Sri Krishna Matha</strong> to bustling coastal highway eateries, food here is celebrated as a divine craft. At <strong>Mathuram Cafe</strong>, we honor this noble legacy by bringing you the benchmark experience for the <strong>best pure veg restaurant in Udupi</strong>.
                </p>
                <p style={{ marginTop: '14px' }}>
                  Conveniently situated right along <strong>National Highway 66 (Brahmavara)</strong>, just minutes away from Udupi city, Manipal University campus, and Barkur heritage sites, our restaurant is designed as the ultimate pitstop for local foodies, visiting pilgrims, students, and highway road-trippers alike.
                </p>
              </div>
              <div style={{ flex: '1 1 340px' }}>
                <img 
                  src="/assets/Photos/Food/south-indian-meals-brahmavara.webp" 
                  alt="Authentic Traditional South Indian Pure Veg Meal at Mathuram Cafe Udupi" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
                  loading="lazy"
                />
              </div>
            </div>

            <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '35px 0' }} />

            {/* Section 2: What to Eat */}
            <h2 className="gold-text" style={{ fontSize: '1.9rem', marginBottom: '15px' }}>
              Iconic Dishes You Must Experience in Udupi
            </h2>
            <p style={{ marginBottom: '25px' }}>
              Our curated menu celebrates the very best of coastal Karnataka vegetarian traditions alongside flavorful North Indian specialties and Indo-Chinese favorites:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px', marginBottom: '40px' }}>
              
              <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '20px' }}>
                <h3 className="gold-text" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                  🥞 Ghee Podi Masala Dosa
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-light)' }}>
                  Crispy, golden-roasted on a seasoned tawa using pure desi ghee, filled with spiced potato palya, and paired with freshly ground coconut chutneys and rich sambar.
                </p>
              </div>

              <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '20px' }}>
                <h3 className="gold-text" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                  🍚 Thatte Idli & Kotte Idli
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-light)' }}>
                  Steamed to cloud-like perfection in traditional jackfruit leaf moulds (Kotte) or flat plates, drenched in aromatic ghee and spiced podi masala.
                </p>
              </div>

              <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '20px' }}>
                <h3 className="gold-text" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                  🍱 Traditional Banana Leaf Thali
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-light)' }}>
                  A wholesome, unlimited feast featuring steaming hot rice, authentic coastal sambar, pepper rasam, seasonal vegetable palya, kootu, fresh curd, and sweet payasa.
                </p>
              </div>

              <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '20px' }}>
                <h3 className="gold-text" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                  ☕ Kumbakonam Degree Filter Coffee
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-light)' }}>
                  Brewed with freshly roasted premium beans, thick milk, and served frothing hot in traditional brass davarah. The undisputed pride of South Indian hospitality.
                </p>
              </div>

              <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '20px' }}>
                <h3 className="gold-text" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                  🍨 Coastal Gudbud Ice Cream
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-light)' }}>
                  Layered with premium ice creams, fresh fruits, nuts, jelly, and syrups. The legendary coastal Karnataka dessert that beats the tropical heat.
                </p>
              </div>

              <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '20px' }}>
                <h3 className="gold-text" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                  🫓 North Indian & Paneer Delights
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-light)' }}>
                  Tandoor-baked Butter Naans, rich Paneer Butter Masala, Veg Biryani, and crispy starters crafted strictly in our 100% vegetarian kitchen.
                </p>
              </div>
            </div>

            {/* Section 3: Hygiene & Ambience */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', margin: '40px 0' }}>
              <div style={{ flex: '1 1 340px' }}>
                <img 
                  src="/assets/Photos/Resturant/family-restaurant-mathuram-cafe-brahmavara.webp" 
                  alt="Spacious AC Family Dining Hall at Mathuram Cafe Udupi" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
                  loading="lazy"
                />
              </div>
              <div style={{ flex: '1 1 440px' }}>
                <h2 className="gold-text" style={{ fontSize: '1.9rem', marginBottom: '18px' }}>
                  Why Families & Tourists Choose Mathuram Cafe
                </h2>
                <ul style={{ paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Uncompromised Kitchen Hygiene:</strong> Open-concept, immaculate food prep areas utilizing RO-purified water and food-grade stainless steel cookware.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Direct Highway Access on NH 66:</strong> Avoid congested city traffic and narrow temple lanes—pull directly into our spacious premises.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Clean & Sanitized Restrooms:</strong> Regularly maintained, hygienic washrooms for families traveling with elderly parents and children.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Express Drive-Thru & Home Delivery:</strong> Quick takeaways for road-trippers and fast doorstep delivery within Brahmavara and surrounding Udupi localities.
                  </li>
                </ul>
              </div>
            </div>

            <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '40px 0' }} />

            {/* FAQ Section */}
            <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
              Frequently Asked Questions (FAQ)
            </h2>
            
            <div style={{ display: 'grid', gap: '18px', marginBottom: '40px' }}>
              <div style={{ background: '#fdfaf6', padding: '20px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '6px' }}>
                  Is Mathuram Cafe 100% pure vegetarian?
                </h3>
                <p style={{ color: 'var(--color-text-light)', margin: 0 }}>
                  Yes, absolutely. We operate a strictly 100% pure vegetarian kitchen with zero non-vegetarian items, artificial preservatives, or cross-contamination.
                </p>
              </div>

              <div style={{ background: '#fdfaf6', padding: '20px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '6px' }}>
                  What are Mathuram Cafe's operating hours?
                </h3>
                <p style={{ color: 'var(--color-text-light)', margin: 0 }}>
                  We are open daily from <strong>7:00 AM to 11:00 PM</strong>, serving fresh breakfast, traditional lunch thalis, evening tea & snacks, and full family dinners.
                </p>
              </div>

              <div style={{ background: '#fdfaf6', padding: '20px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '6px' }}>
                  Is there ample parking available for large vehicles and buses?
                </h3>
                <p style={{ color: 'var(--color-text-light)', margin: 0 }}>
                  Yes! We offer a large, dedicated highway parking lot directly accessible from NH 66, accommodating cars, SUVs, tempo travellers, and tourist buses.
                </p>
              </div>

              <div style={{ background: '#fdfaf6', padding: '20px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '6px' }}>
                  Where is Mathuram Cafe located?
                </h3>
                <p style={{ color: 'var(--color-text-light)', margin: 0 }}>
                  We are located directly on the <strong>NH 66 Highway at Brahmavara, Udupi District, Karnataka</strong>—a smooth 10-minute drive north of Udupi city center and Sri Krishna Matha.
                </p>
              </div>
            </div>

            {/* High-Converting CTA Box */}
            <div style={{ 
              background: 'linear-gradient(135deg, #fdf8f0 0%, #f7ece0 100%)', 
              border: '2px solid var(--color-secondary)', 
              padding: '35px 25px', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h3 className="gold-text" style={{ fontSize: '1.65rem', marginBottom: '10px' }}>
                Taste the Authentic Heart of Udupi Today!
              </h3>
              <p style={{ maxWidth: '650px', margin: '0 auto 22px', color: 'var(--color-text)', fontSize: '1.05rem' }}>
                Join thousands of happy families, food lovers, and travelers who make Mathuram Cafe their favorite vegetarian destination in coastal Karnataka.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '1rem' }}>
                  <FaUtensils style={{ marginRight: '8px' }} /> View Food Menu
                </Link>
                <a 
                  href="https://maps.app.goo.gl/u8UTmtSuDWRUdk6Q9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{ padding: '12px 26px', fontSize: '1rem' }}
                >
                  <FaMapMarkerAlt style={{ marginRight: '8px' }} /> Get Google Maps Directions
                </a>
                <Link to="/wall-of-fame" className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '1rem', background: '#4E6B3A', borderColor: '#4E6B3A', color: '#fff' }}>
                  <FaStar style={{ marginRight: '8px' }} /> See Our Esteemed Guests
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default BestInUdupi;
