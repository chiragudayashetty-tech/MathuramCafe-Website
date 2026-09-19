import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BlogLangToggle from '../../components/BlogLangToggle';

const Post2 = () => {
  const [lang, setLang] = useState('en');

  return (
    <div className="container" style={{ paddingTop: '180px', paddingBottom: '80px', maxWidth: '800px', minHeight: '80vh' }}>
      <Helmet>
        <title>
          {lang === 'en'
            ? "The Ultimate Guide to South Indian Breakfast in Udupi & Brahmavara"
            : "ಉಡುಪಿ ಮತ್ತು ಬ್ರಹ್ಮಾವರದಲ್ಲಿ ದಕ್ಷಿಣ ಭಾರತೀಯ ಉಪಹಾರದ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ"}
        </title>
        <meta 
          name="description" 
          content={lang === 'en'
            ? "Looking for the best breakfast in Udupi? Explore Ghee Podi Thatte Idli, Benne Masala Dosa, and Kumbakonam Filter Coffee at Mathuram Cafe."
            : "ಉಡುಪಿಯ ಅತ್ಯುತ್ತಮ ಉಪಹಾರ ಹುಡುಕುತ್ತಿದ್ದೀರಾ? ಮಥುರಾಮ್ ಕೆಫೆಯ ತುಪ್ಪದ ತಟ್ಟೆ ಇಡ್ಲಿ, ಬೆಣ್ಣೆ ಮಸಾಲ ದೋಸೆ ಮತ್ತು ಕುಂಭಕೋಣಂ ಡಿಗ್ರಿ ಫಿಲ್ಟರ್ ಕಾಫಿ ಸವಿಯಿರಿ."}
        />
        <meta 
          name="keywords" 
          content="ಉಡುಪಿ ಬೆಳಗಿನ ತಿಂಡಿ, ದಕ್ಷಿಣ ಭಾರತೀಯ ಉಪಹಾರ, ತುಪ್ಪದ ತಟ್ಟೆ ಇಡ್ಲಿ, ಬೆಣ್ಣೆ ಮಸಾಲ ದೋಸೆ, ಕುಂಭಕೋಣಂ ಡಿಗ್ರಿ ಫಿಲ್ಟರ್ ಕಾಫಿ, ಮಥುರಾಮ್ ಕೆಫೆ, south indian breakfast udupi, best idli dosa brahmavara, degree coffee udupi" 
        />
      </Helmet>

      <BlogLangToggle lang={lang} setLang={setLang} />

      {lang === 'en' ? (
        <>
          <h1 className="gold-text" style={{ marginBottom: '30px', fontSize: '2.5rem' }}>
            The Ultimate Guide to South Indian Breakfast in Udupi & Brahmavara
          </h1>
          
          <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              There is simply no better way to start your day than with a hearty, steaming hot <strong>South Indian breakfast</strong>. Udupi is globally famous for its cuisine, but finding that perfect, nostalgic flavor can sometimes be tricky amidst all the commercialized food joints. 
            </p>

            <p style={{ marginBottom: '20px' }}>
              That’s why I want to talk about my recent morning visits to <strong>Mathuram Cafe</strong>. If you are looking for the absolute best breakfast experience in the Udupi and Brahmavara region, you need to add this spot to your morning itinerary.
            </p>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>The Holy Trinity of Breakfast</h3>
            <p style={{ marginBottom: '20px' }}>
              Mathuram Cafe doesn’t just serve breakfast; they elevate it. Here’s what you absolutely must try:
            </p>

            <div style={{ marginBottom: '20px', paddingLeft: '15px', borderLeft: '3px solid var(--color-primary)' }}>
              <h4 style={{ marginBottom: '5px' }}>1. Ghee Podi Thatte Idli</h4>
              <p>Forget standard idlis. These Thatte Idlis are massive, unbelievably soft, and literally melt in your mouth. They generously smother them in pure ghee and their secret spicy 'podi' (gunpowder). It’s a flavor explosion.</p>
            </div>

            <div style={{ marginBottom: '20px', paddingLeft: '15px', borderLeft: '3px solid var(--color-primary)' }}>
              <h4 style={{ marginBottom: '5px' }}>2. Benne Masala Dosa</h4>
              <p>If you love a dosa that is golden-brown and crispy on the outside but soft on the inside, this is it. Cooked with rich butter (benne) and filled with a perfectly spiced potato palya, it sets the standard for how a dosa should taste.</p>
            </div>

            <div style={{ marginBottom: '20px', paddingLeft: '15px', borderLeft: '3px solid var(--color-primary)' }}>
              <h4 style={{ marginBottom: '5px' }}>3. Kumbakonam Degree Filter Coffee</h4>
              <p>You cannot finish a South Indian breakfast without coffee. Their degree filter coffee is brewed to perfection—strong, aromatic, and served piping hot in a traditional dabara set.</p>
            </div>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>Early Bird Gets the Dosa</h3>
            <p style={{ marginBottom: '20px' }}>
              They open bright and early at 7:00 AM, making it the perfect pitstop for travelers on the highway or locals looking for an early bite. The service is brisk, the food is fresh, and the experience is thoroughly satisfying.
            </p>

            <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                Ready for a breakfast treat? <Link to="/contact" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Get directions to Mathuram Cafe here</Link>.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="gold-text" style={{ marginBottom: '30px', fontSize: '2.4rem' }}>
            ಉಡುಪಿ ಮತ್ತು ಬ್ರಹ್ಮಾವರದಲ್ಲಿ ದಕ್ಷಿಣ ಭಾರತೀಯ ಉಪಹಾರದ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ
          </h1>
          
          <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              ಬೆಳಗಿನ ದಿನವನ್ನು ಬಿಸಿಬಿಸಿಯಾದ ಸಾಂಪ್ರದಾಯಿಕ <strong>ದಕ್ಷಿಣ ಭಾರತೀಯ ತಿಂಡಿ (Breakfast)</strong> ಯೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸುವುದಕ್ಕಿಂತ ಆನಂದ ಮತ್ತೊಂದಿಲ್ಲ. ಉಡುಪಿಯ ಊಟೋಪಚಾರ ಜಗತ್ಪ್ರಸಿದ್ಧವಾಗಿದ್ದರೂ, ಬಾಲ್ಯದ ನೈಜ ರುಚಿಯನ್ನು ನೀಡುವ ಹೋಟೆಲ್ ಹುಡುಕುವುದು ಮುಖ್ಯ.
            </p>

            <p style={{ marginBottom: '20px' }}>
              ಅದಕ್ಕಾಗಿಯೇ ನಾವು <strong>ಮಥುರಾಮ್ ಕೆಫೆ</strong>ಯ ಬೆಳಗಿನ ತಿಂಡಿಯ ಅನುಭವವನ್ನು ನಿಮ್ಮ ಮುಂದೆ ಇಡುತ್ತಿದ್ದೇವೆ. ನೀವು ಉಡುಪಿ ಮತ್ತು ಬ್ರಹ್ಮಾವರ ಸುತ್ತಮುತ್ತ ಅತ್ಯುತ್ತಮ ಉಪಹಾರ ಹುಡುಕುತ್ತಿದ್ದರೆ, ಈ ತಾಣವನ್ನು ನಿಮ್ಮ ಮೊದಲ ಪಟ್ಟಿಗೆ ಸೇರಿಸಿ.
            </p>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>ನೀವು ತಪ್ಪದೇ ಸವಿಯಬೇಕಾದ 3 ಪ್ರಮುಖ ತಿಂಡಿಗಳು</h3>
            <p style={{ marginBottom: '20px' }}>
              ಮಥುರಾಮ್ ಕೆಫೆಯಲ್ಲಿ ಪ್ರತಿಯೊಂದು ತಿಂಡಿಯೂ ನೈಜ ರುಚಿಯಿಂದ ಕೂಡಿರುತ್ತದೆ. ಇಲ್ಲಿನ ಪ್ರಮುಖ ಆಕರ್ಷಣೆಗಳು:
            </p>

            <div style={{ marginBottom: '20px', paddingLeft: '15px', borderLeft: '3px solid var(--color-primary)' }}>
              <h4 style={{ marginBottom: '5px' }}>೧. ತುಪ್ಪದ ಪುಡಿ ತಟ್ಟೆ ಇಡ್ಲಿ (Ghee Podi Thatte Idli)</h4>
              <p>ಸಾಮಾನ್ಯ ಇಡ್ಲಿಗಿಂತ ಭಿನ್ನವಾಗಿ, ಹೂವಿನಂತೆ ಮೃದುವಾದ ತಟ್ಟೆ ಇಡ್ಲಿಗೆ ಪರಿಮಳಯುಕ್ತ ದೇಸಿ ತುಪ್ಪ ಮತ್ತು ವಿಶೇಷ ಖಾರದ ಚಟ್ನಿಪುಡಿಯನ್ನು ಹಾಕಿ ನೀಡಲಾಗುತ್ತದೆ. ಬಾಯಲ್ಲಿಟ್ಟರೆ ಕರಗಿಹೋಗುವ ಅನುಭವ!</p>
            </div>

            <div style={{ marginBottom: '20px', paddingLeft: '15px', borderLeft: '3px solid var(--color-primary)' }}>
              <h4 style={{ marginBottom: '5px' }}>೨. ಬೆಣ್ಣೆ ಮಸಾಲ ದೋಸೆ (Benne Masala Dosa)</h4>
              <p>ಹೊರಭಾಗ ಗರಿಗರಿ ಹಾಗೂ ಒಳಭಾಗ ಮೃದುವಾಗಿರುವ ಅಪ್ಪಟ ಬೆಣ್ಣೆ ಮಸಾಲ ದೋಸೆ. ಆಲೂಗಡ್ಡೆ ಪಲ್ಯ ಹಾಗೂ ತಾಜಾ ತೆಂಗಿನಕಾಯಿ ಚಟ್ನಿಯೊಂದಿಗೆ ಇದರ ರುಚಿ ಅದ್ಭುತ.</p>
            </div>

            <div style={{ marginBottom: '20px', paddingLeft: '15px', borderLeft: '3px solid var(--color-primary)' }}>
              <h4 style={{ marginBottom: '5px' }}>೩. ಕುಂಭಕೋಣಂ ಡಿಗ್ರಿ ಫಿಲ್ಟರ್ ಕಾಫಿ</h4>
              <p>ಉತ್ತಮ ಉಪಹಾರದ ಸವಿ ಪೂರ್ಣಗೊಳ್ಳುವುದು ಗಟ್ಟಿ ಫಿಲ್ಟರ್ ಕಾಫಿಯೊಂದಿಗೆ. ಸಾಂಪ್ರದಾಯಿಕ ಹಿತ್ತಾಳೆ ಲೋಟದಲ್ಲಿ ನೊರೆ ತುಂಬಿದ ಬಿಸಿಬಿಸಿ ಕಾಫಿ ದಿನವಿಡೀ ಉತ್ಸಾಹ ತುಂಬುತ್ತದೆ.</p>
            </div>

            <h3 className="gold-text" style={{ marginTop: '30px', marginBottom: '15px' }}>ಬೆಳಗ್ಗೆ 7:00 ರಿಂದಲೇ ಆರಂಭ</h3>
            <p style={{ marginBottom: '20px' }}>
              ಪ್ರತಿದಿನ ಬೆಳಗ್ಗೆ 7:00 ಗಂಟೆಗೆ ಬಾಗಿಲು ತೆರೆಯುವುದರಿಂದ, ಹೆದ್ದಾರಿಯಲ್ಲಿ ಸಂಚರಿಸುವ ಪ್ರವಾಸಿಗರಿಗೆ ಮತ್ತು ಸ್ಥಳೀಯರಿಗೆ ಇದು ಸೂಕ್ತ ತಾಣವಾಗಿದೆ. ವೇಗದ ಸೇವೆ ಹಾಗೂ ಅತ್ಯುನ್ನತ ಗುಣಮಟ್ಟ ಇದರ ಹೆಗ್ಗಳಿಕೆ.
            </p>

            <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                ರುಚಿಕರ ಉಪಹಾರಕ್ಕೆ ಸಿದ್ಧರೇ? <Link to="/contact" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>ಮಥುರಾಮ್ ಕೆಫೆಯ ವಿಳಾಸ ಮತ್ತು ಲೊಕೇಶನ್ ಇಲ್ಲಿದೆ</Link>.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Post2;
