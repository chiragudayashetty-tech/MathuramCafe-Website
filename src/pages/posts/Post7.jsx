import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import vipsData from '../../data/vips.json';
import BlogLangToggle from '../../components/BlogLangToggle';

const Post7 = () => {
  const [lang, setLang] = useState('en');

  return (
    <div className="blog-post-page" style={{ paddingTop: '160px', paddingBottom: '80px', minHeight: '80vh' }}>
      <Helmet>
        <title>
          {lang === 'en'
            ? "Celebrities & Politicians at Mathuram Cafe | Best Restaurant in Udupi"
            : "ಗಣ್ಯರು ಮತ್ತು ಸೆಲೆಬ್ರಿಟಿಗಳ ನೆಚ್ಚಿನ ತಾಣ: ಮಥುರಾಮ್ ಕೆಫೆಯ ವಾಲ್ ಆಫ್ ಫೇಮ್ | ಉಡುಪಿ"}
        </title>
        <meta 
          name="description" 
          content={lang === 'en'
            ? "Discover why prominent leaders and celebrities choose Mathuram Cafe in Brahmavara. Explore the Wall of Fame of the best vegetarian restaurant in Udupi."
            : "ಕರ್ನಾಟಕದ ಖ್ಯಾತ ನಾಯಕರು ಹಾಗೂ ಕಲಾವಿದರು ಬ್ರಹ್ಮಾವರದ ಮಥುರಾಮ್ ಕೆಫೆಯನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡುತ್ತಾರೆ? ನಮ್ಮ ವಾಲ್ ಆಫ್ ಫೇಮ್ ಮತ್ತು ಗಣ್ಯರ ಭೇಟಿಯ ವಿವರಗಳು."}
        />
        <meta name="keywords" content="best restaurant in udupi, udupi famous hotel, places to eat in udupi, mathuram cafe brahmavara, celebrity favorite udupi, top pure veg udupi, udupi food destinations" />
      </Helmet>

      <div className="container" style={{ maxWidth: '900px' }}>
        <BlogLangToggle lang={lang} setLang={setLang} />

        <article className="blog-article glass-panel" style={{ padding: '40px', borderRadius: '16px', background: '#fff' }}>
          {lang === 'en' ? (
            <>
              <header className="article-header">
                <h1 className="gold-text" style={{ fontSize: '2.4rem', marginBottom: '15px' }}>
                  The Choice of Leaders & Legends: Why Celebrities Love Mathuram Cafe, Udupi
                </h1>
                <div className="article-meta" style={{ color: 'var(--color-text-light)', marginBottom: '30px' }}>
                  <span>Published on: August 20, 2026</span>
                  <span style={{ margin: '0 10px' }}>|</span>
                  <span>Category: Udupi Food & Culture</span>
                </div>
              </header>

              <div className="article-content" style={{ lineHeight: '1.85', fontSize: '1.05rem', color: 'var(--color-text)' }}>
                <p>
                  When you search for the <strong>best restaurant in Udupi</strong>, you are not just looking for a place to eat—you are looking for an experience. Udupi is globally renowned for its extraordinary culinary heritage, but standing out in the birthplace of South Indian vegetarian cuisine requires unmatched quality, authentic taste, and impeccable hospitality.
                </p>
                
                <p style={{ marginTop: '15px' }}>
                  At <strong>Mathuram Cafe in Brahmavara</strong>, we don't just serve food; we serve traditions on a platter. This dedication to authentic Udupi flavors has made us a highly sought-after destination not just for local food lovers and highway travelers, but for some of the most prominent leaders, visionaries, and celebrities in Karnataka.
                </p>

                <h2 className="gold-text" style={{ marginTop: '40px', marginBottom: '20px' }}>
                  A Hub for Eminent Personalities in Udupi District
                </h2>
                
                <p>
                  Whether it’s political stalwarts taking a break during their busy schedules or renowned artists craving the perfect Ghee Podi Dosa, Mathuram Cafe has had the honor of hosting a stellar lineup of guests. Our commitment to maintaining a 100% pure vegetarian, hygienic, and premium family dining experience makes us a top recommendation for anyone visiting Udupi and Kundapur.
                </p>

                <p style={{ marginTop: '15px' }}>
                  Let’s take a look at our <strong>Wall of Fame</strong>—the esteemed guests who have visited and appreciated the authentic coastal flavors at Mathuram Cafe:
                </p>

                <div className="vip-showcase" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '25px', marginTop: '35px', marginBottom: '40px' }}>
                  {vipsData.filter(vip => vip.image).map((vip, index) => (
                    <div key={index} className="vip-post-card" style={{ background: '#fdfaf6', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                      <img src={vip.image} alt={`${vip.name} visiting Mathuram Cafe Udupi`} loading="lazy" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
                      <div style={{ padding: '18px' }}>
                        <h3 className="gold-text" style={{ fontSize: '1.15rem', marginBottom: '6px' }}>{vip.name}</h3>
                        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-light)', fontWeight: '600' }}>{vip.role}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="gold-text" style={{ marginTop: '40px', marginBottom: '20px' }}>
                  Why Mathuram Cafe is the Top Choice
                </h2>
                <p>
                  What brings such distinguished personalities to our doors?
                </p>
                <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                  <li style={{ marginBottom: '10px' }}><strong>Authentic Taste:</strong> Recipes that honor the true Udupi Brahmin culinary traditions.</li>
                  <li style={{ marginBottom: '10px' }}><strong>Premium Ambiance:</strong> Spacious AC and Non-AC family dining with elegant, modern interiors.</li>
                  <li style={{ marginBottom: '10px' }}><strong>Strategic Location:</strong> Conveniently located on NH-66 in Brahmavara, making it the perfect pitstop between Udupi and Kundapur.</li>
                  <li style={{ marginBottom: '10px' }}><strong>Uncompromised Hygiene:</strong> A spotless kitchen and dining area that guarantees a safe and pleasant meal.</li>
                </ul>

                <div className="cta-box" style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #f7ece0 100%)', border: '2px solid var(--color-secondary)', padding: '30px', borderRadius: '14px', textAlign: 'center', marginTop: '45px' }}>
                  <h3 className="gold-text" style={{ marginBottom: '12px' }}>Dine Like a VIP in Udupi!</h3>
                  <p style={{ marginBottom: '20px', color: 'var(--color-text)' }}>
                    Experience the same premium quality and taste that our esteemed guests love. Plan your visit to Mathuram Cafe today.
                  </p>
                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/menu" className="btn btn-primary">Explore Our Menu</Link>
                    <Link to="/wall-of-fame" className="btn btn-secondary">View Full Wall of Fame</Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <header className="article-header">
                <h1 className="gold-text" style={{ fontSize: '2.3rem', marginBottom: '15px' }}>
                  ಗಣ್ಯರು ಮತ್ತು ಸೆಲೆಬ್ರಿಟಿಗಳ ನೆಚ್ಚಿನ ತಾಣ: ಮಥುರಾಮ್ ಕೆಫೆಯ ವಾಲ್ ಆಫ್ ಫೇಮ್
                </h1>
                <div className="article-meta" style={{ color: 'var(--color-text-light)', marginBottom: '30px' }}>
                  <span>ಪ್ರಕಟಣೆ: ಆಗಸ್ಟ್ 20, 2026</span>
                  <span style={{ margin: '0 10px' }}>|</span>
                  <span>ವರ್ಗ: ಉಡುಪಿ ಆಹಾರ ಮತ್ತು ಸಂಸ್ಕೃತಿ</span>
                </div>
              </header>

              <div className="article-content" style={{ lineHeight: '1.85', fontSize: '1.05rem', color: 'var(--color-text)' }}>
                <p>
                  <strong>ಉಡುಪಿಯ ಅತ್ಯುತ್ತಮ ಹೋಟೆಲ್</strong> ಹುಡುಕುವಾಗ ನೀವು ಕೇವಲ ಊಟವನ್ನಷ್ಟೇ ಅಲ್ಲ, ಮನಸ್ಸಿಗೆ ತೃಪ್ತಿ ನೀಡುವ ಆತಿಥ್ಯವನ್ನೂ ಬಯಸುತ್ತೀರಿ. ದಕ್ಷಿಣ ಭಾರತದ ಹೆಮ್ಮೆಯ ಸಸ್ಯಾಹಾರಿ ಪರಂಪರೆಯ ತವರೂರಾದ ಉಡುಪಿಯಲ್ಲಿ ಪ್ರತಿಯೊಬ್ಬರೂ ಅತ್ಯುನ್ನತ ಗುಣಮಟ್ಟ ಮತ್ತು ನೈಜ ರುಚಿಯನ್ನು ನಿರೀಕ್ಷಿಸುತ್ತಾರೆ.
                </p>
                
                <p style={{ marginTop: '15px' }}>
                  <strong>ಬ್ರಹ್ಮಾವರದ ಮಥುರಾಮ್ ಕೆಫೆ</strong>ಯಲ್ಲಿ ನಾವು ಕರಾವಳಿಯ ಪರಂಪರೆಯ ರುಚಿಯನ್ನು ಭಕ್ತಿಯಿಂದ ಬಡಿಸುತ್ತೇವೆ. ಈ ಪ್ರಾಮಾಣಿಕತೆಯೇ ನಮ್ಮನ್ನು ಸ್ಥಳೀಯರು, ಪ್ರವಾಸಿಗರು ಮಾತ್ರವಲ್ಲದೆ ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ರಾಜಕೀಯ ಧುರೀಣರು, ಸಚಿವರು, ಶಾಸಕರು ಹಾಗೂ ಖ್ಯಾತ ಕಲಾವಿದರ ನೆಚ್ಚಿನ ತಾಣವನ್ನಾಗಿಸಿದೆ.
                </p>

                <h2 className="gold-text" style={{ marginTop: '40px', marginBottom: '20px' }}>
                  ಉಡುಪಿ ಜಿಲ್ಲೆಯ ಗಣ್ಯರ ಭೇಟಿಯ ಹೆಮ್ಮೆಯ ಕೇಂದ್ರ
                </h2>
                
                <p>
                  ತಮ್ಮ ಬಿಡುವಿಲ್ಲದ ಕಾರ್ಯಕ್ರಮಗಳ ನಡುವೆ ವಿಶ್ರಾಂತಿ ಪಡೆಯಲು ಬರುವ ರಾಜಕೀಯ ಗಣ್ಯರಿರಲಿ ಅಥವಾ ರುಚಿಕರ ತುಪ್ಪದ ಪುಡಿ ದೋಸೆ ಸವಿಯಲು ಬರುವ ಖ್ಯಾತ ಗಾಯಕರೇ ಇರಲಿ—ಮಥುರಾಮ್ ಕೆಫೆ ಹಲವು ಮಹಾನ್ ವ್ಯಕ್ತಿಗಳಿಗೆ ಆತಿಥ್ಯ ನೀಡಿದ ಹೆಮ್ಮೆ ಹೊಂದಿದೆ. ನಮ್ಮ ೧೦೦% ಶುದ್ಧ ಸಸ್ಯಾಹಾರ ಹಾಗೂ ನೈರ್ಮಲ್ಯದ ವಾತಾವರಣವೇ ಇದಕ್ಕೆ ಸಾಕ್ಷಿ.
                </p>

                <p style={{ marginTop: '15px' }}>
                  ನಮ್ಮ <strong>ವಾಲ್ ಆಫ್ ಫೇಮ್ (Wall of Fame)</strong>—ಮಥುರಾಮ್ ಕೆಫೆಗೆ ಭೇಟಿ ನೀಡಿ ಕರಾವಳಿಯ ರುಚಿಯನ್ನು ಕೊಂಡಾಡಿದ ಕೆಲ ಪ್ರಮುಖ ಗಣ್ಯರು:
                </p>

                <div className="vip-showcase" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '25px', marginTop: '35px', marginBottom: '40px' }}>
                  {vipsData.filter(vip => vip.image).map((vip, index) => (
                    <div key={index} className="vip-post-card" style={{ background: '#fdfaf6', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                      <img src={vip.image} alt={`${vip.name_kn || vip.name} ಮಥುರಾಮ್ ಕೆಫೆಗೆ ಭೇಟಿ`} loading="lazy" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
                      <div style={{ padding: '18px' }}>
                        <h3 className="gold-text" style={{ fontSize: '1.15rem', marginBottom: '6px' }}>{vip.name_kn || vip.name}</h3>
                        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-light)', fontWeight: '600' }}>{vip.role_kn || vip.role}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="gold-text" style={{ marginTop: '40px', marginBottom: '20px' }}>
                  ಗಣ್ಯರ ಮೊದಲ ಆಯ್ಕೆಯಾಗಲು ಕಾರಣವೇನು?
                </h2>
                <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                  <li style={{ marginBottom: '10px' }}><strong>ಅಪ್ಪಟ ರುಚಿ:</strong> ನೈಜ ಉಡುಪಿ ಬ್ರಾಹ್ಮಣ ಅಡುಗೆ ಪರಂಪರೆಯನ್ನು ಎತ್ತಿಹಿಡಿಯುವ ವಿಶೇಷ ಪಾಕವಿಧಾನಗಳು.</li>
                  <li style={{ marginBottom: '10px' }}><strong>ಉತ್ತಮ ವಾತಾವರಣ:</strong> ವಿಶಾಲವಾದ ಹವಾನಿಯಂತ್ರಿತ (AC) ಮತ್ತು ನಾನ್-ಎಸಿ ಫ್ಯಾಮಿಲಿ ಹಾಲ್.</li>
                  <li style={{ marginBottom: '10px' }}><strong>ಹೆದ್ದಾರಿಯಲ್ಲೇ ಇರುವ ಅನುಕೂಲ:</strong> NH-66 ಹೆದ್ದಾರಿಯಲ್ಲೇ ಇರುವುದರಿಂದ ಉಡುಪಿ-ಕುಂದಾಪುರ ನಡುವಿನ ಪ್ರಮುಖ ನಿಲುಗಡೆ.</li>
                  <li style={{ marginBottom: '10px' }}><strong>ಅತ್ಯುನ್ನತ ನೈರ್ಮಲ್ಯ:</strong> ಅಚ್ಚುಕಟ್ಟಾದ ಅಡುಗೆಮನೆ ಮತ್ತು ಕುಟುಂಬ ಸಮೇತ ಊಟಕ್ಕೆ ಸುರಕ್ಷಿತ ವಾತಾವರಣ.</li>
                </ul>

                <div className="cta-box" style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #f7ece0 100%)', border: '2px solid var(--color-secondary)', padding: '30px', borderRadius: '14px', textAlign: 'center', marginTop: '45px' }}>
                  <h3 className="gold-text" style={{ marginBottom: '12px' }}>ಉಡುಪಿಯಲ್ಲಿ ಗಣ್ಯರಂತೆ ಊಟದ ಸವಿಯನುಭವಿಸಿ!</h3>
                  <p style={{ marginBottom: '20px', color: 'var(--color-text)' }}>
                    ನಮ್ಮ ವಿಐಪಿ ಅತಿಥಿಗಳು ಮೆಚ್ಚಿದ ಅದೇ ಗುಣಮಟ್ಟ ಮತ್ತು ರುಚಿಯನ್ನು ನೀವೂ ಸವಿಯಿರಿ. ಇಂದೇ ಮಥುರಾಮ್ ಕೆಫೆಗೆ ಭೇಟಿ ನೀಡಿ.
                  </p>
                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/menu" className="btn btn-primary">ಮೆನು ಪರಿಶೀಲಿಸಿ</Link>
                    <Link to="/wall-of-fame" className="btn btn-secondary">ಸಂಪೂರ್ಣ ವಾಲ್ ಆಫ್ ಫೇಮ್ ನೋಡಿ</Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </article>
      </div>
    </div>
  );
};

export default Post7;
