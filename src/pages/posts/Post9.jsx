import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaRoad, 
  FaCarSide, 
  FaParking, 
  FaRestroom, 
  FaCoffee, 
  FaUtensils, 
  FaClock, 
  FaMapMarkerAlt, 
  FaDirections,
  FaRoute,
  FaCompass
} from 'react-icons/fa';
import BlogLangToggle from '../../components/BlogLangToggle';
import './Post9RoadTrip.css';

const Post9 = () => {
  const [lang, setLang] = useState('en');

  const milestonesEn = [
    { city: "Mangalore", km: "KM 0", status: "Start" },
    { city: "Kaup", km: "KM 40", status: "Pass" },
    { city: "Udupi", km: "KM 55", status: "Darshan" },
    { city: "Brahmavara (Mathuram)", km: "KM 65", status: "Featured Oasis", highlight: true },
    { city: "Maravanthe", km: "KM 105", status: "Scenic Sea Drive" },
    { city: "Murudeshwar", km: "KM 160", status: "Temple & Beach" },
    { city: "Gokarna / Goa", km: "KM 360", status: "Destination" }
  ];

  const milestonesKn = [
    { city: "ಮಂಗಳೂರು", km: "KM 0", status: "ಆರಂಭ" },
    { city: "ಕಾಪು", km: "KM 40", status: "ದೀಪಸ್ತಂಭ" },
    { city: "ಉಡುಪಿ", km: "KM 55", status: "ದರ್ಶನ" },
    { city: "ಬ್ರಹ್ಮಾವರ (ಮಥುರಾಮ್)", km: "KM 65", status: "ಪ್ರಮುಖ ನಿಲುಗಡೆ", highlight: true },
    { city: "ಮರವಂತೆ ಬೀಚ್", km: "KM 105", status: "ಸಮುದ್ರ ರಸ್ತೆ" },
    { city: "ಮುರುಡೇಶ್ವರ", km: "KM 160", status: "ಶಿವ ಪ್ರತಿಮೆ" },
    { city: "ಗೋಕರ್ಣ / ಗೋವಾ", km: "KM 360", status: "ಗಮ್ಯಸ್ಥಾನ" }
  ];

  const milestones = lang === 'en' ? milestonesEn : milestonesKn;

  const travelOrderTimesEn = [
    {
      time: "6:30 AM – 10:30 AM",
      badge: "Breakfast Rush",
      icon: "☕",
      title: "The Early Highway Fuel",
      description: "Steaming Ghee Podi Thatte Idli with dual chutneys, crispy golden Masala Dosa, hot Medu Vada, and authentic Kumbakonam Degree Filter Coffee."
    },
    {
      time: "12:00 PM – 3:30 PM",
      badge: "Lunch Feasts",
      icon: "🍱",
      title: "Traditional Coastal Banana Leaf Meals",
      description: "Wholesome unlimited South Indian Thali with steaming rice, Udupi sambar, pepper rasam, vegetable palya, kootu, fresh buttermilk, and sweet payasa."
    },
    {
      time: "4:00 PM – 7:00 PM",
      badge: "Evening Refreshment",
      icon: "🍟",
      title: "Chai, Crispy Bajjis & Gudbud",
      description: "Hot crispy Mangalore Bajjis / Onion Bajjis, degree filter coffee, tea, and our famous coastal Gudbud Ice Cream to beat highway fatigue."
    },
    {
      time: "7:30 PM – 11:00 PM",
      badge: "Dinner Pitstop",
      icon: "🍛",
      title: "Family Dinner & Express Parcel",
      description: "Butter Naan with rich Paneer Butter Masala, Veg Biryani, Hakka Noodles, or quick drive-thru parcel for your overnight journey."
    }
  ];

  const travelOrderTimesKn = [
    {
      time: "ಬೆಳಗ್ಗೆ 6:30 – 10:30",
      badge: "ಬೆಳಗಿನ ಉಪಹಾರ",
      icon: "☕",
      title: "ಪ್ರಯಾಣದ ಚೈತನ್ಯದಾಯಕ ತಿಂಡಿ",
      description: "ಬಿಸಿಬಿಸಿ ತುಪ್ಪದ ಪುಡಿ ತಟ್ಟೆ ಇಡ್ಲಿ, ಗರಿಗರಿ ಮಸಾಲ ದೋಸೆ, ಉದ್ದಿನ ವಡೆ ಹಾಗೂ ಪರಿಮಳಯುಕ್ತ ಕುಂಭಕೋಣಂ ಡಿಗ್ರಿ ಫಿಲ್ಟರ್ ಕಾಫಿ."
    },
    {
      time: "ಮಧ್ಯಾಹ್ನ 12:00 – 3:30",
      badge: "ಮಧ್ಯಾಹ್ನದ ಊಟ",
      icon: "🍱",
      title: "ಸಾಂಪ್ರದಾಯಿಕ ಬಾಳೆಎಲೆ ಸಂಪೂರ್ಣ ಊಟ",
      description: "ಅನ್‌ಲಿಮಿಟೆಡ್ ದಕ್ಷಿಣ ಭಾರತೀಯ ಥಾಲಿ—ಅನ್ನ, ಸಾಂಬಾರ್, ರಸಂ, ಪಲ್ಯ, ಕೂಟು, ಮಜ್ಜಿಗೆ ಹಾಗೂ ಸಿಹಿ ಪಾಯಸ."
    },
    {
      time: "ಸಂಜೆ 4:00 – 7:00",
      badge: "ಸಂಜೆಯ ಉಪಾಹಾರ",
      icon: "🍟",
      title: "ಚಹಾ, ಗರಿಗರಿ ಬಜ್ಜಿ & ಗಡ್‌ಬಡ್",
      description: "ಬಿಸಿಬಿಸಿ ಈರುಳ್ಳಿ ಬಜ್ಜಿ, ಮಂಗಳೂರು ಬಜ್ಜಿ, ಫಿಲ್ಟರ್ ಕಾಫಿ ಹಾಗೂ ಪ್ರಯಾಣದ ದಣಿವು ನೀಗಿಸಲು ಪ್ರಸಿದ್ಧ ಗಡ್‌ಬಡ್ ಐಸ್‌ಕ್ರೀಮ್."
    },
    {
      time: "ರಾತ್ರಿ 7:30 – 11:00",
      badge: "ರಾತ್ರಿಯ ಊಟ & ಪಾರ್ಸಲ್",
      icon: "🍛",
      title: "ಫ್ಯಾಮಿಲಿ ಡಿನ್ನರ್ ಮತ್ತು ಡ್ರೈವ್-ಥ್ರೂ",
      description: "ಬಟರ್ ನಾನ್, ಪನೀರ್ ಬಟರ್ ಮಸಾಲಾ, ವೆಜ್ ಬಿರಿಯಾನಿ ಹಾಗೂ ಮುಂದಿನ ರಾತ್ರಿ ಪ್ರಯಾಣಕ್ಕೆ ಶೀಘ್ರ ಡ್ರೈವ್-ಥ್ರೂ ಪಾರ್ಸಲ್ ಸೇವೆ."
    }
  ];

  const travelOrderTimes = lang === 'en' ? travelOrderTimesEn : travelOrderTimesKn;

  return (
    <div className="road-trip-container">
      <Helmet>
        <title>
          {lang === 'en'
            ? "Mangalore to Murudeshwar & Goa Road Trip: Best Pure Veg Highway Pitstops on NH 66"
            : "ಮಂಗಳೂರು-ಮುರುಡೇಶ್ವರ-ಗೋವಾ ರೋಡ್ ಟ್ರಿಪ್: NH 66 ಹೆದ್ದಾರಿಯ ಅತ್ಯುತ್ತಮ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಹೋಟೆಲ್"}
        </title>
        <meta 
          name="description" 
          content={lang === 'en'
            ? "Driving the coastal NH 66 from Mangalore to Murudeshwar or Bangalore to Goa? Discover the top pure veg highway restaurant with massive parking, clean restrooms, and authentic Udupi food."
            : "ಮಂಗಳೂರು, ಉಡುಪಿ, ಮುರುಡೇಶ್ವರ ಅಥವಾ ಗೋವಾ ಹೆದ್ದಾರಿಯಲ್ಲಿ ಪ್ರಯಾಣಿಸುತ್ತಿದ್ದೀರಾ? ವಿಶಾಲ ಪಾರ್ಕಿಂಗ್, ಸ್ವಚ್ಛ ಶೌಚಾಲಯ ಹಾಗೂ ಅಪ್ಪಟ ಉಡುಪಿ ಊಟವಿರುವ ಮಥುರಾಮ್ ಕೆಫೆಗೆ ಭೇಟಿ ನೀಡಿ."}
        />
        <meta 
          name="keywords" 
          content="nh 66 restaurants with parking, bangalore to goa road trip food stop, mangalore to kundapur highway breakfast, best stop for tea breakfast nh66 udupi, pure veg restaurant nh66, brahmavara highway restaurant, mathuram cafe brahmavara" 
        />
      </Helmet>

      <div className="container" style={{ maxWidth: '920px' }}>
        
        <BlogLangToggle lang={lang} setLang={setLang} />

        {/* Highway HUD Hero Header */}
        <motion.div 
          className="highway-hud"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="road-badge-row">
            <span className="road-badge">
              <FaRoad /> {lang === 'en' ? "NH 66 Coastal Highway Guide" : "NH 66 ಕರಾವಳಿ ಹೆದ್ದಾರಿ ಗೈಡ್"}
            </span>
            <span className="road-badge gold">
              <FaCompass /> {lang === 'en' ? "2026 Road Trip Edition" : "೨೦೨೬ ರೋಡ್ ಟ್ರಿಪ್ ಆವೃತ್ತಿ"}
            </span>
            <span className="road-badge blue">
              <FaCarSide /> {lang === 'en' ? "100% Pure Veg Pitstops" : "೧೦೦% ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ತಾಣ"}
            </span>
          </div>

          <h1 className="highway-title gold-text">
            {lang === 'en' 
              ? "Mangalore to Murudeshwar & Goa Road Trip: The Best Pure Veg Highway Pitstops on NH 66"
              : "ಮಂಗಳೂರು-ಮುರುಡೇಶ್ವರ-ಗೋವಾ ರೋಡ್ ಟ್ರಿಪ್: NH 66 ಹೆದ್ದಾರಿಯ ಅತ್ಯುತ್ತಮ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಹೋಟೆಲ್"}
          </h1>

          <p className="highway-subtitle">
            {lang === 'en'
              ? "Cruising the Arabian Sea coastline along National Highway 66? From pristine beaches to historic temple detours, here is the driver's ultimate food trail—featuring zero-detour access, spacious parking, clean restrooms, and authentic coastal vegetarian delicacies."
              : "ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ 66 ರ ಕರಾವಳಿ ತೀರದಲ್ಲಿ ಪ್ರಯಾಣಿಸುತ್ತಿದ್ದೀರಾ? ನಗರದ ಟ್ರಾಫಿಕ್ ಕಿರಿಕಿರಿ ಇಲ್ಲದೆ, ಹೆದ್ದಾರಿಯಲ್ಲೇ ವಿಶಾಲ ಪಾರ್ಕಿಂಗ್, ಸ್ವಚ್ಛ ಶೌಚಾಲಯ ಹಾಗೂ ನೈಜ ಕರಾವಳಿ ಸಸ್ಯಾಹಾರ ನೀಡುವ ಅಂತಿಮ ಫುಡ್ ಗೈಡ್ ಇಲ್ಲಿದೆ."}
          </p>

          {/* Interactive Road Milestone Bar */}
          <div className="highway-milestone-bar">
            <div className="milestones-title">
              <FaRoute /> {lang === 'en' ? "NH 66 Highway Milestones & Distance Tracker" : "NH 66 ಹೆದ್ದಾರಿ ಮೈಲಿಗಲ್ಲು ಮತ್ತು ದೂರ ಟ್ರ್ಯಾಕರ್"}
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
            <div className="amenity-title">{lang === 'en' ? "Expansive Parking" : "ವಿಶಾಲ ಪಾರ್ಕಿಂಗ್"}</div>
            <div className="amenity-sub">{lang === 'en' ? "Wide spaces for SUVs, tempo travellers & buses" : "ಕಾರುಗಳು, ಟೆಂಪೋ ಟ್ರಾವೆಲರ್ ಮತ್ತು ಬಸ್‌ಗಳಿಗೆ ಜಾಗ"}</div>
          </div>
          <div className="amenity-card">
            <span className="amenity-icon">🚻</span>
            <div className="amenity-title">{lang === 'en' ? "Spotless Restrooms" : "ಸ್ವಚ್ಛ ಶೌಚಾಲಯಗಳು"}</div>
            <div className="amenity-sub">{lang === 'en' ? "Clean, hygienic sanitation for families" : "ಕುಟುಂಬಗಳಿಗೆ ಶುದ್ಧ ನೈರ್ಮಲ್ಯ ಸೌಲಭ್ಯಗಳು"}</div>
          </div>
          <div className="amenity-card">
            <span className="amenity-icon">❄️</span>
            <div className="amenity-title">{lang === 'en' ? "AC Dining Hall" : "ಹವಾನಿಯಂತ್ರಿತ ಹಾಲ್"}</div>
            <div className="amenity-sub">{lang === 'en' ? "Cool off from coastal humidity & highway heat" : "ಕರಾವಳಿಯ ಬಿಸಿಲಿಗೆ ತಂಪಾದ ಆರಾಮದಾಯಕ ಊಟ"}</div>
          </div>
          <div className="amenity-card">
            <span className="amenity-icon">⚡</span>
            <div className="amenity-title">{lang === 'en' ? "Express Highway Service" : "ಶೀಘ್ರ ಹೆದ್ದಾರಿ ಸೇವೆ"}</div>
            <div className="amenity-sub">{lang === 'en' ? "Hot food served fast to keep you on schedule" : "ಸಮಯ ಉಳಿಸುವ ತ್ವರಿತ ಮತ್ತು ಬಿಸಿಬಿಸಿ ಊಟ"}</div>
          </div>
        </motion.div>

        {/* Main Road Trip Content & Checkpoints */}
        <article className="road-post-article">
          
          {lang === 'en' ? (
            <>
              <p style={{ fontSize: '1.15rem', marginBottom: '25px' }}>
                The <strong>National Highway 66 (NH 66)</strong> stretch connecting <strong>Mangalore, Udupi, Kundapur, Murudeshwar, and Goa</strong> is celebrated as one of India's most scenic road trip corridors. With coconut groves on your right and the azure Arabian Sea playing peek-a-boo on your left, it’s a dream drive for road-trippers, bikers, and families traveling from Bangalore, Mumbai, or Kerala.
              </p>

              <p style={{ marginBottom: '30px' }}>
                However, any experienced traveler knows that a great road trip can quickly turn stressful if you get stuck in cramped city-center traffic searching for food, or pull over at a spot with unhygienic washrooms and zero parking. 
                Here is your mile-by-mile highway pitstop itinerary.
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: '1.15rem', marginBottom: '25px' }}>
                <strong>ಮಂಗಳೂರು, ಉಡುಪಿ, ಕುಂದಾಪುರ, ಮುರುಡೇಶ್ವರ ಮತ್ತು ಗೋವಾ</strong> ಸಂಪರ್ಕಿಸುವ <strong>ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ 66 (NH 66)</strong> ಭಾರತದ ಅತ್ಯಂತ ರಮಣೀಯ ಕರಾವಳಿ ಹೆದ್ದಾರಿಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಒಂದು ಬದಿಯಲ್ಲಿ ಹಚ್ಚಹಸಿರಿನ ತೆಂಗಿನ ತೋಟಗಳು, ಮತ್ತೊಂದು ಬದಿಯಲ್ಲಿ ನೀಲಿ ಅರಬ್ಬೀ ಸಮುದ್ರದ ಸುಂದರ ನೋಟದೊಂದಿಗೆ ಇದು ವಾಹನ ಚಾಲಕರಿಗೆ ಅದ್ಭುತ ಅನುಭವ ನೀಡುತ್ತದೆ.
              </p>

              <p style={{ marginBottom: '30px' }}>
                ಆದರೆ ಹೆದ್ದಾರಿ ಪ್ರಯಾಣದ ವೇಳೆ ಊಟಕ್ಕಾಗಿ ನಗರದ ಟ್ರಾಫಿಕ್ ಒಳಗೆ ನುಗ್ಗಿ ಸಮಯ ಹಾಳು ಮಾಡಿಕೊಳ್ಳುವುದಾಗಲಿ, ಅಥವಾ ಪಾರ್ಕಿಂಗ್ ಮತ್ತು ಸ್ವಚ್ಛ ಶೌಚಾಲಯಗಳಿಲ್ಲದ ಕಡೆ ನಿಲ್ಲುವುದಾಗಲಿ ಪ್ರಯಾಣದ ಮಜವನ್ನೇ ಹಾಳುಮಾಡುತ್ತದೆ. ಅದಕ್ಕಾಗಿಯೇ ಹೆದ್ದಾರಿಯಲ್ಲೇ ಇರುವ ಅತ್ಯುತ್ತಮ ನಿಲುಗಡೆಯ ಸಂಪೂರ್ಣ ವಿವರ ಇಲ್ಲಿದೆ.
              </p>
            </>
          )}

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
                    {lang === 'en' ? "1. Mangalore & Surathkal Kickoff (KM 0 – KM 35)" : "೧. ಮಂಗಳೂರು & ಸುರತ್ಕಲ್ ಆರಂಭ (KM 0 – 35)"}
                  </h3>
                  <span className="checkpoint-km-badge">KM 0 - 35</span>
                </div>
                <p>
                  {lang === 'en'
                    ? "Departing Mangalore early in the morning allows you to beat local commercial traffic around Surathkal and Mulki. As you glide past the Pavanje and Shambhavi river bridges, keep your speed steady on the 4-lane expressway."
                    : "ಮುಂಜಾನೆ ಮಂಗಳೂರಿನಿಂದ ಹೊರಟರೆ ಸುರತ್ಕಲ್ ಮತ್ತು ಮೂಲ್ಕಿಯ ಲೋಕಲ್ ಟ್ರಾಫಿಕ್ ತಪ್ಪಿಸಬಹುದು. ಪಾವಂಜೆ ಮತ್ತು ಶಾಂಭವಿ ನದಿ ಸೇತುವೆಗಳನ್ನು ದಾಟುತ್ತಿದ್ದಂತೆ 4-ಪಥದ ಸುಗಮ ಹೆದ್ದಾರಿಯಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಯಾಣ ಮುಂದುವರಿಯುತ್ತದೆ."}
                </p>
                <div className="road-signboard">
                  <div className="road-sign-header">{lang === 'en' ? "Highway Navigation Note" : "ಹೆದ್ದಾರಿ ಸಂಚಾರ ಸೂಚನೆ"}</div>
                  <div className="road-sign-content">
                    <span>{lang === 'en' ? "Avoid Udupi City Congestion" : "ಉಡುಪಿ ಸಿಟಿ ಟ್ರಾಫಿಕ್ ತಪ್ಪಿಸಿ"}</span>
                    <span>➔ {lang === 'en' ? "Stay on NH 66 Flyover" : "NH 66 ಫ್ಲೈಓವರ್ ಮೇಲೆ ಮುಂದುವರಿಯಿರಿ"}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                  <em>{lang === 'en' ? "Pro Tip:" : "ಮುಖ್ಯ ಸಲಹೆ:"}</em> {lang === 'en' 
                    ? "Many travelers make the mistake of driving into narrow Udupi city streets for breakfast, wasting 45–60 minutes in temple traffic. Instead, stay on the highway bypass and proceed 10 minutes further north to Brahmavara."
                    : "ತಿಂಡಿಗಾಗಿ ಉಡುಪಿ ನಗರದ ಕಿರಿದಾದ ರಸ್ತೆಗಳಿಗೆ ಹೋಗಿ 45-60 ನಿಮಿಷ ಟ್ರಾಫಿಕ್‌ನಲ್ಲಿ ವ್ಯರ್ಥ ಮಾಡಬೇಡಿ. ಹೆದ್ದಾರಿಯಲ್ಲೇ ಕೇವಲ 10 ನಿಮಿಷ ಮುಂದೆ ಬಂದು ಬ್ರಹ್ಮಾವರದಲ್ಲಿ ನಿಲ್ಲಿ."}
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
              <div className="checkpoint-pin" style={{ background: 'var(--color-secondary)', borderColor: '#fff' }}></div>
              <div className="checkpoint-card featured-stop">
                <div className="checkpoint-header">
                  <div>
                    <span style={{ color: '#4E6B3A', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      ★ {lang === 'en' ? "Primary Recommended Pitstop" : "ಹೆದ್ದಾರಿಯ ನಂಬರ್ 1 ಶಿಫಾರಸು ನಿಲುಗಡೆ"}
                    </span>
                    <h3 className="gold-text" style={{ fontSize: '1.75rem', marginTop: '4px', marginBottom: '0' }}>
                      {lang === 'en' ? "2. Mathuram Cafe, Brahmavara (KM 65)" : "೨. ಮಥುರಾಮ್ ಕೆಫೆ, ಬ್ರಹ್ಮಾವರ (KM 65)"}
                    </h3>
                  </div>
                  <span className="checkpoint-km-badge green">
                    {lang === 'en' ? "KM 65 (Ideal Pitstop)" : "KM 65 (ಸೂಕ್ತ ನಿಲುಗಡೆ)"}
                  </span>
                </div>

                <p style={{ fontSize: '1.05rem', margin: '15px 0' }}>
                  {lang === 'en'
                    ? "Positioned right on the main highway at Brahmavara, Mathuram Cafe is specifically designed to meet the high standards of long-distance road-trippers, pilgrims, and highway travelers."
                    : "ಬ್ರಹ್ಮಾವರದ ಪ್ರಮುಖ ಹೆದ್ದಾರಿಯಲ್ಲೇ ಇರುವ ಮಥುರಾಮ್ ಕೆಫೆ, ದೂರ ಪ್ರಯಾಣಿಕರು, ಭಕ್ತಾದಿಗಳು ಹಾಗೂ ಪ್ರವಾಸಿ ಕುಟುಂಬಗಳ ನೆಮ್ಮದಿಯ ಊಟೋಪಚಾರಕ್ಕಾಗಿ ಸೂಕ್ತವಾಗಿ ವಿನ್ಯಾಸಗೊಂಡಿದೆ."}
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
                      {lang === 'en' ? "Hassle-free parking right off the highway" : "ಹೆದ್ದಾರಿಯಿಂದ ನೇರ ಪ್ರವೇಶವಿರುವ ವಿಶಾಲ ಪಾರ್ಕಿಂಗ್"}
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
                      {lang === 'en' ? "Crispy Ghee Dosas & authentic Filter Coffee" : "ಗರಿಗರಿ ತುಪ್ಪದ ದೋಸೆ & ಡಿಗ್ರಿ ಫಿಲ್ಟರ್ ಕಾಫಿ"}
                    </div>
                  </div>
                </div>

                <h4 className="gold-text" style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px' }}>
                  {lang === 'en' ? "Why Travelers Rate Mathuram Cafe as the #1 NH-66 Pitstop:" : "ಪ್ರವಾಸಿಗರು ಮಥುರಾಮ್ ಕೆಫೆಯನ್ನು ಏಕೆ ಮೆಚ್ಚುತ್ತಾರೆ?"}
                </h4>
                <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>{lang === 'en' ? "Direct Highway Access:" : "ಹೆದ್ದಾರಿ ಪಕ್ಕದಲ್ಲೇ ಲಭ್ಯ:"}</strong> {lang === 'en' ? "No tricky turns or inner-lane navigation; pull straight into our parking lot from NH 66." : "ಕಿರಿದಾದ ಓಣಿಗಳಿಗೆ ಹೋಗಬೇಕಾಗಿಲ್ಲ, NH 66 ರಿಂದ ನೇರವಾಗಿ ಪಾರ್ಕಿಂಗ್‌ಗೆ ಬರಬಹುದು."}
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>{lang === 'en' ? "100% Pure Veg & Sattvic Friendly:" : "೧೦೦% ಶುದ್ಧ ಸಾತ್ವಿಕ ಸಸ್ಯಾಹಾರ:"}</strong> {lang === 'en' ? "Authentic Udupi Brahmin recipes, zero adulteration, pure desi ghee, and fresh coconut chutneys." : "ಅಪ್ಪಟ ಉಡುಪಿ ಬ್ರಾಹ್ಮಣ ಶೈಲಿಯ ರುಚಿ, ಶುದ್ಧ ತುಪ್ಪ ಮತ್ತು ತಾಜಾ ಕಾಯಿ ಚಟ್ನಿ."}
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>{lang === 'en' ? "Fast Drive-Thru & Takeaway Window:" : "ಶೀಘ್ರ ಡ್ರೈವ್-ಥ್ರೂ ಪಾರ್ಸಲ್:"}</strong> {lang === 'en' ? "In a rush to catch the sunset at Maravanthe? Grab hot idlis, coffee, and snack boxes in under 5 minutes." : "ಮರವಂತೆ ಸೂರ್ಯಾಸ್ತ ನೋಡಲು ಹೊರಟಿದ್ದೀರಾ? ಕೇವಲ 5 ನಿಮಿಷಗಳಲ್ಲಿ ಬಿಸಿಬಿಸಿ ಇಡ್ಲಿ, ಕಾಫಿ ಪಾರ್ಸಲ್ ಪಡೆಯಿರಿ."}
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>{lang === 'en' ? "Cooling AC Family Lounge:" : "ಹವಾನಿಯಂತ್ರಿತ ಫ್ಯಾಮಿಲಿ ಹಾಲ್:"}</strong> {lang === 'en' ? "Recharge in comfort away from highway noise and coastal humidity." : "ಹೆದ್ದಾರಿಯ ಶಬ್ದ ಮತ್ತು ಕರಾವಳಿಯ ಸೆಖೆಯಿಂದ ದೂರವಾಗಿ ತಂಪಾದ ಹಾಲ್‌ನಲ್ಲಿ ವಿಶ್ರಮಿಸಿ."}
                  </li>
                </ul>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                  <Link to="/menu" className="btn btn-primary" style={{ padding: '10px 22px' }}>
                    {lang === 'en' ? "View Highway Menu" : "ಮೆನು ವೀಕ್ಷಿಸಿ"}
                  </Link>
                  <a 
                    href="https://maps.app.goo.gl/u8UTmtSuDWRUdk6Q9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                    style={{ padding: '10px 22px' }}
                  >
                    <FaDirections style={{ marginRight: '6px' }} /> {lang === 'en' ? "Open GPS Route" : "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ದಾರಿ"}
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
                    {lang === 'en' ? "3. The Legendary Maravanthe Beach Drive (KM 105)" : "೩. ಪ್ರಸಿದ್ಧ ಮರವಂತೆ ಬೀಚ್ ಡ್ರೈವ್ (KM 105)"}
                  </h3>
                  <span className="checkpoint-km-badge">KM 105</span>
                </div>
                <p>
                  {lang === 'en'
                    ? "35 km north of Brahmavara lies the world-famous Maravanthe Beach highway stretch—where NH 66 runs wedged directly between the crashing waves of the Arabian Sea on the left and the calm Souparnika River on the right."
                    : "ಬ್ರಹ್ಮಾವರದಿಂದ 35 ಕಿ.ಮೀ ಮುಂದೆ ವಿಶ್ವವಿಖ್ಯಾತ ಮರವಂತೆ ಬೀಚ್ ಹೆದ್ದಾರಿ ಸಿಗುತ್ತದೆ—ಎಡಭಾಗದಲ್ಲಿ ಅರಬ್ಬೀ ಸಮುದ್ರದ ಅಲೆಗಳು ಹಾಗೂ ಬಲಭಾಗದಲ್ಲಿ ಸೌಪರ್ಣಿಕಾ ನದಿಯ ಶಾಂತ ಜಲರಾಶಿಯ ನಡುವೆ ವಾಹನ ಚಲಾಯಿಸುವ ಅನುಭವ ಅಸಾಧಾರಣ."}
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
                  <em>{lang === 'en' ? "Road Trip Tip:" : "ರೋಡ್ ಟ್ರಿಪ್ ಟಿಪ್:"}</em> {lang === 'en'
                    ? "Grab a takeaway parcel of Mathuram Cafe's signature Gudbud Ice Cream or chilled juices before leaving Brahmavara so you can enjoy a refreshing dessert while watching the Maravanthe sunset!"
                    : "ಬ್ರಹ್ಮಾವರದಿಂದ ಹೊರಡುವ ಮುನ್ನ ಮಥುರಾಮ್ ಕೆಫೆಯ ಗಡ್‌ಬಡ್ ಐಸ್‌ಕ್ರೀಮ್ ಅಥವಾ ತಂಪು ಜ್ಯೂಸ್ ಪಾರ್ಸಲ್ ಪಡೆದುಕೊಂಡರೆ, ಮರವಂತೆ ಸೂರ್ಯಾಸ್ತ ನೋಡುತ್ತಾ ಸವಿಯಬಹುದು!"}
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
                    {lang === 'en' ? "4. Murudeshwar, Gokarna & South Goa (KM 160 – KM 360)" : "೪. ಮುರುಡೇಶ್ವರ, ಗೋಕರ್ಣ & ಗೋವಾ (KM 160 – 360)"}
                  </h3>
                  <span className="checkpoint-km-badge">KM 160 - 360</span>
                </div>
                <p>
                  {lang === 'en'
                    ? "From Maravanthe, the road takes you seamlessly past Baindur into Murudeshwar (home to the colossal Lord Shiva statue and Raja Gopura). Continuing further north on the scenic 4-lane highway brings you to the sacred beaches of Gokarna and straight into South Goa."
                    : "ಮರವಂತೆಯಿಂದ ಬೈಂದೂರು ದಾಟಿ ಮುರುಡೇಶ್ವರದ ಬೃಹತ್ ಶಿವನ ಪ್ರತಿಮೆಯ ದರ್ಶನ ಪಡೆಯಬಹುದು. ಅಲ್ಲಿಂದ ಮುಂದೆ ಗೋಕರ್ಣದ ಪವಿತ್ರ ಕಡಲತೀರಗಳು ಹಾಗೂ ನೇರವಾಗಿ ದಕ್ಷಿಣ ಗೋವಾಕ್ಕೆ ಸುಲಭವಾಗಿ ತಲುಪಬಹುದು."}
                </p>
              </div>
            </motion.div>

          </div>

          <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '40px 0' }} />

          {/* Highway Pitstop Feature Comparison */}
          <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>
            {lang === 'en' ? "City Detour vs. Highway Oasis: Why Smart Drivers Choose Mathuram Cafe" : "ನಗರದ ಹೋಟೆಲ್‌ಗಳು vs ಹೆದ್ದಾರಿ ಮಥುರಾಮ್ ಕೆಫೆ ಹೋಲಿಕೆ"}
          </h2>
          <p style={{ marginBottom: '20px' }}>
            {lang === 'en'
              ? "Here is a quick comparison for drivers planning their Bangalore-Goa or Mangalore-Murudeshwar highway itinerary:"
              : "ಬೆಂಗಳೂರು-ಗೋವಾ ಅಥವಾ ಮಂಗಳೂರು-ಮುರುಡೇಶ್ವರ ಮಾರ್ಗದಲ್ಲಿ ಸಂಚರಿಸುವ ಚಾಲಕರಿಗಾಗಿ ಉಪಯುಕ್ತ ಹೋಲಿಕೆ:"}
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table className="pitstop-comparison-table">
              <thead>
                <tr>
                  <th>{lang === 'en' ? "Feature" : "ಸೌಲಭ್ಯ"}</th>
                  <th>{lang === 'en' ? "Typical City Center Restaurant" : "ನಗರದೊಳಗಿನ ಸಾಮಾನ್ಯ ಹೋಟೆಲ್‌ಗಳು"}</th>
                  <th>{lang === 'en' ? "Mathuram Cafe (NH 66 Brahmavara)" : "ಮಥುರಾಮ್ ಕೆಫೆ (NH 66 ಬ್ರಹ್ಮಾವರ)"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>{lang === 'en' ? "Highway Accessibility" : "ಹೆದ್ದಾರಿ ಪ್ರವೇಶ"}</strong></td>
                  <td>❌ {lang === 'en' ? "Requires 20-30 min inner city detour" : "ನಗರದೊಳಗೆ 20-30 ನಿಮಿಷ ಟ್ರಾಫಿಕ್ ಅಲೆದಾಟ"}</td>
                  <td>✅ <span style={{ color: '#4E6B3A', fontWeight: 'bold' }}>{lang === 'en' ? "Direct NH 66 roadside access" : "NH 66 ಹೆದ್ದಾರಿಯಲ್ಲೇ ನೇರ ಪ್ರವೇಶ"}</span></td>
                </tr>
                <tr>
                  <td><strong>{lang === 'en' ? "Parking Capacity" : "ವಾಹನ ಪಾರ್ಕಿಂಗ್"}</strong></td>
                  <td>❌ {lang === 'en' ? "Congested roadside / paid lots" : "ರಸ್ತೆಬದಿಯ ಕಿರಿಕಿರಿ / ಪಾರ್ಕಿಂಗ್ ಕೊರತೆ"}</td>
                  <td>✅ <span style={{ color: '#4E6B3A', fontWeight: 'bold' }}>{lang === 'en' ? "Dedicated spacious parking lot" : "ವಿಶಾಲವಾದ ಸ್ವಂತ ಪಾರ್ಕಿಂಗ್ ಸ್ಥಳ"}</span></td>
                </tr>
                <tr>
                  <td><strong>{lang === 'en' ? "Restrooms" : "ಶೌಚಾಲಯಗಳು"}</strong></td>
                  <td>❌ {lang === 'en' ? "Often small & crowded" : "ಸಾಮಾನ್ಯವಾಗಿ ಸಣ್ಣ & ಅಸ್ವಚ್ಛ"}</td>
                  <td>✅ <span style={{ color: '#4E6B3A', fontWeight: 'bold' }}>{lang === 'en' ? "Clean, hygienic & sanitized" : "ಸದಾ ಸ್ವಚ್ಛ ಹಾಗೂ ನೈರ್ಮಲ್ಯಯುತ"}</span></td>
                </tr>
                <tr>
                  <td><strong>{lang === 'en' ? "Dining Ambience" : "ವಾತಾವರಣ"}</strong></td>
                  <td>❌ {lang === 'en' ? "Noisy city setting" : "ಗದ್ದಲದ ನಗರ ವಾತಾವರಣ"}</td>
                  <td>✅ <span style={{ color: '#4E6B3A', fontWeight: 'bold' }}>{lang === 'en' ? "Spacious AC & Non-AC family hall" : "ಶಾಂತಯುತ AC ಮತ್ತು ವಿಶಾಲ ಫ್ಯಾಮಿಲಿ ಹಾಲ್"}</span></td>
                </tr>
                <tr>
                  <td><strong>{lang === 'en' ? "Authentic Udupi Taste" : "ಉಡುಪಿ ನೈಜ ರುಚಿ"}</strong></td>
                  <td>⚠️ {lang === 'en' ? "Varies greatly" : "ಗುಣಮಟ್ಟದಲ್ಲಿ ಏರುಪೇರು"}</td>
                  <td>✅ <span style={{ color: '#4E6B3A', fontWeight: 'bold' }}>{lang === 'en' ? "100% Traditional Pure Vegetarian" : "೧೦೦% ಶುದ್ಧ ಸಾಂಪ್ರದಾಯಿಕ ಸಸ್ಯಾಹಾರ"}</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '40px 0' }} />

          {/* What to Order Based on Your Travel Timing */}
          <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>
            {lang === 'en' ? "What to Order Based on Your Travel Schedule" : "ಪ್ರಯಾಣದ ಸಮಯಕ್ಕೆ ತಕ್ಕಂತೆ ಏನು ಆರ್ಡರ್ ಮಾಡಬೇಕು?"}
          </h2>
          <p style={{ marginBottom: '25px' }}>
            {lang === 'en'
              ? "Whether you are making a brisk early morning sprint or a leisurely holiday drive, here is our chef's recommended highway menu:"
              : "ಮುಂಜಾನೆಯ ಪ್ರಯಾಣವಿರಲಿ ಅಥವಾ ಸಂಜೆಯ ನಿರಾಳ ಸವಾರಿಯಿರಲಿ, ನಮ್ಮ ಶೆಫ್ ಶಿಫಾರಸು ಮಾಡಿದ ಮೆನು ಇಲ್ಲಿದೆ:"}
          </p>

          <div className="time-order-grid">
            {travelOrderTimes.map((item, idx) => (
              <motion.div 
                key={idx}
                className="time-order-card"
                whileHover={{ y: -5 }}
              >
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', background: 'rgba(212,166,90,0.2)', color: 'var(--color-primary)', padding: '3px 8px', borderRadius: '4px' }}>
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
              {lang === 'en' ? "Hitting the Coastal Highway Today?" : "ಇಂದೇ ಕರಾವಳಿ ಹೆದ್ದಾರಿಯಲ್ಲಿ ಹೊರಟಿದ್ದೀರಾ?"}
            </h3>
            <p>
              {lang === 'en'
                ? "Make your coastal road trip unforgettable. Pull into Mathuram Cafe on NH 66, Brahmavara for hot dosas, refreshing degree filter coffee, and the finest vegetarian hospitality in coastal Karnataka."
                : "ನಿಮ್ಮ ರೋಡ್ ಟ್ರಿಪ್ ಸವಿಯನ್ನು ಇನ್ನಷ್ಟು ಹೆಚ್ಚಿಸಿಕೊಳ್ಳಿ. ಬಿಸಿಬಿಸಿ ದೋಸೆ, ತಾಜಾ ಫಿಲ್ಟರ್ ಕಾಫಿ ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪಿ ಊಟ ಸವಿಯಲು ಬ್ರಹ್ಮಾವರದ NH 66 ಮಥುರಾಮ್ ಕೆಫೆಗೆ ಬನ್ನಿ."}
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/menu" className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '1rem' }}>
                <FaUtensils style={{ marginRight: '8px' }} /> {lang === 'en' ? "Explore Food Menu" : "ಮೆನು ನೋಡಿ"}
              </Link>
              <a 
                href="https://maps.app.goo.gl/u8UTmtSuDWRUdk6Q9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                style={{ padding: '12px 26px', fontSize: '1rem' }}
              >
                <FaMapMarkerAlt style={{ marginRight: '8px' }} /> {lang === 'en' ? "Navigate on Google Maps" : "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ದಾರಿ"}
              </a>
              <Link to="/travel-guide/udupi-2-day-itinerary" className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '1rem', background: '#4E6B3A', borderColor: '#4E6B3A', color: '#ffffff' }}>
                <FaCompass style={{ marginRight: '8px' }} /> {lang === 'en' ? "2-Day Travel Guide" : "೨ ದಿನಗಳ ಪ್ರವಾಸ ಗೈಡ್"}
              </Link>
            </div>
          </div>

        </article>
      </div>
    </div>
  );
};

export default Post9;
