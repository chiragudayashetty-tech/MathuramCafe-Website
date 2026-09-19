import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BlogLangToggle from '../../components/BlogLangToggle';

const Post5 = () => {
  const [lang, setLang] = useState('en');

  return (
    <div className="container" style={{ paddingTop: '180px', paddingBottom: '80px', maxWidth: '800px', minHeight: '80vh' }}>
      <Helmet>
        <title>
          {lang === 'en'
            ? "Why Mathuram Cafe is the Best Pure Veg Restaurant in Udupi"
            : "ಇಡೀ ಉಡುಪಿಯಲ್ಲಿ ಮಥುರಾಮ್ ಕೆಫೆ ಏಕೆ ನಂಬರ್ 1 ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ರೆಸ್ಟೋರೆಂಟ್?"}
        </title>
        <meta 
          name="description" 
          content={lang === 'en'
            ? "Discover why Mathuram Cafe in Brahmavara is rated the best pure veg restaurant in whole Udupi. Pure vegetarian Udupi thalis, dosas, and family dining."
            : "ಬ್ರಹ್ಮಾವರದ ಮಥುರಾಮ್ ಕೆಫೆ ಇಡೀ ಉಡುಪಿ ಜಿಲ್ಲೆಯಲ್ಲೇ ಅತ್ಯುತ್ತಮ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಹೋಟೆಲ್ ಎನಿಸಿಕೊಳ್ಳಲು ಕಾರಣವೇನು? ಸಾಂಪ್ರದಾಯಿಕ ಊಟ, ಕೊಟ್ಟೆ ಕಡಬು ಮತ್ತು ತುಪ್ಪದ ದೋಸೆಗಳು."}
        />
        <meta 
          name="keywords" 
          content="ಉಡುಪಿಯ ನಂಬರ್ 1 ಹೋಟೆಲ್, ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ರೆಸ್ಟೋರೆಂಟ್ ಉಡುಪಿ, ಕೊಟ್ಟೆ ಕಡಬು ಉಡುಪಿ, ಬಾಳೆಎಲೆ ಊಟ ಬ್ರಹ್ಮಾವರ, ಮಥುರಾಮ್ ಕೆಫೆ, best veg restaurant in whole udupi, top pure veg dining udupi, authentic udupi cuisine" 
        />
      </Helmet>

      <BlogLangToggle lang={lang} setLang={setLang} />

      {lang === 'en' ? (
        <>
          <h1 className="gold-text" style={{ marginBottom: '30px', fontSize: '2.5rem' }}>
            Why Mathuram Cafe is the Best Pure Veg Restaurant in Udupi
          </h1>
          
          <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              There is a profound magic in food that feels like home. When you travel through the spiritual and cultural heart of Karnataka, you aren't just looking for a meal; you are searching for an experience that warms your soul. Among the countless eateries dotted along the coastal belt, one place has quietly captured the hearts of locals and travelers alike: <strong>Mathuram Cafe</strong>. It isn't just another stop on the map—it has earned the reputation of being the <strong>best pure veg restaurant in Udupi district</strong>.
            </p>

            <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="/assets/Photos/Resturant/Entrace.webp" alt="Exterior entrance of Mathuram Cafe, the best pure veg restaurant in Udupi" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                Welcome home: The inviting entrance of Mathuram Cafe in Brahmavara, Udupi.
              </div>
            </div>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>More Than Just a Meal, It’s a Memory</h3>
            <p style={{ marginBottom: '20px' }}>
              Udupi is world-renowned for its vegetarian cuisine, meaning the standards for a <strong>pure veg restaurant in Udupi</strong> are astronomically high. But at Mathuram Cafe, we don't just cook food; we craft memories. From the moment you walk through our doors, the aroma of roasted coffee beans, fresh curry leaves, and pure melting ghee instantly transports you back to the nostalgia of a childhood kitchen. We believe that true hospitality is about feeding the soul as much as the stomach.
            </p>
            
            <p style={{ marginBottom: '20px' }}>
              Families travel from all over to experience our authentic Udupi cuisine. Whether it's the comforting warmth of a fresh South Indian Thali or the crisp perfection of our dosas, every dish is prepared with an unwavering commitment to purity, hygiene, and tradition.
            </p>

            <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="/assets/Photos/Food/south-indian-meals-brahmavara.webp" alt="Authentic South Indian Thali Meals at Mathuram Cafe" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                The soul-satisfying South Indian Thali—a feast of traditional Udupi flavors.
              </div>
            </div>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>Why We Stand Out Among Udupi Vegetarian Restaurants</h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Uncompromising Purity:</strong> We are a 100% pure vegetarian establishment. You can dine with absolute peace of mind knowing that our kitchen strictly adheres to the highest standards of vegetarian cooking.</li>
              <li style={{ marginBottom: '10px' }}><strong>A Family-First Atmosphere:</strong> Finding a clean, comfortable, and spacious <strong>family restaurant in Udupi</strong> can be tough during peak tourist seasons. With ample seating, pristine washrooms, and dedicated family sections, we ensure your loved ones dine in complete comfort.</li>
              <li style={{ marginBottom: '10px' }}><strong>The Taste of Authenticity:</strong> Our signature <strong>Kotte Kadubu</strong> (idli steamed in jackfruit leaves) and Ghee Podi Thatte Idli are crafted using recipes passed down through generations. It is this dedication to authenticity that makes us a must-visit destination.</li>
            </ul>

            <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="/assets/Photos/Food/Kotte Idli.webp" alt="Traditional Kotte Idli steamed in jackfruit leaves" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                Traditional Kotte Kadubu (Idli in jackfruit leaves) served piping hot.
              </div>
            </div>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>Experience It For Yourself</h3>
            <p style={{ marginBottom: '20px' }}>
              We pour our hearts into every meal served. We invite you to step away from the fast-paced world, sit down with your family, and experience what many are calling the <strong>best pure veg restaurant in the whole Udupi region</strong>. Come as a guest, leave as family.
            </p>

            <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                Ready to experience the magic? <Link to="/menu" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Explore our menu</Link> or get directions on our <Link to="/contact" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Contact page</Link>. We can't wait to serve you!
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="gold-text" style={{ marginBottom: '30px', fontSize: '2.4rem' }}>
            ಇಡೀ ಉಡುಪಿಯಲ್ಲಿ ಮಥುರಾಮ್ ಕೆಫೆ ಏಕೆ ನಂಬರ್ 1 ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ರೆಸ್ಟೋರೆಂಟ್?
          </h1>
          
          <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              ಮನೆಯೂಟದ ಸವಿಯಿರುವ ಆಹಾರದಲ್ಲಿ ಒಂದು ಅಪೂರ್ವ ಮೋಡಿಯಿದೆ. ಕರ್ನಾಟಕದ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ಧಾರ್ಮಿಕ ಕೇಂದ್ರವಾದ ಉಡುಪಿಯಲ್ಲಿ ಸಂಚರಿಸುವಾಗ, ಪ್ರತಿಯೊಬ್ಬರೂ ಕೇವಲ ಊಟವನ್ನಷ್ಟೇ ಅಲ್ಲ, ಮನಸ್ಸಿಗೆ ತೃಪ್ತಿ ನೀಡುವ ಆತಿಥ್ಯವನ್ನು ಬಯಸುತ್ತಾರೆ. ಕರಾವಳಿ ತೀರದ ನೂರಾರು ಹೋಟೆಲ್‌ಗಳ ನಡುವೆ, <strong>ಬ್ರಹ್ಮಾವರದ ಮಥುರಾಮ್ ಕೆಫೆ</strong> ಸ್ಥಳೀಯರು ಹಾಗೂ ಪ್ರವಾಸಿಗರ ಹೃದಯ ಗೆದ್ದಿದೆ. ಇದು ಇಡೀ <strong>ಉಡುಪಿ ಜಿಲ್ಲೆಯ ಅತ್ಯುತ್ತಮ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಹೋಟೆಲ್</strong> ಎಂಬ ಖ್ಯಾತಿ ಪಡೆದಿದೆ.
            </p>

            <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="/assets/Photos/Resturant/Entrace.webp" alt="ಬ್ರಹ್ಮಾವರದ ಮಥುರಾಮ್ ಕೆಫೆಯ ಸುಂದರ ಪ್ರವೇಶದ್ವಾರ" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                ನಿಮ್ಮನ್ನು ಪ್ರೀತಿಯಿಂದ ಸ್ವಾಗತಿಸುವ ಬ್ರಹ್ಮಾವರದ ಮಥುರಾಮ್ ಕೆಫೆ.
              </div>
            </div>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>ಕೇವಲ ಊಟವಲ್ಲ, ಒಂದು ಸವಿನೆನಪು</h3>
            <p style={{ marginBottom: '20px' }}>
              ಉಡುಪಿಯ ಶುದ್ಧ ಸಸ್ಯಾಹಾರ ಜಾಗತಿಕ ಮಟ್ಟದಲ್ಲಿ ಪ್ರಸಿದ್ಧಿ ಪಡೆದಿದೆ. ಆದ್ದರಿಂದ ಇಲ್ಲಿನ ಜನರ ಆಹಾರದ ಗುಣಮಟ್ಟದ ನಿರೀಕ್ಷೆ ಅತ್ಯಂತ ಹೆಚ್ಚಿರುತ್ತದೆ. ಮಥುರಾಮ್ ಕೆಫೆಯಲ್ಲಿ ನಾವು ಕೇವಲ ಅಡುಗೆ ಮಾಡುವುದಿಲ್ಲ; ಸವಿನೆನಪುಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇವೆ. ಹೋಟೆಲ್ ಪ್ರವೇಶಿಸುತ್ತಿದ್ದಂತೆ ಬರುವ ಹುರಿದ ಕಾಫಿ ಬೀಜಗಳ, ತಾಜಾ ಕರಿಬೇವಿನ ಹಾಗೂ ಕರಗುವ ದೇಸಿ ತುಪ್ಪದ ಪರಿಮಳ ನಿಮ್ಮನ್ನು ಬಾಲ್ಯದ ಅಜ್ಜಿ ಮನೆಯ ಅಡುಗೆಮನೆಗೆ ಕರೆದೊಯ್ಯುತ್ತದೆ.
            </p>
            
            <p style={{ marginBottom: '20px' }}>
              ಸಾಂಪ್ರದಾಯಿಕ ದಕ್ಷಿಣ ಭಾರತೀಯ ಬಾಳೆಎಲೆ ಊಟವಿರಲಿ ಅಥವಾ ಗರಿಗರಿಯಾದ ದೋಸೆಗಳಿರಲಿ, ಪ್ರತಿಯೊಂದು ತಿನಿಸನ್ನು ಸಂಪೂರ್ಣ ಶುದ್ಧತೆ, ಶುಚಿತ್ವ ಮತ್ತು ಸಂಪ್ರದಾಯದೊಂದಿಗೆ ತಯಾರಿಸಲಾಗುತ್ತದೆ.
            </p>

            <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="/assets/Photos/Food/south-indian-meals-brahmavara.webp" alt="ಮಥುರಾಮ್ ಕೆಫೆಯ ಸಾಂಪ್ರದಾಯಿಕ ದಕ್ಷಿಣ ಭಾರತೀಯ ಊಟ" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                ಮನಸ್ಸು ಮತ್ತು ಹೊಟ್ಟೆ ಎರಡನ್ನೂ ತಣಿಸುವ ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪಿ ಊಟ.
              </div>
            </div>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>ಮಥುರಾಮ್ ಕೆಫೆಯ ಅಗ್ರಸ್ಥಾನಕ್ಕೆ ಕಾರಣಗಳೇನು?</h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>ಅಪ್ಪಟ ಶುದ್ಧ ಸಸ್ಯಾಹಾರ:</strong> ನಮ್ಮದು ೧೦೦% ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಹೋಟೆಲ್. ಯಾವುದೇ ಮಾಂಸಾಹಾರದ ಸಂಪರ್ಕವಿಲ್ಲದೆ ಅತ್ಯುನ್ನತ ಗುಣಮಟ್ಟದ ನಿಯಮಗಳನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಪಾಲಿಸಲಾಗುತ್ತದೆ.</li>
              <li style={{ marginBottom: '10px' }}><strong>ಕುಟುಂಬ ಸ್ನೇಹಿ ವಾತಾವರಣ:</strong> ಪ್ರವಾಸಿಗರ ದಟ್ಟಣೆಯ ಸಮಯದಲ್ಲಿಯೂ ಆರಾಮವಾಗಿ ಕುಳಿತುಕೊಳ್ಳಲು ವಿಶಾಲ ಆಸನ ವ್ಯವಸ್ಥೆ, ಸ್ವಚ್ಛ ಶೌಚಾಲಯಗಳು ಮತ್ತು ಪ್ರತ್ಯೇಕ ಫ್ಯಾಮಿಲಿ ಹಾಲ್ ಸೌಲಭ್ಯವಿದೆ.</li>
              <li style={{ marginBottom: '10px' }}><strong>ಪಾರಂಪರಿಕ ಕೊಟ್ಟೆ ಕಡಬು:</strong> ಹಲಸಿನ ಎಲೆಯಲ್ಲಿ ಹಬೆಯಲ್ಲಿ ಬೇಯಿಸಿದ ಸಾಂಪ್ರದಾಯಿಕ <strong>ಕೊಟ್ಟೆ ಕಡಬು (Kotte Idli)</strong> ಮತ್ತು ತುಪ್ಪದ ಪುಡಿ ತಟ್ಟೆ ಇಡ್ಲಿಗಳು ಇಲ್ಲಿನ ವಿಶೇಷ ಆಕರ್ಷಣೆ.</li>
            </ul>

            <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="/assets/Photos/Food/Kotte Idli.webp" alt="ಹಲಸಿನ ಎಲೆಯ ಸಾಂಪ್ರದಾಯಿಕ ಕೊಟ್ಟೆ ಕಡಬು" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                ಬಿಸಿಬಿಸಿಯಾಗಿ ಬಡಿಸುವ ಪಾರಂಪರಿಕ ಕೊಟ್ಟೆ ಕಡಬು.
              </div>
            </div>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>ನೀವೇ ಸ್ವತಃ ಅನುಭವಿಸಿ ನೋಡಿ</h3>
            <p style={{ marginBottom: '20px' }}>
              ಬಡಿಸುವ ಪ್ರತಿಯೊಂದು ತುತ್ತಿನಲ್ಲೂ ಪ್ರೀತಿ ಮತ್ತು ಕಾಳಜಿಯಿದೆ. ನಿಮ್ಮ ಕುಟುಂಬದೊಂದಿಗೆ ಬಂದು, ಇಡೀ ಉಡುಪಿಯ ಜನ ಮೆಚ್ಚಿದ ಈ ರುಚಿಯ ಅನುಭವವನ್ನು ನೀವೂ ಪಡೆಯಿರಿ. ಅತಿಥಿಯಾಗಿ ಬನ್ನಿ, ನಮ್ಮ ಕುಟುಂಬದವರಾಗಿ ಮರಳಿ!
            </p>

            <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                ಈ ರುಚಿಯ ಅನುಭವ ಪಡೆಯಲು ಸಿದ್ಧರೇ? <Link to="/menu" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>ಮೆನು ಪರಿಶೀಲಿಸಿ</Link> ಅಥವಾ ನಮ್ಮ <Link to="/contact" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>ಸಂಪರ್ಕ ಪುಟ</Link> ಮೂಲಕ ಲೊಕೇಶನ್ ಪಡೆಯಿರಿ!
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Post5;
