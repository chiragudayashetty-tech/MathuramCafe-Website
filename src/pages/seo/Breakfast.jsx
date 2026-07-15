import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Breakfast = () => {
  return (
    <>
      <Helmet>
        <title>Best Breakfast in Brahmavara | Authentic South Indian Morning Meals</title>
        <meta name="description" content="Start your morning right with the best breakfast in Brahmavara at Mathuram Cafe. We serve hot, fresh Ghee Podi Idli, Masala Dosa, and authentic filter coffee." />
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
            <h1 className="gold-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>Best Breakfast in Brahmavara</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto' }}>
              Wake up to the irresistible aroma of roasted ghee and fresh filter coffee. Mathuram Cafe is your ultimate morning destination for a wholesome South Indian breakfast.
            </p>
          </motion.div>

          <div className="seo-content glass-panel" style={{ padding: '50px', borderRadius: '16px', lineHeight: '1.8' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginBottom: '40px' }}>
              <div style={{ flex: '1 1 400px' }}>
                <h2 className="gold-text" style={{ marginBottom: '20px' }}>A Morning Tradition in Udupi</h2>
                <p>
                  Breakfast is arguably the most important, and undoubtedly the most delicious, meal of the day in South Indian culture. If you are searching for the very <strong>best breakfast in Brahmavara</strong>, Mathuram Cafe offers a morning experience that locals swear by. We open our doors early, filling the air with the scent of freshly ground chutneys, simmering sambar, and rich, roasted coffee beans.
                </p>
                <p style={{ marginTop: '15px' }}>
                  Our kitchen staff begins preparations before dawn. We believe that a great breakfast requires fresh ingredients and zero shortcuts. Our dosa and idli batters are naturally fermented overnight, ensuring they are light, airy, and easily digestible—providing you with the perfect, healthy energy boost to start your day in the Udupi district.
                </p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <img 
                  src="/assets/Photos/Food/ghee-podi-idli-udupi.webp" 
                  alt="Ghee Podi Idli Breakfast at Mathuram Cafe, Brahmavara" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
                />
              </div>
            </div>

            <h2 className="gold-text" style={{ marginBottom: '20px' }}>Our Star Morning Dishes</h2>
            <p>
              While our entire morning <Link to="/menu" className="gold-text" style={{ textDecoration: 'underline' }}>pure veg menu</Link> is beloved, a few standout items have made us famous across Brahmavara. Our <strong>Ghee Podi Thatte Idli</strong> is legendary—a plate-sized, pillowy soft idli generously slathered with our house-secret spicy podi and drenched in pure, aromatic ghee. It melts in your mouth and pairs perfectly with our mild, coconut-rich chutney.
            </p>
            <p style={{ marginTop: '15px' }}>
              For those who prefer a crunch, our classic <strong>Masala Dosa</strong> is roasted to a perfect golden brown, maintaining a crispy exterior while hiding a flavorful potato masala inside. We also serve specialized local favorites like Neer Dosa (delicate, lacy rice crepes), Kotte Kadubu (idli steamed in aromatic jackfruit leaves), and crispy Medu Vada that is crunchy on the outside and wonderfully fluffy on the inside.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', margin: '40px 0' }}>
              <div style={{ flex: '1 1 300px' }}>
                <img 
                  src="/assets/Photos/Food/Masala Dose and filter Cofee.webp" 
                  alt="Masala Dosa and Filter Coffee Breakfast at Mathuram Cafe, Brahmavara" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
                />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h2 className="gold-text" style={{ marginBottom: '20px' }}>The Essential Filter Coffee</h2>
                <p>
                  No breakfast in Brahmavara is truly complete without the iconic South Indian Filter Coffee. At Mathuram Cafe, we take our coffee seriously. We brew authentic Kumbakonam degree coffee using freshly roasted premium beans. The decoction is thick and potent, mixed flawlessly with boiling hot, pure milk. 
                </p>
                <p style={{ marginTop: '15px' }}>
                  The result is a frothy, robust cup of coffee served in a traditional brass davara and tumbler. It is the perfect beverage to wash down a spicy dosa or a ghee-laden idli, leaving you refreshed, alert, and ready to tackle the day ahead.
                </p>
              </div>
            </div>

            <h2 className="gold-text" style={{ marginBottom: '20px' }}>Fast Service & Drive-Thru Convenience</h2>
            <p>
              We understand that mornings are often rushed. Whether you are dropping the kids off at school or hurrying to the office, Mathuram Cafe ensures you don't have to skip a healthy breakfast. Our attentive staff guarantees incredibly fast table service without compromising on the quality or temperature of your food.
            </p>
            <p style={{ marginTop: '15px' }}>
              On the go? Take advantage of our convenient Drive-Thru service! You can pick up neatly packed, hot breakfast parcels right from the comfort of your car. It's the fastest way to grab the best breakfast in town when you are traveling along the NH66 highway.
            </p>

            <div style={{ marginTop: '50px', padding: '30px', backgroundColor: 'var(--color-background)', borderRadius: '12px', textAlign: 'center' }}>
              <h3 className="gold-text" style={{ marginBottom: '15px' }}>Join Us Tomorrow Morning!</h3>
              <p style={{ marginBottom: '25px' }}>
                Start your day the right way. We are open early and ready to serve you the freshest, most authentic South Indian breakfast in Brahmavara.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link to="/about" className="btn btn-primary">Learn About Us</Link>
                <Link to="/contact" className="btn btn-secondary">Get Directions</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Breakfast;
