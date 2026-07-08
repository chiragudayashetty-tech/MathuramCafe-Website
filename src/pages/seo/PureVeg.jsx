import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const PureVeg = () => {
  return (
    <>
      <Helmet>
        <title>Best Pure Veg Restaurant in Brahmavara | Mathuram Cafe</title>
        <meta name="description" content="Looking for the best pure veg restaurant in Brahmavara? Mathuram Cafe offers 100% vegetarian South Indian, North Indian, and Chinese delicacies." />
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
            <h1 className="gold-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>Best Pure Veg Restaurant in Brahmavara</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto' }}>
              Experience the pinnacle of 100% pure vegetarian dining at Mathuram Cafe, where tradition meets taste in the heart of Udupi District.
            </p>
          </motion.div>

          <div className="seo-content glass-panel" style={{ padding: '50px', borderRadius: '16px', lineHeight: '1.8' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginBottom: '40px' }}>
              <div style={{ flex: '1 1 400px' }}>
                <h2 className="gold-text" style={{ marginBottom: '20px' }}>The Benchmark for Pure Vegetarian Food</h2>
                <p>
                  When locals and travelers alike search for the <strong>best pure veg restaurant in Brahmavara</strong>, Mathuram Cafe consistently stands out as the premier destination. In a region deeply rooted in culinary traditions, maintaining a 100% pure vegetarian kitchen isn't just a business model for us—it's a commitment to purity, hygiene, and authentic flavor profiles that have defined Udupi cuisine for centuries.
                </p>
                <p style={{ marginTop: '15px' }}>
                  Our dedication begins before the cooking even starts. We source only the freshest, highest-quality vegetables, lentils, and spices from trusted local vendors. Our strict kitchen protocols ensure that absolutely no non-vegetarian items, cross-contaminants, or artificial additives ever enter our food preparation areas. This unwavering dedication is why families trust us for their daily meals, special occasions, and festive gatherings.
                </p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <img 
                  src="/assets/Photos/Food/south-indian-meals-brahmavara.webp" 
                  alt="Traditional Pure Veg South Indian Meals at Mathuram Cafe" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
                />
              </div>
            </div>

            <h2 className="gold-text" style={{ marginBottom: '20px' }}>A Diverse, 100% Vegetarian Menu</h2>
            <p>
              Being a pure vegetarian restaurant does not mean compromising on variety or taste. At Mathuram Cafe, we have curated an expansive menu that caters to every palate. Whether you are craving a traditional <Link to="/menu" className="gold-text" style={{ textDecoration: 'underline' }}>South Indian breakfast</Link> featuring our famous crispy Masala Dosa and fluffy Ghee Podi Idli, or you're looking for a hearty North Indian lunch with creamy Paneer Butter Masala and Butter Naan, we have it all.
            </p>
            <p style={{ marginTop: '15px' }}>
              We also offer a fantastic selection of vegetarian Indo-Chinese delicacies. Our Veg Fried Rice, Hakka Noodles, and Mushroom Chilli are prepared with authentic sauces and fresh vegetables, offering a delightful twist to your dining experience. Every dish on our menu is a testament to the versatility and richness of vegetarian cuisine.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', margin: '40px 0' }}>
              <div style={{ flex: '1 1 300px' }}>
                <img 
                  src="/assets/Photos/Resturant/Kitchen.webp" 
                  alt="Hygienic Pure Veg Kitchen in Brahmavara" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
                />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h2 className="gold-text" style={{ marginBottom: '20px' }}>Uncompromising Hygiene and Quality</h2>
                <p>
                  As the most trusted pure veg restaurant in Brahmavara, we take immense pride in our state-of-the-art, open-concept kitchen. We believe in complete transparency. Our patrons can witness the hygienic environment where their food is prepared. Our chefs adhere to strict cleanliness standards, utilizing filtered water for cooking and food-grade stainless steel equipment. 
                </p>
                <p style={{ marginTop: '15px' }}>
                  We understand that for our pure vegetarian guests, food safety and spiritual purity are paramount. You can dine with absolute peace of mind knowing that every meal served at Mathuram Cafe adheres to the highest standards of vegetarian integrity.
                </p>
              </div>
            </div>

            <h2 className="gold-text" style={{ marginBottom: '20px' }}>Perfect for Every Occasion</h2>
            <p>
              Whether you are grabbing a quick morning coffee on your way to work, enjoying a leisurely lunch with colleagues, or hosting a large family dinner, Mathuram Cafe provides the perfect setting. We offer both comfortable Air-Conditioned (AC) and well-ventilated Non-AC dining sections to suit your preference. Our spacious <Link to="/gallery" className="gold-text" style={{ textDecoration: 'underline' }}>family restaurant</Link> ambiance ensures that large groups can dine together comfortably without feeling crowded.
            </p>
            <p style={{ marginTop: '15px' }}>
              Additionally, if you prefer to enjoy our pure veg delicacies from the comfort of your home, we offer rapid delivery services throughout Brahmavara and surrounding areas. We have partnered with Zomato for seamless ordering, and we also provide our own dedicated takeaway and drive-thru services for your ultimate convenience.
            </p>

            <div style={{ marginTop: '50px', padding: '30px', backgroundColor: 'var(--color-background)', borderRadius: '12px', textAlign: 'center' }}>
              <h3 className="gold-text" style={{ marginBottom: '15px' }}>Visit Mathuram Cafe Today</h3>
              <p style={{ marginBottom: '25px' }}>
                Discover why we are celebrated as the finest pure veg restaurant in Brahmavara. Join us for a meal that celebrates the true essence of vegetarian cooking.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link to="/menu" className="btn btn-primary">Explore Our Menu</Link>
                <Link to="/contact" className="btn btn-secondary">Get Directions</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PureVeg;
