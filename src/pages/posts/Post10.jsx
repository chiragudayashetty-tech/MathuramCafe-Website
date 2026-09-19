import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFire, 
  FaHeart, 
  FaMagic, 
  FaUtensils, 
  FaCoffee, 
  FaStar, 
  FaMapMarkerAlt, 
  FaLightbulb,
  FaSmileBeam,
  FaCheckCircle
} from 'react-icons/fa';
import BlogLangToggle from '../../components/BlogLangToggle';

const Post10 = () => {
  const [lang, setLang] = useState('en');
  const [selectedHack, setSelectedHack] = useState(0);

  const hacksEn = [
    {
      title: "1. The 'Sambar Well' Technique",
      icon: "🌊",
      desc: "Create a small indentation in the center of your Thatte Idli or Dosa palya, pour a spoonful of hot ghee and a splash of boiling Udupi sambar into the well, and let it infuse for 10 seconds before your first bite."
    },
    {
      title: "2. The Dual-Chutney Swirl",
      icon: "🌪️",
      desc: "Never dip into coconut chutney and tomato-podi chutney separately. Drag your crispy dosa corner across both simultaneously for a creamy-sweet-spicy flavor explosion."
    },
    {
      title: "3. The 3-Inch Davarah Pour Rule",
      icon: "☕",
      desc: "Before taking your first sip of Kumbakonam degree filter coffee, pour it from the tumbler into the brass davarah from a height of 3-4 inches twice. This aerates the milk and creates a velvety micro-foam head."
    }
  ];

  const hacksKn = [
    {
      title: "೧. 'ಸಾಂಬಾರ್ ಬಾವಿ' ಸೀಕ್ರೆಟ್ ಟೆಕ್ನಿಕ್",
      icon: "🌊",
      desc: "ಮೃದುವಾದ ತಟ್ಟೆ ಇಡ್ಲಿಯ ಮಧ್ಯಭಾಗದಲ್ಲಿ ಸಣ್ಣ ಗುಂಡಿ ಮಾಡಿ, ಅದರೊಳಗೆ ಒಂದು ಚಮಚ ಬಿಸಿ ತುಪ್ಪ ಮತ್ತು ಸಾಂಬಾರ್ ಸುರಿದು, 10 ಸೆಕೆಂಡು ನೆನೆಯಲು ಬಿಟ್ಟು ತಿನ್ನಿ. ರುಚಿ ಸ್ವರ್ಗಸದೃಶ!"
    },
    {
      title: "೨. ಡ್ಯುಯಲ್-ಚಟ್ನಿ ಮಿಕ್ಸ್ ಸ್ವಿರ್ಲ್",
      icon: "🌪️",
      desc: "ತೆಂಗಿನಕಾಯಿ ಚಟ್ನಿ ಮತ್ತು ಕೆಂಪು ಚಟ್ನಿಯನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ತಿನ್ನುವ ಬದಲು, ಗರಿಗರಿ ದೋಸೆಯ ತುದಿಯನ್ನು ಎರಡೂ ಚಟ್ನಿಗಳಲ್ಲಿ ಏಕಕಾಲದಲ್ಲಿ ಅದ್ದಿ ಸವಿಯಿರಿ."
    },
    {
      title: "೩. ೩-ಇಂಚು ಹಿತ್ತಾಳೆ ಲೋಟದ ಕಾಫಿ ನೊರೆ ರೂಲ್",
      icon: "☕",
      desc: "ಫಿಲ್ಟರ್ ಕಾಫಿ ಕುಡಿಯುವ ಮುನ್ನ, ಹಿತ್ತಾಳೆ ಲೋಟದಿಂದ ದವರಾ ಪಾತ್ರೆಗೆ 3-4 ಇಂಚು ಎತ್ತರದಿಂದ ಎರಡು ಬಾರಿ ಆಡಿಸಿ. ಇದರಿಂದ ಕಾಫಿಯಲ್ಲಿ ಕೆನೆಯಂತಹ ಮೃದು ನೊರೆ ಉತ್ಪತ್ತಿಯಾಗುತ್ತದೆ."
    }
  ];

  const hacks = lang === 'en' ? hacksEn : hacksKn;

  return (
    <div className="container" style={{ paddingTop: '180px', paddingBottom: '80px', maxWidth: '880px', minHeight: '80vh' }}>
      <Helmet>
        <title>
          {lang === 'en'
            ? "The Secret Science of Udupi Ghee Roast & Dosa Cravings | Mathuram Cafe"
            : "ಉಡುಪಿ ತುಪ್ಪದ ರೋಸ್ಟ್ ರಹಸ್ಯ ಮತ್ತು ದೋಸೆ ಕ್ರೇವಿಂಗ್ ಸೈನ್ಸ್ | ಮಥುರಾಮ್ ಕೆಫೆ"}
        </title>
        <meta 
          name="description" 
          content={lang === 'en'
            ? "Why is Udupi Masala Dosa and Thatte Idli at Mathuram Cafe so addictive? Uncover the 4 secret culinary laws, fermentation science, and local foodie hacks."
            : "ಮಥುರಾಮ್ ಕೆಫೆಯ ತುಪ್ಪದ ಮಸಾಲ ದೋಸೆ ಮತ್ತು ತಟ್ಟೆ ಇಡ್ಲಿ ಇಷ್ಟೊಂದು ಮೋಡಿ ಮಾಡುವುದು ಏಕೆ? ಕರಾವಳಿಯ ೪ ರಹಸ್ಯ ಪಾಕವಿಧಾನಗಳು ಮತ್ತು ಲೋಕಲ್ ಫುಡ್ಡೀ ಹ್ಯಾಕ್ಸ್ ಇಲ್ಲಿದೆ."}
        />
        <meta 
          name="keywords" 
          content="secret of udupi dosa, best ghee podi dosa udupi, mathuram cafe food science, authentic udupi sambar recipe, thatte idli hacks, udupi breakfast secrets" 
        />
      </Helmet>

      <BlogLangToggle lang={lang} setLang={setLang} />

      {/* Header Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '35px' }}
      >
        <span style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          background: 'rgba(212, 166, 90, 0.2)', 
          color: '#8c6014', 
          border: '1px solid rgba(212, 166, 90, 0.45)',
          padding: '6px 16px', 
          borderRadius: '30px', 
          fontSize: '0.85rem', 
          fontWeight: '700', 
          textTransform: 'uppercase', 
          letterSpacing: '0.5px',
          marginBottom: '16px'
        }}>
          <FaFire style={{ color: '#e63946' }} /> {lang === 'en' ? "Culinary Investigation & Food Science" : "ಆಹಾರ ವಿಜ್ಞಾನ ಮತ್ತು ರಹಸ್ಯ ತನಿಖೆ"}
        </span>

        <h1 className="gold-text" style={{ fontSize: '2.5rem', lineHeight: '1.25', marginBottom: '18px' }}>
          {lang === 'en'
            ? "The Midnight Dosa Craving & The Secret Science of Udupi Ghee Roast: Why Mathuram Cafe's Recipes Taste So Addictive"
            : "ಮಧ್ಯರಾತ್ರಿಯ ದೋಸೆ ಕ್ರೇವಿಂಗ್ ಮತ್ತು ಉಡುಪಿ ತುಪ್ಪದ ರೋಸ್ಟ್ ರಹಸ್ಯ: ಮಥುರಾಮ್ ಕೆಫೆಯ ರುಚಿ ಏಕೆ ಇಷ್ಟೊಂದು ಮೋಡಿ ಮಾಡುತ್ತದೆ?"}
        </h1>

        <div style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
          <span>{lang === 'en' ? "Published on: September 19, 2026" : "ಪ್ರಕಟಣೆ: ಸೆಪ್ಟೆಂಬರ್ 19, 2026"}</span>
          <span style={{ margin: '0 10px' }}>•</span>
          <span>{lang === 'en' ? "Reading Time: 4 Mins" : "ಓದುವ ಸಮಯ: ೪ ನಿಮಿಷಗಳು"}</span>
        </div>
      </motion.div>

      {/* Interactive Flavor & Crunch Meter */}
      <motion.div 
        className="glass-panel"
        style={{ 
          background: 'linear-gradient(135deg, #ffffff 0%, #fdfaf6 100%)', 
          border: '2px solid var(--color-secondary)', 
          padding: '28px', 
          borderRadius: '16px',
          marginBottom: '35px',
          boxShadow: 'var(--shadow-md)'
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          <h3 className="gold-text" style={{ fontSize: '1.25rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaMagic style={{ color: 'var(--color-secondary)' }} /> {lang === 'en' ? "The Mathuram Dosa Flavor Matrix" : "ಮಥುರಾಮ್ ದೋಸೆಯ ರುಚಿಯ ಮಾಪನ"}
          </h3>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#4E6B3A', background: 'rgba(78, 107, 58, 0.12)', padding: '4px 12px', borderRadius: '20px' }}>
            ✓ {lang === 'en' ? "100% Pure Desi Ghee Tested" : "೧೦೦% ಶುದ್ಧ ತುಪ್ಪ ದೃಢೀಕೃತ"}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', fontWeight: 'bold', textTransform: 'uppercase' }}>
              {lang === 'en' ? "Outer Shell Crunch" : "ಹೊರಭಾಗದ ಗರಿಗರಿತನ"}
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#e67e22', margin: '6px 0' }}>10 / 10</div>
            <div style={{ height: '6px', background: '#f5ebe0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', background: '#e67e22' }}></div>
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', fontWeight: 'bold', textTransform: 'uppercase' }}>
              {lang === 'en' ? "Molten Ghee Aroma" : "ಶುದ್ಧ ತುಪ್ಪದ ಸುವಾಸನೆ"}
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#f1c40f', margin: '6px 0' }}>10 / 10</div>
            <div style={{ height: '6px', background: '#f5ebe0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', background: '#f1c40f' }}></div>
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', fontWeight: 'bold', textTransform: 'uppercase' }}>
              {lang === 'en' ? "Podi Spice Alchemy" : "ಖಾರದ ಪುಡಿ ತೀವ್ರತೆ"}
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#e74c3c', margin: '6px 0' }}>9.5 / 10</div>
            <div style={{ height: '6px', background: '#f5ebe0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '95%', height: '100%', background: '#e74c3c' }}></div>
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', fontWeight: 'bold', textTransform: 'uppercase' }}>
              {lang === 'en' ? "Craving Factor" : "ಕ್ರೇವಿಂಗ್ ಮಟ್ಟ"}
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#4E6B3A', margin: '6px 0' }}>100%</div>
            <div style={{ height: '6px', background: '#f5ebe0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', background: '#4E6B3A' }}></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Article Content */}
      <article className="glass-panel" style={{ padding: '40px 35px', borderRadius: '16px', lineHeight: '1.85', color: 'var(--color-text)', background: '#fff' }}>
        
        {lang === 'en' ? (
          <>
            <p style={{ fontSize: '1.15rem', marginBottom: '25px' }}>
              Have you ever found yourself sitting at home in the middle of the week, suddenly hit by an uncontrollable, mouth-watering thought of a golden, crisp, ghee-drenched Masala Dosa paired with piping hot Udupi sambar? 
            </p>

            <p style={{ marginBottom: '25px' }}>
              You are not alone. There is an actual biological and culinary reason why food from <strong>Mathuram Cafe in Brahmavara</strong> triggers such intense satisfaction. Today, we are breaking down the secret science behind the flavors that have captivated Udupi, Manipal, and highway food lovers.
            </p>

            {/* Visual */}
            <div style={{ borderRadius: '14px', overflow: 'hidden', margin: '30px 0' }}>
              <img 
                src="/assets/Photos/Food/best-masala-dosa-brahmavara.webp" 
                alt="Golden Ghee Roast Dosa at Mathuram Cafe Brahmavara Udupi" 
                style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover' }} 
                loading="lazy"
              />
              <div style={{ padding: '8px 12px', background: '#fdfaf6', fontSize: '0.85rem', color: 'var(--color-text-light)', textAlign: 'center', borderBottom: '1px solid var(--color-border)' }}>
                The Golden Standard: Crispy on the outside, feather-light on the inside.
              </div>
            </div>

            <h2 className="gold-text" style={{ fontSize: '1.85rem', marginTop: '35px', marginBottom: '18px' }}>
              The 4 Secret Culinary Laws of Mathuram Cafe
            </h2>

            {/* Law 1 */}
            <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '22px', marginBottom: '22px' }}>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                1. The 14-Hour Wild Fermentation Science
              </h3>
              <p>
                Great dosas and idlis aren't made with yeast or baking soda. At Mathuram Cafe, the batter is stone-ground and allowed to ferment naturally for 12 to 14 hours in the coastal tropical temperature. This develops natural lactic acid and complex aromatics, producing that signature slight tang that makes every bite deeply satisfying without causing heaviness.
              </p>
            </div>

            {/* Law 2 */}
            <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '22px', marginBottom: '22px' }}>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                2. The Seasoned Cast Iron Tawa & Desi Ghee Maillard Reaction
              </h3>
              <p>
                When our chefs ladle batter onto heavy seasoned cast-iron griddles and swirl on generous ladles of pure desi ghee, a culinary phenomenon called the <em>Maillard reaction</em> occurs. The milk solids in the ghee caramelize at high heat, turning the dosa skin into a paper-thin, shatteringly crisp golden crust while locking in moisture inside.
              </p>
            </div>

            {/* Law 3 */}
            <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '22px', marginBottom: '22px' }}>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                3. The Fire-Roasted Gunpowder Podi Alchemy
              </h3>
              <p>
                Our signature 'Podi' is not generic store-bought powder. Roasted chana dal, urad dal, Byadgi red chillies, curry leaves, and a dash of hing are toasted over gentle flames and coarsely ground. The coarse texture creates millions of flavor pockets that trap melting ghee over soft Thatte Idli.
              </p>
            </div>

            {/* Law 4 */}
            <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '22px', marginBottom: '22px' }}>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                4. The Brass Davarah Degree Coffee Euphoria
              </h3>
              <p>
                Why does filter coffee taste better in brass? Traditional brass ware conducts heat evenly and enhances the aromatic bouquet of freshly extracted chicory decoction and boiled full-fat milk, delivering that legendary post-meal caffeine high.
              </p>
            </div>

            {/* Visual 2 */}
            <div style={{ borderRadius: '14px', overflow: 'hidden', margin: '30px 0' }}>
              <img 
                src="/assets/Photos/Food/Thatte Idli.webp" 
                alt="Fluffy Ghee Podi Thatte Idli at Mathuram Cafe Udupi" 
                style={{ width: '100%', height: 'auto', maxHeight: '380px', objectFit: 'cover' }} 
                loading="lazy"
              />
            </div>

            {/* Interactive Hacks Section */}
            <h2 className="gold-text" style={{ fontSize: '1.85rem', marginTop: '40px', marginBottom: '15px' }}>
              3 Local Foodie Hacks You Must Try on Your Next Visit
            </h2>
            <p style={{ marginBottom: '20px' }}>
              Click on each hack below to discover how seasoned Udupi foodies enjoy their meal:
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {hacks.map((h, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedHack(i)}
                  className={`btn ${selectedHack === i ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '8px 18px', fontSize: '0.88rem', textTransform: 'none' }}
                >
                  <span>{h.icon}</span> {h.title.split('.')[0]}
                </button>
              ))}
            </div>

            <motion.div 
              key={selectedHack}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #f7ece0 100%)', border: '1.5px solid var(--color-secondary)', padding: '24px', borderRadius: '12px', marginBottom: '35px' }}
            >
              <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '8px' }}>
                {hacks[selectedHack].icon} {hacks[selectedHack].title}
              </h4>
              <p style={{ margin: 0, color: 'var(--color-text)', fontSize: '1rem' }}>
                {hacks[selectedHack].desc}
              </p>
            </motion.div>

            {/* Bottom CTA Box */}
            <div style={{ 
              background: 'linear-gradient(135deg, #fdf8f0 0%, #f7ece0 100%)', 
              border: '2px solid var(--color-secondary)', 
              padding: '35px 25px', 
              borderRadius: '16px', 
              textAlign: 'center',
              marginTop: '45px'
            }}>
              <h3 className="gold-text" style={{ fontSize: '1.65rem', marginBottom: '10px' }}>
                Craving That Perfect Ghee Podi Dosa Right Now?
              </h3>
              <p style={{ maxWidth: '650px', margin: '0 auto 22px', color: 'var(--color-text)', fontSize: '1.05rem' }}>
                Don't wait for the weekend. Stop by Mathuram Cafe on NH 66, Brahmavara and experience the true science of flavor!
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '1rem' }}>
                  <FaUtensils style={{ marginRight: '8px' }} /> View Full Food Menu
                </Link>
                <a 
                  href="https://maps.app.goo.gl/u8UTmtSuDWRUdk6Q9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{ padding: '12px 26px', fontSize: '1rem' }}
                >
                  <FaMapMarkerAlt style={{ marginRight: '8px' }} /> Get Driving Directions
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <p style={{ fontSize: '1.15rem', marginBottom: '25px' }}>
              ವಾರದ ನಡುವೆ ಮನೆಯಲ್ಲಿ ಕುಳಿತಿರುವಾಗ, ಬಿಸಿಬಿಸಿಯಾದ ಗರಿಗರಿ ತುಪ್ಪದ ಮಸಾಲ ದೋಸೆ ಹಾಗೂ ಘಮಘಮಿಸುವ ಉಡುಪಿ ಸಾಂಬಾರ್ ನೆನೆದು ನಿಮ್ಮ ಬಾಯಲ್ಲೂ ನೀರೂರಿದ ಅನುಭವವಾಗಿದೆಯೇ?
            </p>

            <p style={{ marginBottom: '25px' }}>
              ಇದಕ್ಕೆ ಕೇವಲ ಹಸಿವು ಮಾತ್ರ ಕಾರಣವಲ್ಲ, ಇದರ ಹಿಂದೆ ಆಳವಾದ ಪಾಕವಿಜ್ಞಾನ ಹಾಗೂ ಕರಾವಳಿಯ ನೈಜ ಪಾಕಪದ್ಧತಿಯ ರಹಸ್ಯವಿದೆ! <strong>ಬ್ರಹ್ಮಾವರದ ಮಥುರಾಮ್ ಕೆಫೆ</strong>ಯ ಆಹಾರ ಇಷ್ಟೊಂದು ಮೋಡಿ ಮಾಡಲು ಕಾರಣವೇನು? ಬನ್ನಿ, ಇದರ ರಹಸ್ಯವನ್ನು ತಿಳಿಯೋಣ.
            </p>

            {/* Visual */}
            <div style={{ borderRadius: '14px', overflow: 'hidden', margin: '30px 0' }}>
              <img 
                src="/assets/Photos/Food/best-masala-dosa-brahmavara.webp" 
                alt="ಮಥುರಾಮ್ ಕೆಫೆಯ ಗರಿಗರಿ ತುಪ್ಪದ ಮಸಾಲ ದೋಸೆ" 
                style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover' }} 
                loading="lazy"
              />
              <div style={{ padding: '8px 12px', background: '#fdfaf6', fontSize: '0.85rem', color: 'var(--color-text-light)', textAlign: 'center', borderBottom: '1px solid var(--color-border)' }}>
                ಚಿನ್ನದ ಬಣ್ಣದ ಗರಿಗರಿ ದೋಸೆ: ಹೊರಭಾಗ ಗರಿಗರಿ, ಒಳಭಾಗ ಹೂವಿನಂತೆ ಮೃದು.
              </div>
            </div>

            <h2 className="gold-text" style={{ fontSize: '1.85rem', marginTop: '35px', marginBottom: '18px' }}>
              ಮಥುರಾಮ್ ಕೆಫೆಯ ೪ ಅದ್ಭುತ ಪಾಕವಿಧಾನ ಸೂತ್ರಗಳು
            </h2>

            {/* Law 1 */}
            <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '22px', marginBottom: '22px' }}>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                ೧. ೧೪ ಗಂಟೆಗಳ ನೈಸರ್ಗಿಕ ಹುದುಗುವಿಕೆ (Fermentation)
              </h3>
              <p>
                ಉತ್ತಮ ದೋಸೆ ಮತ್ತು ಇಡ್ಲಿಗೆ ಯಾವುದೇ ಸೋಡಾ ಅಥವಾ ಈಸ್ಟ್ ಬಳಸುವುದಿಲ್ಲ. ಕಲ್ಲಿನ ರುಬ್ಬುಗುಂಡಿನಲ್ಲಿ ಅರೆದ ಹಿಟ್ಟನ್ನು ಕರಾವಳಿಯ ಉಷ್ಣಾಂಶದಲ್ಲಿ 12 ರಿಂದ 14 ಗಂಟೆಗಳ ಕಾಲ ನೈಸರ್ಗಿಕವಾಗಿ ಹುದುಗಿಸಲಾಗುತ್ತದೆ. ಇದು ಜೀರ್ಣಕ್ರಿಯೆಗೆ ಹಿತ ನೀಡುವ ಜೊತೆಗೆ ನಾಲಿಗೆಗೆ ಅಪೂರ್ವ ರುಚಿ ನೀಡುತ್ತದೆ.
              </p>
            </div>

            {/* Law 2 */}
            <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '22px', marginBottom: '22px' }}>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                ೨. ಕಾದ ಕಬ್ಬಿಣದ ಹೆಂಚು ಮತ್ತು ದೇಸಿ ತುಪ್ಪದ ಕ್ಯಾರಮೆಲೈಸೇಶನ್
              </h3>
              <p>
                ಸಾಂಪ್ರದಾಯಿಕ ಕಬ್ಬಿಣದ ಹೆಂಚಿನ ಮೇಲೆ ಹಿಟ್ಟು ಹರಡಿ, ಶುದ್ಧ ದೇಸಿ ತುಪ್ಪ ಹಾಕಿದಾಗ ಉಂಟಾಗುವ ಶಾಖದಿಂದ ದೋಸೆಯ ಹೊರಮೈ ಬಂಗಾರದಂತೆ ಹೊಳೆಯುತ್ತಾ ಗರಿಗರಿಯಾಗುತ್ತದೆ. ಒಳಭಾಗ ಮೃದುವಾಗಿ ಉಳಿದುಕೊಳ್ಳುತ್ತದೆ.
              </p>
            </div>

            {/* Law 3 */}
            <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '22px', marginBottom: '22px' }}>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                ೩. ಹುರಿದ ಬ್ಯಾಡಗಿ ಮೆಣಸಿನ ಗನ್‌ಪೌಡರ್ ಚಟ್ನಿಪುಡಿ
              </h3>
              <p>
                ಕಡಲೆಬೇಳೆ, ಉದ್ದಿನಬೇಳೆ, ಕರಿಬೇವಿನ ಸೊಪ್ಪು, ಶುದ್ಧ ಇಂಗು ಹಾಗೂ ಬಣ್ಣ ಮತ್ತು ಘಾಟಿಗೆ ಬ್ಯಾಡಗಿ ಮೆಣಸನ್ನು ಮಂದ ಉರಿಯಲ್ಲಿ ಹುರಿದು ಸಿದ್ಧಪಡಿಸುವ ನಮ್ಮ ವಿಶೇಷ ಚಟ್ನಿಪುಡಿ ತುಪ್ಪದೊಂದಿಗೆ ಬೆರೆತಾಗ ಅದ್ಭುತ ರುಚಿ ನೀಡುತ್ತದೆ.
              </p>
            </div>

            {/* Law 4 */}
            <div style={{ background: '#fdfaf6', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '22px', marginBottom: '22px' }}>
              <h3 className="gold-text" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                ೪. ಹಿತ್ತಾಳೆ ದವರಾ ಲೋಟದ ಫಿಲ್ಟರ್ ಕಾಫಿಯ ಅಮೃತ
              </h3>
              <p>
                ಹಿತ್ತಾಳೆ ಪಾತ್ರೆಯು ಕಾಫಿಯ ಶಾಖವನ್ನು ಸಮವಾಗಿ ಕಾಪಾಡುತ್ತದೆ. ತಾಜಾ ಕಾಫಿ ಡಿಕಾಕ್ಷನ್ ಮತ್ತು ನೊರೆ ಹಾಲಿನ ಸಮ್ಮಿಶ್ರಣವು ಊಟದ ನಂತರ ಮನಸ್ಸಿಗೆ ಪರಮ ತೃಪ್ತಿ ನೀಡುತ್ತದೆ.
              </p>
            </div>

            {/* Visual 2 */}
            <div style={{ borderRadius: '14px', overflow: 'hidden', margin: '30px 0' }}>
              <img 
                src="/assets/Photos/Food/Thatte Idli.webp" 
                alt="ಮಥುರಾಮ್ ಕೆಫೆಯ ಸಾಫ್ಟ್ ತಟ್ಟೆ ಇಡ್ಲಿ" 
                style={{ width: '100%', height: 'auto', maxHeight: '380px', objectFit: 'cover' }} 
                loading="lazy"
              />
            </div>

            {/* Interactive Hacks Section */}
            <h2 className="gold-text" style={{ fontSize: '1.85rem', marginTop: '40px', marginBottom: '15px' }}>
              ನಿಮ್ಮ ಮುಂದಿನ ಭೇಟಿಯಲ್ಲಿ ನೀವು ಟ್ರೈ ಮಾಡಬೇಕಾದ ೩ ಲೋಕಲ್ ಫುಡ್ಡೀ ಹ್ಯಾಕ್ಸ್!
            </h2>
            <p style={{ marginBottom: '20px' }}>
              ಸ್ಥಳೀಯ ಆಹಾರ ಪ್ರಿಯರು ಹೇಗೆ ಊಟ ಸವಿಯುತ್ತಾರೆ ಎಂದು ತಿಳಿಯಲು ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ:
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {hacks.map((h, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedHack(i)}
                  className={`btn ${selectedHack === i ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '8px 18px', fontSize: '0.88rem', textTransform: 'none' }}
                >
                  <span>{h.icon}</span> {h.title.split('.')[0]}
                </button>
              ))}
            </div>

            <motion.div 
              key={selectedHack}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #f7ece0 100%)', border: '1.5px solid var(--color-secondary)', padding: '24px', borderRadius: '12px', marginBottom: '35px' }}
            >
              <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '8px' }}>
                {hacks[selectedHack].icon} {hacks[selectedHack].title}
              </h4>
              <p style={{ margin: 0, color: 'var(--color-text)', fontSize: '1rem' }}>
                {hacks[selectedHack].desc}
              </p>
            </motion.div>

            {/* Bottom CTA Box */}
            <div style={{ 
              background: 'linear-gradient(135deg, #fdf8f0 0%, #f7ece0 100%)', 
              border: '2px solid var(--color-secondary)', 
              padding: '35px 25px', 
              borderRadius: '16px', 
              textAlign: 'center',
              marginTop: '45px'
            }}>
              <h3 className="gold-text" style={{ fontSize: '1.65rem', marginBottom: '10px' }}>
                ಈಗಲೇ ತುಪ್ಪದ ಮಸಾಲ ದೋಸೆ ತಿನ್ನಬೇಕೆನಿಸುತ್ತಿದೆಯೇ?
              </h3>
              <p style={{ maxWidth: '650px', margin: '0 auto 22px', color: 'var(--color-text)', fontSize: '1.05rem' }}>
                ವಾರಾಂತ್ಯದವರೆಗೆ ಕಾಯಬೇಡಿ! ಇಂದೇ ಬ್ರಹ್ಮಾವರದ NH 66 ಮಥುರಾಮ್ ಕೆಫೆಗೆ ಬಂದು ಈ ಅದ್ಭುತ ರುಚಿಯನ್ನು ಅನುಭವಿಸಿ!
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '1rem' }}>
                  <FaUtensils style={{ marginRight: '8px' }} /> ಸಂಪೂರ್ಣ ಮೆನು ನೋಡಿ
                </Link>
                <a 
                  href="https://maps.app.goo.gl/u8UTmtSuDWRUdk6Q9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{ padding: '12px 26px', fontSize: '1rem' }}
                >
                  <FaMapMarkerAlt style={{ marginRight: '8px' }} /> ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ದಾರಿ
                </a>
              </div>
            </div>
          </>
        )}

      </article>
    </div>
  );
};

export default Post10;
