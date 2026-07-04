import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import websiteData from '../data/websiteData.json';
import menuData from '../data/menu.json';
import reviewsData from '../data/reviews.json';
import { FaLeaf, FaMotorcycle, FaCar, FaSnowflake } from 'react-icons/fa';
import './Home.css';

const VIDEOS = [
  '/assets/Videos/Opening Video.mp4',
  '/assets/Videos/Ghee pudi dosa.mp4',
  '/assets/Videos/Ghee pudi idli.mp4',
  '/assets/Videos/Ghee pudi idli 2.mp4',
  '/assets/Videos/Mens Bajji.mp4',
  '/assets/Videos/Onion dosa.mp4',
  '/assets/Videos/Royal Falooda.mp4',
  '/assets/Videos/Thali.mp4'
];

const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(() => Math.floor(Math.random() * VIDEOS.length));
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % VIDEOS.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      // Attempt to play explicitly to catch any OS-level blocks (like Low Power Mode)
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => {
          console.log('Autoplay blocked by browser/OS (Likely Low Power Mode):', e);
          setAutoplayFailed(true); // Switch to fallback image
        });
      }
    }
  }, [currentVideoIndex]);
  
  const featuredReviews = reviewsData.filter(r => r.featured).slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        {autoplayFailed ? (
          <motion.img 
            src="/assets/Photos/Resturant/family-restaurant-mathuram-cafe-brahmavara.webp"
            alt="Mathuram Cafe"
            className="hero-video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        ) : (
          <motion.video 
            ref={videoRef}
            autoPlay 
            muted 
            playsInline
            onEnded={handleVideoEnded}
            className="hero-video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={VIDEOS[currentVideoIndex]}
          />
        )}
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src="/assets/Brand/logo/White logo.webp" alt="Mathuram Cafe" className="hero-logo" style={{ transform: 'scale(1.5)', marginBottom: '30px' }} />
          <h1 className="hero-tagline gold-text" style={{ fontSize: '1px', opacity: 0, position: 'absolute' }}>Best Pure Veg Restaurant in Brahmavara, Udupi</h1>
          <h2 className="hero-tagline gold-text">{websiteData.tagline}</h2>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">View Menu</Link>
            <a href={websiteData.zomato} target="_blank" rel="noopener noreferrer" className="btn btn-zomato">Order on Zomato</a>
          </div>
        </motion.div>
      </section>

      {/* Quick Info Section */}
      <section className="section quick-info bg-light">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon"><FaLeaf /></div>
              <h3>100% Pure Veg</h3>
              <p>Authentic vegetarian delicacies prepared with care.</p>
            </div>
            <div className="info-card">
              <div className="info-icon"><FaMotorcycle /></div>
              <h3>Home Delivery</h3>
              <p>Free delivery above ₹300 within a {websiteData.deliveryRadius} radius.</p>
            </div>
            <div className="info-card">
              <div className="info-icon"><FaCar /></div>
              <h3>Drive Thru</h3>
              <p>Convenient drive-thru available for quick takeaways.</p>
            </div>
            <div className="info-card">
              <div className="info-icon"><FaSnowflake /></div>
              <h3>AC & Non-AC Dining</h3>
              <p>Comfortable seating options for family and friends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section section">
        <div className="container intro-container">
          <motion.div 
            className="intro-text glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            style={{ padding: '40px', borderRadius: '16px' }}
          >
            <h2 className="gold-text">Vegetarian Restaurant in Brahmavara, Udupi District</h2>
            <p>
              Experience the authentic taste of South India right here at the <strong>best pure veg restaurant in Brahmavara</strong>. 
              Our recipes have been passed down through generations, ensuring every dish 
              is a celebration of traditional flavors and spices.
            </p>
            <p>
              From crispy dosas to our signature degree filter coffee, we bring the 
              rich culinary heritage of Udupi to your table. If you're looking for the perfect <strong>South Indian breakfast</strong> or a relaxing <strong>family dining</strong> experience, Mathuram Cafe is your destination.
            </p>
          </motion.div>
          <motion.div 
            className="intro-image"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <img src="/assets/Photos/Resturant/family-restaurant-mathuram-cafe-brahmavara.webp" alt="Mathuram Cafe Interior" loading="lazy" style={{ borderRadius: '16px', border: '1px solid var(--color-border)' }} />
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="featured-section section">
        <div className="container">
          <motion.h2 
            className="section-title gold-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Signature Dishes
          </motion.h2>
          <div className="dishes-grid">
            {[
              { img: "ghee-podi-idli-udupi.webp", name: "Ghee Podi Thatte Idli", desc: "Soft idlis soaked in ghee and special podi masala." },
              { img: "best-masala-dosa-brahmavara.webp", name: "Ghee Podi Dosa", desc: "Crispy dosa roasted in ghee with our signature podi." },
              { img: "south-indian-meals-brahmavara.webp", name: "South Indian Meals", desc: "A wholesome traditional banana leaf meal experience." },
              { img: "filter-coffee-mathuram-cafe.webp", name: "Filter Coffee", desc: "Authentic Kumbakonam degree filter coffee." }
            ].map((dish, idx) => (
              <motion.div 
                className="dish-card glass-panel" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
              >
                <img src={`/assets/Photos/Food/${dish.img}`} alt={dish.name} loading="lazy" />
                <div className="dish-info">
                  <h3 className="gold-text">{dish.name}</h3>
                  <p>{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="view-all-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '40px' }}
          >
            <Link to="/menu" className="btn btn-secondary">Explore Full Menu</Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="section reviews-preview bg-light">
        <div className="container">
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="reviews-grid">
            {featuredReviews.map((review, idx) => (
              <div key={idx} className="review-card">
                <div className="stars">★★★★★</div>
                <p className="review-text">"{review.review.substring(0, 150)}..."</p>
                <div className="review-author">- {review.name}</div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/reviews" className="btn btn-secondary">Read All Reviews</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card glass-panel">
              <h3 className="gold-text">Is Mathuram Cafe a pure veg restaurant?</h3>
              <p>Yes, we are a 100% pure vegetarian restaurant serving authentic South Indian cuisine.</p>
            </div>
            <div className="faq-card glass-panel">
              <h3 className="gold-text">What are Mathuram Cafe's timings?</h3>
              <p>We are open daily from 7:00 AM to 11:00 PM for breakfast, lunch, and dinner.</p>
            </div>
            <div className="faq-card glass-panel">
              <h3 className="gold-text">Does Mathuram Cafe offer South Indian breakfast?</h3>
              <p>Yes! We serve the best South Indian breakfast in Udupi, including Ghee Podi Idli, Masala Dosa, and Kumbakonam degree filter coffee.</p>
            </div>
            <div className="faq-card glass-panel">
              <h3 className="gold-text">Is there parking available for family dining?</h3>
              <p>Yes, we have ample parking space and both AC and Non-AC seating, making us a great family restaurant in Brahmavara.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
