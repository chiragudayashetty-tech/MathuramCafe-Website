import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BlogLangToggle from '../../components/BlogLangToggle';

const Post4 = () => {
  const [lang, setLang] = useState('en');

  return (
    <div className="container" style={{ paddingTop: '180px', paddingBottom: '80px', maxWidth: '800px', minHeight: '80vh' }}>
      <Helmet>
        <title>
          {lang === 'en'
            ? "The Best Veg Restaurant Near NH 66: A Must-Stop Highway Oasis"
            : "ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ 66 ಬಳಿಯ ಅತ್ಯುತ್ತಮ ಸಸ್ಯಾಹಾರಿ ಹೋಟೆಲ್: ಮಥುರಾಮ್ ಕೆಫೆ"}
        </title>
        <meta 
          name="description" 
          content={lang === 'en'
            ? "Cruising on NH 66 between Mangalore, Udupi and Kundapura? Discover why Mathuram Cafe in Brahmavara is the top highway pitstop with clean restrooms and parking."
            : "ಮಂಗಳೂರು, ಉಡುಪಿ ಹಾಗೂ ಕುಂದಾಪುರ ಹೆದ್ದಾರಿ (NH 66) ಸಂಚಾರದಲ್ಲಿ ಸ್ವಚ್ಛ ಶೌಚಾಲಯ, ವಿಶಾಲ ಪಾರ್ಕಿಂಗ್ ಮತ್ತು ರುಚಿಕರ ಶುದ್ಧ ಸಸ್ಯಾಹಾರ ನೀಡುವ ಮಥುರಾಮ್ ಕೆಫೆ."}
        />
      </Helmet>

      <BlogLangToggle lang={lang} setLang={setLang} />

      {lang === 'en' ? (
        <>
          <h1 className="gold-text" style={{ marginBottom: '30px', fontSize: '2.5rem' }}>
            The Best Veg Restaurant Near NH 66: A Must-Stop Highway Oasis
          </h1>
          
          <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              Driving along the scenic NH 66 coastal highway is an incredible experience, but finding a clean, hygienic, and high-quality pure vegetarian restaurant for a pitstop can sometimes be a challenge. If you are traveling between Mangalore, Udupi, and Kundapura, we have the perfect recommendation for you: <strong>Mathuram Cafe in Brahmavara</strong>.
            </p>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>Why Mathuram Cafe is the Ultimate Highway Stop</h3>
            <p style={{ marginBottom: '20px' }}>
              Conveniently located just off the NH 66 in Brahmavara, Mathuram Cafe has quickly become a favorite stopping point for families, solo travelers, and road-trippers. Here is why it stands out as the best veg restaurant near NH 66:
            </p>
            
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Easy Highway Access &amp; Parking:</strong> Situated in the Laxmi Empire Building, getting in and out of the highway is a breeze, and you won't have to worry about finding safe parking for your vehicle.</li>
              <li style={{ marginBottom: '10px' }}><strong>Impeccable Hygiene &amp; Clean Restrooms:</strong> One of the biggest concerns during a road trip is finding clean facilities. Mathuram Cafe maintains a spotless environment, from the dining tables to the pristine restrooms, ensuring a comfortable break for families.</li>
              <li style={{ marginBottom: '10px' }}><strong>Authentic &amp; Fresh Pure Veg Food:</strong> Forget the typical heavy highway dhaba food. Enjoy authentic Udupi-style South Indian cuisine that is light, flavorful, and freshly prepared. Their Kumbakonam Filter Coffee is exactly what you need to stay alert on the road.</li>
            </ul>

            <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="/assets/Photos/Food/Masala Dose and filter Cofee.webp" alt="Authentic Masala Dosa and Filter Coffee at Mathuram Cafe" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                Crispy Masala Dosa and authentic Kumbakonam Filter Coffee
              </div>
            </div>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>What to Order on a Quick Pitstop</h3>
            <p style={{ marginBottom: '20px' }}>
              If you are short on time, order the <strong>Ghee Podi Thatte Idli</strong> or a classic crispy <strong>Masala Dosa</strong>. They are served quickly, perfectly hot, and absolutely delicious. Pair it with their signature filter coffee for the ultimate refreshment before hitting the highway again.
            </p>

            <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="/assets/Photos/Food/Thatte Idli.webp" alt="Ghee Podi Thatte Idli at Mathuram Cafe near NH 66" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                The crowd-favorite Ghee Podi Thatte Idli
              </div>
            </div>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>The Verdict</h3>
            <p style={{ marginBottom: '20px' }}>
              Don't settle for mediocre highway food. Mathuram Cafe offers a premium dining experience that revitalizes you for the journey ahead. The next time you are cruising on NH 66, make sure to schedule a stop at the best pure veg restaurant near NH 66.
            </p>

            <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                Planning your road trip? <Link to="/menu" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>View our full menu</Link> or get directions via our <Link to="/contact" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Contact page</Link>!
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="gold-text" style={{ marginBottom: '30px', fontSize: '2.4rem' }}>
            ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ 66 ಬಳಿಯ ಅತ್ಯುತ್ತಮ ಸಸ್ಯಾಹಾರಿ ಹೋಟೆಲ್: ಮಥುರಾಮ್ ಕೆಫೆ
          </h1>
          
          <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ 66 ರ ಸುಂದರ ಕರಾವಳಿ ಮಾರ್ಗದಲ್ಲಿ ಪ್ರಯಾಣಿಸುವುದು ಅದ್ಭುತ ಅನುಭವ. ಆದರೆ ದಾರಿಯಲ್ಲಿ ಶುಚಿಯಾದ, ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಹೋಟೆಲ್ ಸಿಗುವುದು ಬಹಳ ಮುಖ್ಯ. ನೀವು ಮಂಗಳೂರು, ಉಡುಪಿ ಹಾಗೂ ಕುಂದಾಪುರ ನಡುವೆ ಪ್ರಯಾಣಿಸುತ್ತಿದ್ದರೆ ನಿಮಗೊಂದು ಅತ್ಯುತ್ತಮ ತಾಣವಿದೆ—ಅದೇ <strong>ಬ್ರಹ್ಮಾವರದ ಮಥುರಾಮ್ ಕೆಫೆ</strong>.
            </p>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>ಹೆದ್ದಾರಿ ಪ್ರಯಾಣಿಕರಿಗೆ ಮಥುರಾಮ್ ಕೆಫೆ ಏಕೆ ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆ?</h3>
            <p style={{ marginBottom: '20px' }}>
              ಬ್ರಹ್ಮಾವರದ NH 66 ಹೆದ್ದಾರಿಗೆ ತಾಗಿಕೊಂಡೇ ಇರುವ ಲಕ್ಷ್ಮಿ ಎಂಪೈರ್ ಕಟ್ಟಡದಲ್ಲಿರುವ ಮಥುರಾಮ್ ಕೆಫೆ ಪ್ರವಾಸಿಗರ ಮೊದಲ ಆಯ್ಕೆಯಾಗಲು ಪ್ರಮುಖ ಕಾರಣಗಳು:
            </p>
            
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>ಸುಲಭ ಪ್ರವೇಶ ಮತ್ತು ವಿಶಾಲ ಪಾರ್ಕಿಂಗ್:</strong> ನಗರದ ಟ್ರಾಫಿಕ್ ಗೋಜಲು ಇಲ್ಲದೆ ಹೆದ್ದಾರಿಯಿಂದ ನೇರವಾಗಿ ಸುಲಭವಾಗಿ ಬಂದು ವಾಹನಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಪಾರ್ಕ್ ಮಾಡಬಹುದು.</li>
              <li style={{ marginBottom: '10px' }}><strong>ಅತ್ಯುನ್ನತ ಶುಚಿತ್ವ ಮತ್ತು ಸ್ವಚ್ಛ ಶೌಚಾಲಯಗಳು:</strong> ಕುಟುಂಬ ಸಮೇತ ಪ್ರಯಾಣಿಸುವಾಗ ಶುದ್ಧ ಶೌಚಾಲಯಗಳು ಅತ್ಯಗತ್ಯ. ಮಥುರಾಮ್ ಕೆಫೆಯಲ್ಲಿ ಸದಾ ಸ್ವಚ್ಛ ಹಾಗೂ ನೈರ್ಮಲ್ಯಯುತ ಸೌಲಭ್ಯಗಳನ್ನು ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ.</li>
              <li style={{ marginBottom: '10px' }}><strong>ತಾಜಾ, ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪಿ ಶೈಲಿಯ ಊಟ:</strong> ಹೆದ್ದಾರಿಯ ಎಣ್ಣೆಯುಕ್ತ ಆಹಾರದ ಬದಲು ಹಗುರವಾದ, ತಾಜಾ ಶುದ್ಧ ಸಸ್ಯಾಹಾರ. ಜೊತೆಗೆ ಕುಂಭಕೋಣಂ ಡಿಗ್ರಿ ಫಿಲ್ಟರ್ ಕಾಫಿ ಪ್ರಯಾಣದ ಆಯಾಸವನ್ನು ಕ್ಷಣಾರ್ಧದಲ್ಲಿ ನೀಗಿಸುತ್ತದೆ.</li>
            </ul>

            <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="/assets/Photos/Food/Masala Dose and filter Cofee.webp" alt="ಮಥುರಾಮ್ ಕೆಫೆಯ ಮಸಾಲ ದೋಸೆ ಮತ್ತು ಫಿಲ್ಟರ್ ಕಾಫಿ" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                ಗರಿಗರಿ ಮಸಾಲ ದೋಸೆ ಮತ್ತು ಕುಂಭಕೋಣಂ ಡಿಗ್ರಿ ಫಿಲ್ಟರ್ ಕಾಫಿ
              </div>
            </div>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>ಪ್ರಯಾಣದ ನಡುವೆ ಶೀಘ್ರವಾಗಿ ಆರ್ಡರ್ ಮಾಡಲು</h3>
            <p style={{ marginBottom: '20px' }}>
              ನಿಮಗೆ ಸಮಯದ ಅಭಾವವಿದ್ದರೆ, ಬಿಸಿಬಿಸಿಯಾದ <strong>ತುಪ್ಪದ ಪುಡಿ ತಟ್ಟೆ ಇಡ್ಲಿ</strong> ಅಥವಾ ಗರಿಗರಿಯಾದ <strong>ಮಸಾಲ ದೋಸೆ</strong> ಆರ್ಡರ್ ಮಾಡಿ. ಕೆಲವೇ ನಿಮಿಷಗಳಲ್ಲಿ ಬಡಿಸಲಾಗುವ ಈ ತಿಂಡಿಗಳು ನಾಲಿಗೆಗೆ ರುಚಿ ಮತ್ತು ಹೊಟ್ಟೆಗೆ ಹಿತ.
            </p>

            <div className="image-wrapper" style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="/assets/Photos/Food/Thatte Idli.webp" alt="ಮಥುರಾಮ್ ಕೆಫೆಯ ತುಪ್ಪದ ಪುಡಿ ತಟ್ಟೆ ಇಡ್ಲಿ" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                ಜನಪ್ರಿಯ ತುಪ್ಪದ ಪುಡಿ ತಟ್ಟೆ ಇಡ್ಲಿ
              </div>
            </div>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>ನಮ್ಮ ಸಲಹೆ</h3>
            <p style={{ marginBottom: '20px' }}>
              ಸಾಮಾನ್ಯ ಹೆದ್ದಾರಿ ಹೋಟೆಲ್‌ಗಳ ಬದಲು ಉತ್ತಮ ಆತಿಥ್ಯ ಮತ್ತು ಗುಣಮಟ್ಟ ನೀಡುವ ಮಥುರಾಮ್ ಕೆಫೆಗೆ ಬನ್ನಿ. ಮುಂದಿನ ಬಾರಿ NH 66 ನಲ್ಲಿ ಪ್ರಯಾಣಿಸುವಾಗ ಬ್ರಹ್ಮಾವರದ ಈ ಹೋಟೆಲ್‌ನಲ್ಲಿ ನಿಲ್ಲಲು ಮರೆಯದಿರಿ.
            </p>

            <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                ರೋಡ್ ಟ್ರಿಪ್ ಪ್ಲಾನ್ ಮಾಡುತ್ತಿದ್ದೀರಾ? <Link to="/menu" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>ಮೆನು ಪರಿಶೀಲಿಸಿ</Link> ಅಥವಾ ನಮ್ಮ <Link to="/contact" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>ಸಂಪರ್ಕ ಪುಟ</Link> ಮೂಲಕ ಲೊಕೇಶನ್ ಪಡೆಯಿರಿ!
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Post4;
