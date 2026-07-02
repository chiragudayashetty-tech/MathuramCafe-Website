import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCar, FaMotorcycle, FaDirections } from 'react-icons/fa';
import websiteData from '../data/websiteData.json';
import './VisitUs.css';

const VisitUs = () => {
  return (
    <div className="visit-page">
      <div className="container">
        <div className="page-header text-center">
          <h1>Visit Us</h1>
          <p>Experience the authentic taste of South India at Mathuram Cafe.</p>
        </div>

        <div className="visit-content">
          <div className="map-container">
            <iframe 
              title="Mathuram Cafe Location"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mathuram%20Cafe,%20Krishikendra,%20Brahmavara,%20Udupi+(Mathuram%20Cafe)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>

          <div className="info-container">
            <div className="info-box">
              <h2>Location & Hours</h2>
              
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <strong>Address</strong>
                  <p>{websiteData.address}</p>
                </div>
              </div>

              <div className="info-item">
                <FaClock className="info-icon" />
                <div>
                  <strong>Opening Hours</strong>
                  <p>Open Daily: 7:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <div>
                  <strong>Phone</strong>
                  <p><a href={`tel:${websiteData.phone}`}>{websiteData.phone}</a></p>
                </div>
              </div>

              <a 
                href="https://maps.app.goo.gl/u8UTmtSuDWRUdk6Q9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary get-directions-btn"
              >
                <FaDirections style={{ marginRight: '8px' }} /> Get Directions
              </a>
            </div>

            <div className="info-box facilities-box">
              <h2>Our Facilities</h2>
              <ul className="facilities-list">
                <li>
                  <FaCar className="facility-icon" />
                  <span>Spacious Parking Available</span>
                </li>
                <li>
                  <FaMotorcycle className="facility-icon" />
                  <span>Free Delivery above ₹{websiteData.freeDeliveryAbove} (within {websiteData.deliveryRadius})</span>
                </li>
                <li>
                  <strong>AC</strong>
                  <span>Comfortable AC Dining Room</span>
                </li>
                <li>
                  <strong>Veg</strong>
                  <span>100% Pure Vegetarian Kitchen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;
