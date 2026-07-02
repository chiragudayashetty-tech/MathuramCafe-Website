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
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaMapMarkerAlt className="icon" />
              <span>{websiteData.address}</span>
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
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {websiteData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
