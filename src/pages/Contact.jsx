import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { SiZomato } from 'react-icons/si';
import websiteData from '../data/websiteData.json';
import socials from '../data/socials.json';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you. Connect with us through any of the channels below.</p>
          </div>

          <div className="contact-grid">
            <a href={`tel:${websiteData.phone}`} className="contact-card">
              <div className="contact-icon phone-icon">
                <FaPhoneAlt />
              </div>
              <h3>Call Us</h3>
              <p>{websiteData.phone}</p>
            </a>

            <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon whatsapp-icon">
                <FaWhatsapp />
              </div>
              <h3>WhatsApp</h3>
              <p>Message us directly</p>
            </a>

            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon instagram-icon">
                <FaInstagram />
              </div>
              <h3>Instagram</h3>
              <p>@mathuram.cafe</p>
            </a>

            <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon facebook-icon">
                <FaFacebookF />
              </div>
              <h3>Facebook</h3>
              <p>Mathuram Cafe</p>
            </a>
            
            <a href={websiteData.zomato} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon zomato-icon">
                <SiZomato />
              </div>
              <h3>Zomato</h3>
              <p>Order Online</p>
            </a>

            <a href="https://maps.app.goo.gl/B9Z229V3jD3s3hRJA" target="_blank" rel="noopener noreferrer" className="contact-card address-card">
              <div className="contact-icon address-icon">
                <FaMapMarkerAlt />
              </div>
              <h3 className="gold-text">Address</h3>
              <p>{websiteData.address}</p>
            </a>
          </div>

          <div className="map-container" style={{ marginTop: '60px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <iframe 
              src="https://maps.google.com/maps?q=Mathuram%20Cafe,%20Lakshmi%20Empire,%20Chantharu,%20Brahmavara,%20Karnataka&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="450" 
              style={{ border: 0, display: 'block' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mathuram Cafe Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
