import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Lunch = () => {
  return (
    <>
      <Helmet>
        <title>Best Lunch in Brahmavara | Authentic Meals & Thalis | Mathuram Cafe</title>
        <meta name="description" content="Looking for a satisfying lunch in Brahmavara? Mathuram Cafe serves traditional South Indian banana leaf meals, rich North Indian curries, and Indo-Chinese food." />
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
            <h1 className="gold-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>Best Lunch in Brahmavara</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto' }}>
              From traditional South Indian Thalis to rich North Indian curries, Mathuram Cafe offers the most satisfying and wholesome midday dining experience.
            </p>
          </motion.div>

          <div className="seo-content glass-panel" style={{ padding: '50px', borderRadius: '16px', lineHeight: '1.8' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginBottom: '40px' }}>
              <div style={{ flex: '1 1 400px' }}>
                <h2 className="gold-text" style={{ marginBottom: '20px' }}>A Wholesome Midday Feast</h2>
                <p>
                  When the afternoon hunger sets in and you're searching for a fulfilling, hearty <strong>lunch in Brahmavara</strong>, Mathuram Cafe stands ready to serve. We believe lunch should be a restorative experience—a break from the busy day to sit down, relax in our comfortable AC dining halls, and enjoy a freshly prepared, 100% pure vegetarian meal with family or colleagues.
                </p>
                <p style={{ marginTop: '15px' }}>
                  Our lunchtime menu is meticulously crafted to offer incredible variety. Whether you want a light, quick meal to get you back to work, or a massive, multi-course feast to celebrate a special occasion, our kitchen delivers absolute perfection. Everything is prepared fresh daily, ensuring vibrant flavors and maximum nutritional value.
                </p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <img 
                  src="/assets/Photos/Food/south-indian-meals-brahmavara.webp" 
                  alt="South Indian Meals Lunch in Brahmavara" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
                />
              </div>
            </div>

            <h2 className="gold-text" style={{ marginBottom: '20px' }}>The Traditional South Indian Thali</h2>
            <p>
              The crown jewel of our lunch service is undoubtedly the traditional South Indian Meals (Thali). Served authentically on a banana leaf, this is not just food; it is a cultural experience. Our Thali represents a perfectly balanced diet, featuring steaming hot rice accompanied by a rich, flavorful sambar and a tangy, digestive rasam.
            </p>
            <p style={{ marginTop: '15px' }}>
              But the meal doesn't stop there. It includes multiple seasonal vegetable palyas (stir-fries) that change daily, crispy papad, spicy house-made pickles, and cooling thick curd. We always finish the meal on a sweet note with a traditional dessert like Payasam or Kesari Bath. It is the most authentic, comforting <Link to="/menu" className="gold-text" style={{ textDecoration: 'underline' }}>lunch in Brahmavara</Link>, loved by locals for its home-cooked feel.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', margin: '40px 0' }}>
              <div style={{ flex: '1 1 300px' }}>
                <img 
                  src="/assets/Photos/Food/Panner.webp" 
                  alt="North Indian Paneer Lunch at Mathuram Cafe" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
                />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h2 className="gold-text" style={{ marginBottom: '20px' }}>Rich North Indian & Chinese Options</h2>
                <p>
                  While our roots are deeply South Indian, our culinary expertise extends far beyond. Mathuram Cafe is equally famous for serving spectacular North Indian lunches. If you are craving something rich and indulgent, our creamy Paneer Butter Masala, aromatic Veg Biryani, and soft, buttery Naans are guaranteed to hit the spot. Our chefs use authentic North Indian spices and techniques to ensure absolute perfection.
                </p>
                <p style={{ marginTop: '15px' }}>
                  If you are in the mood for some zest and tang, our Indo-Chinese menu is a massive hit, especially among younger crowds and <Link to="/gallery" className="gold-text" style={{ textDecoration: 'underline' }}>families</Link>. The Veg Fried Rice, spicy Hakka Noodles, and crispy Mushroom Chilli provide a fantastic alternative for a fun, flavorful lunch outing.
                </p>
              </div>
            </div>

            <h2 className="gold-text" style={{ marginBottom: '20px' }}>Perfect for Groups and Travelers</h2>
            <p>
              Located centrally with ample parking space, Mathuram Cafe is the ideal lunch stop for large groups, office teams, and highway travelers passing through the NH66. Our spacious seating allows large parties to sit together comfortably, and our efficient kitchen ensures that even during the busy lunch rush, your food arrives hot and promptly.
            </p>
            <p style={{ marginTop: '15px' }}>
              Don't want to step out? We offer fast, free home delivery for orders above ₹300 within a 3km radius. We are also available on Zomato, so the best lunch in town can be delivered straight to your home or office desk!
            </p>

            <div style={{ marginTop: '50px', padding: '30px', backgroundColor: 'var(--color-background)', borderRadius: '12px', textAlign: 'center' }}>
              <h3 className="gold-text" style={{ marginBottom: '15px' }}>Make Us Your Lunch Destination</h3>
              <p style={{ marginBottom: '25px' }}>
                Whether it's a quick bite or a grand feast, Mathuram Cafe promises a midday meal you won't forget. Drop by today!
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link to="/menu" className="btn btn-primary">Check Out The Menu</Link>
                <Link to="/contact" className="btn btn-secondary">Order on Zomato</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Lunch;
