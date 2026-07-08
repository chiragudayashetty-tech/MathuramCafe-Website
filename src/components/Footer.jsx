import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import websiteData from '../data/websiteData.json';
import socials from '../data/socials.json';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section brand-section">
          <img src="/assets/Brand/logo/White logo.webp" alt="Mathuram Cafe Logo" className="footer-logo" />
          <p className="tagline">{websiteData.tagline}</p>
          <div className="social-links">
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaMapMarkerAlt className="icon" />
              <a href="https://maps.app.goo.gl/u8UTmtSuDWRUdk6Q9" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>
                {websiteData.address}
              </a>
            </li>
            <li>
              <FaPhoneAlt className="icon" />
              <a href={`tel:${websiteData.phone}`}>{websiteData.phone}</a>
            </li>
            <li>
              <FaClock className="icon" />
              <span>Open Daily: 7:00 AM - 11:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-seo" style={{ borderTop: '1px solid var(--color-border)', marginTop: '20px', paddingTop: '20px', textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
        <div className="container">
          <p style={{ lineHeight: '2' }}>
            <Link to="/best-pure-veg-restaurant-in-brahmavara">Best Pure Veg Restaurant in Brahmavara</Link> |{' '}
            <Link to="/south-indian-restaurant-in-brahmavara">South Indian Restaurant in Brahmavara</Link> |{' '}
            <Link to="/family-restaurant-in-brahmavara">Family Restaurant in Brahmavara</Link> |{' '}
            <Link to="/breakfast-in-brahmavara">Breakfast in Brahmavara</Link> |{' '}
            <Link to="/lunch-in-brahmavara">Lunch in Brahmavara</Link>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {websiteData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
