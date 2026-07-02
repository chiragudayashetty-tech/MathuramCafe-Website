import React from 'react';
import { Link } from 'react-router-dom';
import websiteData from '../data/websiteData.json';
import menuData from '../data/menu.json';
import reviewsData from '../data/reviews.json';
import { FaLeaf, FaMotorcycle, FaCar, FaSnowflake } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  // Find signature dishes
  const signatureDishes = [];
  menuData.menu.forEach(category => {
    category.items.forEach(item => {
      if (item.signatureDish) signatureDishes.push(item);
    });
  });
  
  // Featured reviews
  const featuredReviews = reviewsData.filter(r => r.featured).slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/assets/Videos/Resturant opening video.MP4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <img src="/assets/Brand/logo/White logo.webp" alt="Mathuram Cafe" className="hero-logo" />
          <h1 className="hero-tagline">{websiteData.tagline}</h1>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">View Menu</Link>
            <a href={websiteData.zomato} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Order on Zomato</a>
          </div>
        </div>
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

      {/* Signature Dishes */}
      <section className="section signature-dishes">
        <div className="container">
          <h2 className="section-title">Signature Dishes</h2>
          <div className="dishes-grid">
            <div className="dish-card">
              <img src="/assets/Photos/Food/Ghee Pudi idli.webp" alt="Ghee Podi Idli" loading="lazy" />
              <div className="dish-info">
                <h3>Ghee Podi Thatte Idli</h3>
                <p>Soft idlis soaked in ghee and special podi masala.</p>
              </div>
            </div>
            <div className="dish-card">
              <img src="/assets/Photos/Food/Masala dosa.webp" alt="Masala Dosa" loading="lazy" />
              <div className="dish-info">
                <h3>Ghee Podi Dosa</h3>
                <p>Crispy dosa roasted in ghee with our signature podi.</p>
              </div>
            </div>
            <div className="dish-card">
              <img src="/assets/Photos/Food/south India Meals.webp" alt="South Indian Meals" loading="lazy" />
              <div className="dish-info">
                <h3>South Indian Meals</h3>
                <p>A wholesome traditional banana leaf meal experience.</p>
              </div>
            </div>
            <div className="dish-card">
              <img src="/assets/Photos/Food/Filter Cofee.webp" alt="Filter Coffee" loading="lazy" />
              <div className="dish-info">
                <h3>Filter Coffee</h3>
                <p>Authentic Kumbakonam degree filter coffee.</p>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/menu" className="btn btn-primary">Explore Full Menu</Link>
          </div>
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
    </div>
  );
};

export default Home;
