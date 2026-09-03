import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRoad, 
  FaCarSide, 
  FaParking, 
  FaRestroom, 
  FaCoffee, 
  FaUtensils, 
  FaSnowflake, 
  FaClock, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaStar,
  FaDirections,
  FaRoute,
  FaCompass
} from 'react-icons/fa';
import './Post9RoadTrip.css';

const Post9 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const milestones = [
    { city: "Mangalore", km: "KM 0", status: "Start" },
    { city: "Kaup", km: "KM 40", status: "Pass" },
    { city: "Udupi", km: "KM 55", status: "Darshan" },
    { city: "Brahmavara (Mathuram)", km: "KM 65", status: "Featured Oasis", highlight: true },
    { city: "Maravanthe", km: "KM 105", status: "Scenic Sea Drive" },
    { city: "Murudeshwar", km: "KM 160", status: "Temple & Beach" },
    { city: "Gokarna / Goa", km: "KM 360", status: "Destination" }
  ];

  const travelOrderTimes = [
    {
      time: "6:30 AM – 10:30 AM",
      badge: "Breakfast Rush",
      icon: "☕",
      title: "The Early Highway Fuel",
      description: "Steaming Ghee Podi Thatte Idli with dual chutneys, crispy golden Masala Dosa, hot Medu Vada, and authentic Kumbakonam Degree Filter Coffee.",
      actionText: "Order Breakfast Combo"
    },
    {
      time: "12:00 PM – 3:30 PM",
      badge: "Lunch Feasts",
      icon: "🍱",
      title: "Traditional Coastal Banana Leaf Meals",
      description: "Wholesome unlimited South Indian Thali with steaming rice, Udupi sambar, pepper rasam, vegetable palya, kootu, fresh buttermilk, and sweet payasa.",
      actionText: "View Thali Specials"
    },
    {
      time: "4:00 PM – 7:00 PM",
      badge: "Evening Refreshment",
      icon: "🍟",
      title: "Chai, Crispy Bajjis & Gudbud",
      description: "Hot crispy Mangalore Bajjis / Onion Bajjis, degree filter coffee, tea, and our famous coastal Gudbud Ice Cream to beat highway fatigue.",
      actionText: "See Evening Snacks"
    },
    {
      time: "7:30 PM – 11:00 PM",
      badge: "Dinner Pitstop",
      icon: "🍛",
      title: "Family Dinner & Express Parcel",
      description: "Butter Naan with rich Paneer Butter Masala, Veg Biryani, Hakka Noodles, or quick drive-thru parcel for your overnight journey.",
      actionText: "Explore Dinner Menu"
    }
  ];

  return (
    <div className="road-trip-container">
      <Helmet>
        <title>Mangalore to Murudeshwar & Goa Road Trip: Best Pure Veg Highway Pitstops on NH 66</title>
        <meta 
          name="description" 
          content="Driving the coastal NH 66 from Mangalore to Murudeshwar or Bangalore to Goa? Discover the top pure veg highway restaurant with massive parking, clean restrooms, and authentic Udupi food." 
        />
        <meta 
          name="keywords" 
          content="nh 66 restaurants with parking, bangalore to goa road trip food stop, mangalore to kundapur highway breakfast, best stop for tea breakfast nh66 udupi, pure veg restaurant nh66, brahmavara highway restaurant, mathuram cafe brahmavara" 
        />
      </Helmet>

      <div className="container" style={{ maxWidth: '920px' }}>
        
        {/* Highway HUD Hero Header */}
        <motion.div 
          className="highway-hud"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="road-badge-row">
            <span className="road-badge">
              <FaRoad /> NH 66 Coastal Highway Guide
            </span>
            <span className="road-badge gold">
              <FaCompass /> 2026 Road Trip Edition
            </span>
            <span className="road-badge blue">
              <FaCarSide /> 100% Pure Veg Pitstops
            </span>
          </div>

          <h1 className="highway-title gold-text">
            Mangalore to Murudeshwar & Goa Road Trip: The Best Pure Veg Highway Pitstops on NH 66
          </h1>

          <p className="highway-subtitle">
            Cruising the Arabian Sea coastline along National Highway 66? From pristine beaches to historic temple detours, here is the driver's ultimate food trail—featuring zero-detour access, spacious parking, clean restrooms, and authentic coastal vegetarian delicacies.
          </p>

          {/* Interactive Road Milestone Bar */}
          <div className="highway-milestone-bar">
            <div className="milestones-title">
              <FaRoute /> NH 66 Highway Milestones & Distance Tracker
            </div>
            
            <div className="milestones-track">
              {milestones.map((m, idx) => (
                <motion.div 
                  key={idx}
                  className={`milestone-stop ${m.highlight ? 'highlight' : ''}`}
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="milestone-dot">
                    {m.highlight ? '★' : idx + 1}
                  </div>
                  <div className="milestone-label">{m.city}</div>
                  <div className="milestone-km">{m.km}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Road Trip Amenities Checklist */}
        <motion.div 
          className="highway-amenities-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="amenity-card">
            <span className="amenity-icon">🚗</span>
            <div className="amenity-title">Expansive Parking</div>
            <div className="amenity-sub">Wide spaces for SUVs, tempo travellers & buses</div>
          </div>
          <div className="amenity-card">
            <span className="amenity-icon">🚻</span>
            <div className="amenity-title">Spotless Restrooms</div>
            <div className="amenity-sub">Clean, hygienic sanitation for families</div>
          </div>
          <div className="amenity-card">
            <span className="amenity-icon">❄️</span>
            <div className="amenity-title">AC Dining Hall</div>
            <div className="amenity-sub">Cool off from coastal humidity & highway heat</div>
          </div>
          <div className="amenity-card">
            <span className="amenity-icon">⚡</span>
            <div className="amenity-title">Express Highway Service</div>
            <div className="amenity-sub">Hot food served fast to keep you on schedule</div>
          </div>
        </motion.div>

        {/* Main Road Trip Content & Checkpoints */}
        <article className="road-post-article">
          
          <p style={{ fontSize: '1.15rem', marginBottom: '25px' }}>
            The <strong>National Highway 66 (NH 66)</strong> stretch connecting <strong>Mangalore, Udupi, Kundapur, Murudeshwar, and Goa</strong> is celebrated as one of India's most scenic road trip corridors. With coconut groves on your right and the azure Arabian Sea playing peek-a-boo on your left, it’s a dream drive for road-trippers, bikers, and families traveling from Bangalore, Mumbai, or Kerala.
          </p>

          <p style={{ marginBottom: '30px' }}>
            However, any experienced traveler knows that a great road trip can quickly turn stressful if you get stuck in cramped city-center traffic searching for food, or pull over at a spot with unhygienic washrooms and zero parking. 
            Here is your mile-by-mile highway pitstop itinerary.
          </p>

          {/* Animated Road Timeline */}
          <div className="road-timeline">
            
            {/* Checkpoint 1 */}
            <motion.div 
              className="timeline-checkpoint"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="checkpoint-pin"></div>
              <div className="checkpoint-card">
                <div className="checkpoint-header">
                  <h3 className="gold-text" style={{ fontSize: '1.4rem', margin: 0 }}>
                    1. Mangalore & Surathkal Kickoff (KM 0 – KM 35)
                  </h3>
                  <span className="checkpoint-km-badge">KM 0 - 35</span>
                </div>
                <p>
                  Departing Mangalore early in the morning allows you to beat local commercial traffic around Surathkal and Mulki. As you glide past the Pavanje and Shambhavi river bridges, keep your speed steady on the 4-lane expressway.
                </p>
                <div className="road-signboard">
                  <div className="road-sign-header">Highway Navigation Note</div>
                  <div className="road-sign-content">
                    <span>Avoid Udupi City Congestion</span>
                    <span>➔ Stay on NH 66 Flyover</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                  <em>Pro Tip:</em> Many travelers make the mistake of driving into narrow Udupi city streets for breakfast, wasting 45–60 minutes in temple traffic and parking queues. Instead, stay on the highway bypass and proceed 10 minutes further north to Brahmavara.
                </p>
              </div>
            </motion.div>

            {/* Checkpoint 2: The Spotlight (Mathuram Cafe) */}
            <motion.div 
              className="timeline-checkpoint"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="checkpoint-pin" style={{ background: 'var(--color-primary)', borderColor: '#fff' }}></div>
              <div className="checkpoint-card featured-stop">
                <div className="checkpoint-header">
                  <div>
                    <span style={{ color: '#27ae60', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      ★ Primary Recommended Pitstop
                    </span>
                    <h3 className="gold-text" style={{ fontSize: '1.75rem', marginTop: '4px', marginBottom: '0' }}>
                      2. Mathuram Cafe, Brahmavara (KM 65)
                    </h3>
                  </div>
                  <span className="checkpoint-km-badge" style={{ background: '#27ae60', color: '#fff' }}>
                    KM 65 (Ideal Pitstop)
                  </span>
                </div>

                <p style={{ fontSize: '1.05rem', margin: '15px 0' }}>
                  Positioned right on the main highway at Brahmavara, <strong>Mathuram Cafe</strong> is specifically designed to meet the high standards of long-distance road-trippers, pilgrims, and highway travelers.
                </p>

                {/* Restaurant & Parking Visual */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px', margin: '20px 0' }}>
                  <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <img 
                      src="/assets/Photos/Resturant/parking .webp" 
                      alt="Spacious dedicated vehicle parking at Mathuram Cafe NH 66 Brahmavara" 
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                      loading="lazy"
                    />
                    <div style={{ padding: '6px 10px', background: 'rgba(0,0,0,0.6)', fontSize: '0.8rem', color: '#ccc' }}>
                      Hassle-free parking right off the highway
                    </div>
                  </div>
                  <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <img 
                      src="/assets/Photos/Food/Masala Dose and filter Cofee.webp" 
                      alt="Fresh Masala Dosa and Kumbakonam Degree Filter Coffee" 
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                      loading="lazy"
                    />
                    <div style={{ padding: '6px 10px', background: 'rgba(0,0,0,0.6)', fontSize: '0.8rem', color: '#ccc' }}>
                      Crispy Ghee Dosas & authentic Filter Coffee
                    </div>
                  </div>
                </div>

                <h4 className="gold-text" style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px' }}>
                  Why Travelers Rate Mathuram Cafe as the #1 NH-66 Pitstop:
                </h4>
                <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>Direct Highway Access:</strong> No tricky turns or inner-lane navigation; pull straight into our parking lot from NH 66.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>100% Pure Veg & Sattvic Friendly:</strong> Authentic Udupi Brahmin recipes, zero adulteration, pure desi ghee, and fresh coconut chutneys.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>Fast Drive-Thru & Takeaway Window:</strong> In a rush to catch the sunset at Maravanthe? Grab hot idlis, coffee, and snack boxes in under 5 minutes.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>Cooling AC Family Lounge:</strong> Recharge in comfort away from highway noise and coastal humidity.
                  </li>
                </ul>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                  <Link to="/menu" className="btn btn-primary" style={{ padding: '10px 22px' }}>
                    View Highway Menu
                  </Link>
                  <a 
                    href="https://maps.app.goo.gl/u8UTmtSuDWRUdk6Q9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                    style={{ padding: '10px 22px' }}
                  >
                    <FaDirections style={{ marginRight: '6px' }} /> Open GPS Route
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Checkpoint 3 */}
            <motion.div 
              className="timeline-checkpoint"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="checkpoint-pin"></div>
              <div className="checkpoint-card">
                <div className="checkpoint-header">
                  <h3 className="gold-text" style={{ fontSize: '1.4rem', margin: 0 }}>
                    3. The Legendary Maravanthe Beach Drive (KM 105)
                  </h3>
                  <span className="checkpoint-km-badge">KM 105</span>
                </div>
                <p>
                  35 km north of Brahmavara lies the world-famous <strong>Maravanthe Beach highway stretch</strong>—where NH 66 runs wedged directly between the crashing waves of the Arabian Sea on the left and the calm Souparnika River on the right.
                </p>
                <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '15px 0' }}>
                  <img 
                    src="/assets/Photos/Food/Gudbud Icecream.webp" 
                    alt="Famous Coastal Gudbud Ice Cream for Road Trip Refreshment" 
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
                    loading="lazy"
                  />
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                  <em>Road Trip Tip:</em> Grab a takeaway parcel of Mathuram Cafe's signature <strong>Gudbud Ice Cream</strong> or chilled juices before leaving Brahmavara so you can enjoy a refreshing dessert while watching the Maravanthe sunset!
                </p>
              </div>
            </motion.div>

            {/* Checkpoint 4 */}
            <motion.div 
              className="timeline-checkpoint"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="checkpoint-pin"></div>
              <div className="checkpoint-card">
                <div className="checkpoint-header">
                  <h3 className="gold-text" style={{ fontSize: '1.4rem', margin: 0 }}>
                    4. Murudeshwar, Gokarna & South Goa (KM 160 – KM 360)
                  </h3>
                  <span className="checkpoint-km-badge">KM 160 - 360</span>
                </div>
                <p>
                  From Maravanthe, the road takes you seamlessly past <strong>Baindur</strong> into <strong>Murudeshwar</strong> (home to the colossal Lord Shiva statue and Raja Gopura). Continuing further north on the scenic 4-lane highway brings you to the sacred beaches of <strong>Gokarna</strong> and straight into <strong>South Goa (Canacona/Palolem)</strong>.
                </p>
              </div>
            </motion.div>

          </div>

          <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '40px 0' }} />

          {/* Highway Pitstop Feature Comparison */}
          <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>
            City Detour vs. Highway Oasis: Why Smart Drivers Choose Mathuram Cafe
          </h2>
          <p style={{ marginBottom: '20px' }}>
            Here is a quick comparison for drivers planning their Bangalore-Goa or Mangalore-Murudeshwar highway itinerary:
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table className="pitstop-comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Typical City Center Restaurant</th>
                  <th>Mathuram Cafe (NH 66 Brahmavara)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Highway Accessibility</strong></td>
                  <td>❌ Requires 20-30 min inner city detour</td>
                  <td>✅ <span style={{ color: '#27ae60', fontWeight: 'bold' }}>Direct NH 66 roadside access</span></td>
                </tr>
                <tr>
                  <td><strong>Parking Capacity</strong></td>
                  <td>❌ Congested roadside / paid lots</td>
                  <td>✅ <span style={{ color: '#27ae60', fontWeight: 'bold' }}>Dedicated spacious parking lot</span></td>
                </tr>
                <tr>
                  <td><strong>Restrooms</strong></td>
                  <td>❌ Often small & crowded</td>
                  <td>✅ <span style={{ color: '#27ae60', fontWeight: 'bold' }}>Clean, hygienic & sanitized</span></td>
                </tr>
                <tr>
                  <td><strong>Dining Ambience</strong></td>
                  <td>❌ Noisy city setting</td>
                  <td>✅ <span style={{ color: '#27ae60', fontWeight: 'bold' }}>Spacious AC & Non-AC family hall</span></td>
                </tr>
                <tr>
                  <td><strong>Authentic Udupi Taste</strong></td>
                  <td>⚠️ Varies greatly</td>
                  <td>✅ <span style={{ color: '#27ae60', fontWeight: 'bold' }}>100% Traditional Pure Vegetarian</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '40px 0' }} />

          {/* What to Order Based on Your Travel Timing */}
          <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>
            What to Order Based on Your Travel Schedule
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Whether you are making a brisk early morning sprint or a leisurely holiday drive, here is our chef's recommended highway menu:
          </p>

          <div className="time-order-grid">
            {travelOrderTimes.map((item, idx) => (
              <motion.div 
                key={idx}
                className="time-order-card"
                whileHover={{ y: -5 }}
              >
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', background: 'rgba(212,175,55,0.2)', color: '#f1c40f', padding: '3px 8px', borderRadius: '4px' }}>
                  {item.badge}
                </span>
                <h4 style={{ marginTop: '10px' }}>
                  <span>{item.icon}</span> {item.title}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '8px' }}>
                  <FaClock style={{ marginRight: '5px' }} /> {item.time}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* High Conversion Highway CTA Box */}
          <div className="road-cta-box">
            <h3 className="gold-text">
              Hitting the Coastal Highway Today?
            </h3>
            <p>
              Make your coastal road trip unforgettable. Pull into <strong>Mathuram Cafe on NH 66, Brahmavara</strong> for hot dosas, refreshing degree filter coffee, and the finest vegetarian hospitality in coastal Karnataka.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/menu" className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '1rem' }}>
                <FaUtensils style={{ marginRight: '8px' }} /> Explore Food Menu
              </Link>
              <a 
                href="https://maps.app.goo.gl/u8UTmtSuDWRUdk6Q9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                style={{ padding: '12px 26px', fontSize: '1rem' }}
              >
                <FaMapMarkerAlt style={{ marginRight: '8px' }} /> Navigate on Google Maps
              </a>
              <Link to="/travel-guide/udupi-2-day-itinerary" className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '1rem', background: '#4E6B3A', borderColor: '#4E6B3A', color: '#ffffff' }}>
                <FaCompass style={{ marginRight: '8px' }} /> 2-Day Travel Guide
              </Link>
            </div>
          </div>

        </article>
      </div>
    </div>
  );
};

export default Post9;
