import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import BlogLangToggle from '../../components/BlogLangToggle';

const Post8 = () => {
  const [lang, setLang] = useState('en');

  return (
    <div className="container" style={{ paddingTop: '180px', paddingBottom: '80px', maxWidth: '850px', minHeight: '80vh' }}>
      <Helmet>
        <title>
          {lang === 'en'
            ? "Udupi Temple Food Trail: Best Pure Veg Restaurants Near Sri Krishna Matha & Barkur"
            : "ಉಡುಪಿ ದೇವಸ್ಥಾನಗಳ ಫುಡ್ ಟ್ರಯಲ್: ಶ್ರೀ ಕೃಷ್ಣ ಮಠ, ಬಾರಕೂರು ಮತ್ತು ಸಾತ್ವಿಕ ಊಟದ ಮಾರ್ಗದರ್ಶಿ"}
        </title>
        <meta 
          name="description" 
          content={lang === 'en'
            ? "Planning a pilgrimage to Udupi Sri Krishna Matha, Barkur, or Anegudde? Discover the ultimate Udupi temple food trail and the best pure veg restaurants on NH 66 with ample parking."
            : "ಉಡುಪಿ ಶ್ರೀ ಕೃಷ್ಣ ಮಠ, ಬಾರಕೂರು ಅಥವಾ ಆನೆಗುಡ್ಡೆ ಯಾತ್ರೆ ಪ್ಲಾನ್ ಮಾಡುತ್ತಿದ್ದೀರಾ? ದರ್ಶನದ ನಂತರ ಸಾತ್ವಿಕ ಶುದ್ಧ ಸಸ್ಯಾಹಾರ, ಬಾಳೆಎಲೆ ಊಟ ಹಾಗೂ ವಿಶಾಲ ಪಾರ್ಕಿಂಗ್ ಇರುವ ಮಥುರಾಮ್ ಕೆಫೆಗೆ ಬನ್ನಿ."}
        />
        <meta 
          name="keywords" 
          content="ಉಡುಪಿ ಕೃಷ್ಣ ಮಠ ಊಟ, ಬಾರಕೂರು ದೇವಸ್ಥಾನ ಪ್ರವಾಸ, ಸಾತ್ವಿಕ ಆಹಾರ ಉಡುಪಿ, ಉಡುಪಿ ಬ್ರಾಹ್ಮಣ ಊಟ, best veg food near udupi temple, restaurants near barkur temples, pure veg breakfast after krishna temple visit, sattvic food udupi, udupi temple food trail, best vegetarian restaurant brahmavara, udupi brahmin meals" 
        />
      </Helmet>

      <BlogLangToggle lang={lang} setLang={setLang} />

      {lang === 'en' ? (
        <>
          <h1 className="gold-text" style={{ marginBottom: '20px', fontSize: '2.3rem', lineHeight: '1.25' }}>
            Ultimate Udupi Temple Food Trail: Best Pure Veg Restaurants Near Sri Krishna Matha, Barkur & Brahmavara
          </h1>
          
          <div className="glass-panel" style={{ padding: '35px', lineHeight: '1.8', color: 'var(--color-text)' }}>
            <div style={{ color: 'var(--color-text-light)', marginBottom: '25px', fontSize: '0.95rem' }}>
              <span>Published on: August 24, 2026</span>
              <span style={{ margin: '0 10px' }}>•</span>
              <span>Category: Temple Trail & Coastal Cuisine</span>
            </div>

            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              Udupi is world-renowned as the <strong>Cradle of South Indian Vegetarian Cuisine</strong>. For centuries, the holy <strong>Sri Krishna Matha</strong> has nurtured a deeply spiritual culinary tradition rooted in pure ingredients, fresh coconut, fragrant spices, and devotion.
            </p>

            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '25px' }}>
              <img 
                src="/assets/Photos/Travel/krishna-mutt.webp" 
                alt="Historic Sri Krishna Matha Temple in Udupi" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
              />
            </div>

            <p style={{ marginBottom: '25px' }}>
              Every week, thousands of devotees travel from Bengaluru, Mumbai, Mangalore, and across the country to visit coastal Karnataka’s sacred temples—including <strong>Sri Krishna Matha (Udupi)</strong>, <strong>Barkur’s ancient temples</strong>, <strong>Anegudde Vinayaka Temple (Kumbhashi)</strong>, and <strong>Mookambika Temple (Kollur)</strong>. 
            </p>

            <p style={{ marginBottom: '25px' }}>
              After receiving divine blessings, every pilgrim’s next priority is finding an authentic, clean, 100% pure vegetarian meal. Here is your definitive guide to the <strong>Udupi Temple Food Trail</strong> and the best spot to feast on traditional coastal delicacies.
            </p>

            <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '30px 0' }} />

            <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>
              The Coastal Karnataka Temple Route
            </h2>
            <p style={{ marginBottom: '20px' }}>
              Most devotees explore the coastal spiritual circuit along <strong>National Highway 66 (NH 66)</strong>:
            </p>

            <ul style={{ paddingLeft: '22px', marginBottom: '30px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Sri Krishna Temple, Udupi:</strong> The epicenter of Dvaita philosophy and world-famous Udupi cuisine.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Barkur (15 km from Udupi):</strong> The historical capital of the Alupa rulers, home to the ancient Sri Panchalingeshwara and Batte Vinayaka temples.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Anegudde Sri Vinayaka Temple (Kumbhashi):</strong> One of the sacred Mukti Sthalas of coastal Karnataka.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Kollur Mookambika Temple:</strong> Located nestled in the Western Ghats, reachable directly via NH-66 through Kundapur.
              </li>
            </ul>

            <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>
              Where to Eat on the Temple Trail: Mathuram Cafe, Brahmavara
            </h2>
            <p style={{ marginBottom: '20px' }}>
              Positioned centrally right on the <strong>NH 66 Highway in Brahmavara</strong> (just 10 minutes north of Udupi and 5 minutes from Barkur turnoff), <strong>Mathuram Cafe</strong> has emerged as the premier pitstop for temple pilgrims, family tourists, and road-trippers.
            </p>

            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '25px' }}>
              <img 
                src="/assets/Photos/Food/south-indian-meals-brahmavara.webp" 
                alt="Traditional South Indian Vegetarian Meal Thali at Mathuram Cafe Udupi" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '400px', objectFit: 'cover' }} 
              />
            </div>

            <h3 className="gold-text" style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
              What Makes Mathuram Cafe the Ideal Choice for Devotees?
            </h3>
            <ul style={{ paddingLeft: '22px', marginBottom: '30px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>100% Pure Vegetarian Kitchen:</strong> Strictly vegetarian with utmost adherence to cleanliness, hygiene, and authentic recipes.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Hassle-Free Highway Parking:</strong> Unlike congested city-center streets in Udupi, you’ll find dedicated and spacious parking for cars, tourist buses, and tempo travellers.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Comfortable Air-Conditioned Dining:</strong> Clean, family-friendly AC and Non-AC dining halls where tired travelers can relax in comfort.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Spotless Restrooms:</strong> Clean, well-maintained sanitation facilities for highway travellers and families with elderly parents and children.
              </li>
            </ul>

            <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '30px 0' }} />

            <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
              Top Dishes to Order on Your Pilgrimage Stop
            </h2>

            {/* Dish 1 */}
            <div style={{ marginBottom: '35px' }}>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                1. Authentic South Indian Banana Leaf Meals
              </h3>
              <p>
                Served with piping hot steamed rice, traditional coastal sambar, pepper rasam, vegetable palya, aromatic kootu, fresh curd, and traditional sweet payasa. It’s light, wholesome, and comforting for your journey.
              </p>
            </div>

            {/* Dish 2 */}
            <div style={{ marginBottom: '35px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/ghee-podi-idli-udupi.webp" 
                  alt="Soft Ghee Podi Thatte Idli with Chutney and Sambar at Mathuram Cafe" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '380px', objectFit: 'cover' }} 
                />
              </div>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                2. Ghee Podi Thatte Idli & Kotte Idli
              </h3>
              <p>
                Steamed to cloud-like perfection, drenched with aromatic pure desi ghee, and generously dusted with our secret podi spice blend. An absolute favorite for breakfast after an early morning temple darshan.
              </p>
            </div>

            {/* Dish 3 */}
            <div style={{ marginBottom: '35px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/filter-coffee-mathuram-cafe.webp" 
                  alt="Authentic Degree Filter Coffee in Brass Davarah at Mathuram Cafe Udupi" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '380px', objectFit: 'cover' }} 
                />
              </div>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                3. Kumbakonam Degree Filter Coffee
              </h3>
              <p>
                Brewed fresh using premium roasted chicory-coffee beans and thick frothed milk, served in authentic brass davarah. There is no better refresher to energize you for the road ahead.
              </p>
            </div>

            <div className="cta-box" style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '30px', borderRadius: '12px', textAlign: 'center', marginTop: '40px' }}>
              <h3 className="gold-text" style={{ marginBottom: '15px', fontSize: '1.4rem' }}>
                Visiting Udupi Temples This Week?
              </h3>
              <p style={{ marginBottom: '20px', maxWidth: '600px', margin: '0 auto 20px' }}>
                Drop by Mathuram Cafe on NH 66, Brahmavara for the most authentic and fulfilling pure veg food experience in coastal Karnataka.
              </p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn btn-primary">View Food Menu</Link>
                <Link to="/travel-guide/udupi-2-day-itinerary" className="btn btn-secondary">2-Day Udupi Guide</Link>
                <a 
                  href="https://maps.app.goo.gl/u8UTmtSuDWRUdk6Q9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  📍 Get Directions on Google Maps
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="gold-text" style={{ marginBottom: '20px', fontSize: '2.2rem', lineHeight: '1.25' }}>
            ಉಡುಪಿ ದೇವಸ್ಥಾನಗಳ ಫುಡ್ ಟ್ರಯಲ್: ಶ್ರೀ ಕೃಷ್ಣ ಮಠ, ಬಾರಕೂರು ಮತ್ತು ಸಾತ್ವಿಕ ಊಟದ ಮಾರ್ಗದರ್ಶಿ
          </h1>
          
          <div className="glass-panel" style={{ padding: '35px', lineHeight: '1.8', color: 'var(--color-text)' }}>
            <div style={{ color: 'var(--color-text-light)', marginBottom: '25px', fontSize: '0.95rem' }}>
              <span>ಪ್ರಕಟಣೆ: ಆಗಸ್ಟ್ 24, 2026</span>
              <span style={{ margin: '0 10px' }}>•</span>
              <span>ವರ್ಗ: ದೇವಸ್ಥಾನಗಳ ಪ್ರವಾಸ &amp; ಕರಾವಳಿ ಆಹಾರ</span>
            </div>

            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              ಉಡುಪಿಯು <strong>ದಕ್ಷಿಣ ಭಾರತೀಯ ಸಸ್ಯಾಹಾರದ ತವರೂರು</strong> ಎಂದು ವಿಶ್ವಾದ್ಯಂತ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಶತಮಾನಗಳಿಂದಲೂ ಪವಿತ್ರ <strong>ಶ್ರೀ ಕೃಷ್ಣ ಮಠ</strong>ವು ಭಕ್ತಿ, ಪರಿಶುದ್ಧತೆ, ತಾಜಾ ತೆಂಗಿನಕಾಯಿ ಮತ್ತು ನೈಜ ಮಸಾಲೆಗಳಿಂದ ಕೂಡಿದ ಸಾತ್ವಿಕ ಆಹಾರ ಸಂಸ್ಕೃತಿಯನ್ನು ಪೋಷಿಸಿಕೊಂಡು ಬಂದಿದೆ.
            </p>

            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '25px' }}>
              <img 
                src="/assets/Photos/Travel/krishna-mutt.webp" 
                alt="ಉಡುಪಿಯ ಐತಿಹಾಸಿಕ ಶ್ರೀ ಕೃಷ್ಣ ಮಠ" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
              />
            </div>

            <p style={{ marginBottom: '25px' }}>
              ಪ್ರತಿನಿತ್ಯ ಬೆಂಗಳೂರು, ಮುಂಬೈ, ಮಂಗಳೂರು ಮತ್ತಿತರ ನಗರಗಳಿಂದ ಸಾವಿರಾರು ಭಕ್ತರು <strong>ಶ್ರೀ ಕೃಷ್ಣ ಮಠ (ಉಡುಪಿ)</strong>, <strong>ಬಾರಕೂರಿನ ಐತಿಹಾಸಿಕ ದೇವಾಲಯಗಳು</strong>, <strong>ಆನೆಗುಡ್ಡೆ ವಿನಾಯಕ ದೇವಸ್ಥಾನ (ಕುಂಭಾಶಿ)</strong> ಮತ್ತು <strong>ಕೊಲ್ಲೂರು ಮೂಕಾಂಬಿಕಾ ಕ್ಷೇತ್ರ</strong>ಗಳಿಗೆ ಭೇಟಿ ನೀಡುತ್ತಾರೆ.
            </p>

            <p style={{ marginBottom: '25px' }}>
              ದೇವರ ದರ್ಶನದ ನಂತರ, ಪ್ರತಿಯೊಬ್ಬ ಭಕ್ತನ ಆದ್ಯತೆ ಅಚ್ಚುಕಟ್ಟಾದ, ೧೦೦% ಶುದ್ಧ ಸಾತ್ವಿಕ ಸಸ್ಯಾಹಾರಿ ಊಟ. ನಿಮ್ಮ ಯಾತ್ರೆಯ ನಡುವೆ ಸವಿಯಲು ಅತ್ಯುತ್ತಮ <strong>ಉಡುಪಿ ದೇವಸ್ಥಾನಗಳ ಫುಡ್ ಟ್ರಯಲ್</strong> ಇಲ್ಲಿದೆ.
            </p>

            <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '30px 0' }} />

            <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>
              ಕರಾವಳಿ ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ದೇವಾಲಯಗಳ ಮಾರ್ಗ
            </h2>
            <p style={{ marginBottom: '20px' }}>
              ಹೆಚ್ಚಿನ ಭಕ್ತರು <strong>ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ 66 (NH 66)</strong> ಮೂಲಕ ಈ ಪವಿತ್ರ ಕ್ಷೇತ್ರಗಳನ್ನು ಸಂದರ್ಶಿಸುತ್ತಾರೆ:
            </p>

            <ul style={{ paddingLeft: '22px', marginBottom: '30px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>ಶ್ರೀ ಕೃಷ್ಣ ಮಠ, ಉಡುಪಿ:</strong> ದ್ವೈತ ತತ್ವಜ್ಞಾನದ ಕೇಂದ್ರ ಹಾಗೂ ಜಗತ್ಪ್ರಸಿದ್ಧ ಉಡುಪಿ ಅಡುಗೆಯ ಮೂಲ ತಾಣ.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>ಬಾರಕೂರು (ಉಡುಪಿಯಿಂದ 15 ಕಿ.ಮೀ):</strong> ಆಳುಪ ರಾಜರ ಪ್ರಾಚೀನ ರಾಜಧಾನಿ, ಐತಿಹಾಸಿಕ ಪಂಚಲಿಂಗೇಶ್ವರ ಹಾಗೂ ಬಟ್ಟೆ ವಿನಾಯಕ ದೇಗುಲಗಳ ನೆಲೆವೀಡು.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>ಆನೆಗುಡ್ಡೆ ಶ್ರೀ ವಿನಾಯಕ ದೇವಸ್ಥಾನ (ಕುಂಭಾಶಿ):</strong> ಕರಾವಳಿಯ ಪ್ರಸಿದ್ಧ ಮುಕ್ತಿ ಕ್ಷೇತ್ರಗಳಲ್ಲೊಂದು.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>ಕೊಲ್ಲೂರು ಶ್ರೀ ಮೂಕಾಂಬಿಕಾ ದೇವಸ್ಥಾನ:</strong> ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ಮಡಿಲಲ್ಲಿರುವ ಸುಪ್ರಸಿದ್ಧ ಶಕ್ತಿಪೀಠ.
              </li>
            </ul>

            <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>
              ದೇವಸ್ಥಾನಗಳ ಪ್ರವಾಸದ ವೇಳೆ ಊಟಕ್ಕೆ ಸೂಕ್ತ ತಾಣ: ಮಥುರಾಮ್ ಕೆಫೆ, ಬ್ರಹ್ಮಾವರ
            </h2>
            <p style={{ marginBottom: '20px' }}>
              ಉಡುಪಿಯಿಂದ ಕೇವಲ 10 ನಿಮಿಷ ಮತ್ತು ಬಾರಕೂರು ಕ್ರಾಸ್‌ನಿಂದ 5 ನಿಮಿಷಗಳ ದೂರದಲ್ಲಿ, <strong>NH 66 ಹೆದ್ದಾರಿಯಲ್ಲೇ ಇರುವ ಮಥುರಾಮ್ ಕೆಫೆ</strong> ಭಕ್ತಾದಿಗಳಿಗೆ ಹಾಗೂ ಪ್ರವಾಸಿ ಕುಟುಂಬಗಳಿಗೆ ನೆಚ್ಚಿನ ನಿಲುಗಡೆಯಾಗಿದೆ.
            </p>

            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '25px' }}>
              <img 
                src="/assets/Photos/Food/south-indian-meals-brahmavara.webp" 
                alt="ಮಥುರಾಮ್ ಕೆಫೆಯ ಸಾಂಪ್ರದಾಯಿಕ ದಕ್ಷಿಣ ಭಾರತೀಯ ಬಾಳೆಎಲೆ ಊಟ" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '400px', objectFit: 'cover' }} 
              />
            </div>

            <h3 className="gold-text" style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
              ಭಕ್ತಾದಿಗಳಿಗೆ ಮಥುರಾಮ್ ಕೆಫೆ ಏಕೆ ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆ?
            </h3>
            <ul style={{ paddingLeft: '22px', marginBottom: '30px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>೧೦೦% ಶುದ್ಧ ಸಾತ್ವಿಕ ಸಸ್ಯಾಹಾರ:</strong> ಅಪ್ಪಟ ಸಸ್ಯಾಹಾರಿ ಪದ್ಧತಿ ಹಾಗೂ ಅತ್ಯುನ್ನತ ನೈರ್ಮಲ್ಯದೊಂದಿಗೆ ಆಹಾರ ತಯಾರಿಕೆ.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>ವಿಶಾಲ ಹೆದ್ದಾರಿ ಪಾರ್ಕಿಂಗ್:</strong> ನಗರದ ಟ್ರಾಫಿಕ್ ಕಿರಿಕಿರಿ ಇಲ್ಲದೆ ಕಾರುಗಳು, ಟೆಂಪೋ ಟ್ರಾವೆಲರ್ ಮತ್ತು ಟೂರಿಸ್ಟ್ ಬಸ್‌ಗಳಿಗೆ ವಿಶಾಲ ಪಾರ್ಕಿಂಗ್.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>ಆರಾಮದಾಯಕ ಎಸಿ ಡೈನಿಂಗ್:</strong> ಪ್ರಯಾಣದ ಆಯಾಸ ಕಳೆದುಕೊಳ್ಳಲು ಹವಾನಿಯಂತ್ರಿತ ಹಾಗೂ ವಿಶಾಲ ಸಾಮಾನ್ಯ ಊಟದ ಹಾಲ್‌ಗಳು.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>ಅತ್ಯಂತ ಸ್ವಚ್ಛ ಶೌಚಾಲಯಗಳು:</strong> ವೃದ್ಧರು ಮತ್ತು ಮಕ್ಕಳೊಂದಿಗೆ ಪ್ರಯಾಣಿಸುವ ಕುಟುಂಬಗಳಿಗೆ ಶುಚಿಯಾದ ವಾಶ್‌ರೂಮ್ ಸೌಲಭ್ಯ.
              </li>
            </ul>

            <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '30px 0' }} />

            <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
              ಯಾತ್ರಾರ್ಥಿಗಳು ತಪ್ಪದೇ ಸವಿಯಬೇಕಾದ ತಿನಿಸುಗಳು
            </h2>

            {/* Dish 1 */}
            <div style={{ marginBottom: '35px' }}>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                ೧. ಸಾಂಪ್ರದಾಯಿಕ ದಕ್ಷಿಣ ಭಾರತೀಯ ಬಾಳೆಎಲೆ ಊಟ (Meals)
              </h3>
              <p>
                ಬಿಸಿ ಅನ್ನ, ಕರಾವಳಿ ಸಾಂಬಾರ್, ಮೆಣಸಿನ ರಸಂ, ಪಲ್ಯ, ಸುವಾಸಿತ ಕೂಟು, ತಾಜಾ ಮೊಸರು ಮತ್ತು ಸಿಹಿ ಪಾಯಸ ಒಳಗೊಂಡ ಸಂಪೂರ್ಣ ಸಾತ್ವಿಕ ಊಟ. ಇದು ಹೊಟ್ಟೆಗೆ ಹಿತ ಮತ್ತು ಪ್ರಯಾಣಕ್ಕೆ ಹಗುರ.
              </p>
            </div>

            {/* Dish 2 */}
            <div style={{ marginBottom: '35px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/ghee-podi-idli-udupi.webp" 
                  alt="ತುಪ್ಪದ ಪುಡಿ ತಟ್ಟೆ ಇಡ್ಲಿ ಮತ್ತು ಕೊಟ್ಟೆ ಕಡಬು" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '380px', objectFit: 'cover' }} 
                />
              </div>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                ೨. ತುಪ್ಪದ ಪುಡಿ ತಟ್ಟೆ ಇಡ್ಲಿ & ಕೊಟ್ಟೆ ಕಡಬು
              </h3>
              <p>
                ಹೂವಿನಂತೆ ಮೃದುವಾಗಿ ಬೆಂದ ಇಡ್ಲಿಗಳಿಗೆ ಅಪ್ಪಟ ದೇಸಿ ತುಪ್ಪ ಮತ್ತು ಖಾರದ ಪುಡಿ ಮಸಾಲೆ. ಬೆಳಗಿನ ದರ್ಶನದ ನಂತರ ಉಪಹಾರಕ್ಕೆ ಇದು ಭಕ್ತರ ಮೆಚ್ಚಿನ ತಿನಿಸು.
              </p>
            </div>

            {/* Dish 3 */}
            <div style={{ marginBottom: '35px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/filter-coffee-mathuram-cafe.webp" 
                  alt="ಹಿತ್ತಾಳೆ ಲೋಟದಲ್ಲಿ ಫಿಲ್ಟರ್ ಕಾಫಿ" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '380px', objectFit: 'cover' }} 
                />
              </div>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                ೩. ಕುಂಭಕೋಣಂ ಡಿಗ್ರಿ ಫಿಲ್ಟರ್ ಕಾಫಿ
              </h3>
              <p>
                ತಾಜಾ ಕಾಫಿ ಬೀಜಗಳ ಡಿಕಾಕ್ಷನ್‌ನಿಂದ ಹಿತ್ತಾಳೆ ಲೋಟದಲ್ಲಿ ನೊರೆ ತುಂಬಿದ ಬಿಸಿ ಕಾಫಿ. ಮುಂದಿನ ಪ್ರಯಾಣಕ್ಕೆ ಹೊಸ ಚೈತನ್ಯ ತುಂಬುವ ಅಮೃತ.
              </p>
            </div>

            <div className="cta-box" style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '30px', borderRadius: '12px', textAlign: 'center', marginTop: '40px' }}>
              <h3 className="gold-text" style={{ marginBottom: '15px', fontSize: '1.4rem' }}>
                ಈ ವಾರಾಂತ್ಯದಲ್ಲಿ ಉಡುಪಿ ದೇವಾಲಯಗಳ ದರ್ಶನಕ್ಕೆ ಬರುತ್ತಿದ್ದೀರಾ?
              </h3>
              <p style={{ marginBottom: '20px', maxWidth: '600px', margin: '0 auto 20px' }}>
                ಕರಾವಳಿ ಕರ್ನಾಟಕದ ಅತ್ಯುತ್ತಮ ಸಾತ್ವಿಕ ಊಟದ ಅನುಭವಕ್ಕಾಗಿ ಬ್ರಹ್ಮಾವರದ NH 66 ಹೆದ್ದಾರಿಯಲ್ಲಿರುವ ಮಥುರಾಮ್ ಕೆಫೆಗೆ ಭೇಟಿ ನೀಡಿ.
              </p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn btn-primary">ಮೆನು ವೀಕ್ಷಿಸಿ</Link>
                <Link to="/travel-guide/udupi-2-day-itinerary" className="btn btn-secondary">೨ ದಿನಗಳ ಉಡುಪಿ ಪ್ರವಾಸ ಮಾರ್ಗದರ್ಶಿ</Link>
                <a 
                  href="https://maps.app.goo.gl/u8UTmtSuDWRUdk6Q9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  📍 ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ದಾರಿ ನೋಡಿ
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Post8;
