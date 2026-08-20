import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import vipsData from '../../data/vips.json';

const Post7 = () => {
  return (
    <div className="blog-post-page" style={{ paddingTop: '160px', paddingBottom: '80px', minHeight: '80vh' }}>
      <Helmet>
        <title>Celebrities & Politicians at Mathuram Cafe | Best Restaurant in Udupi</title>
        <meta name="description" content="Discover why prominent leaders and celebrities choose Mathuram Cafe in Brahmavara. Explore the Wall of Fame of the best vegetarian restaurant in Udupi." />
        <meta name="keywords" content="best restaurant in udupi, udupi famous hotel, places to eat in udupi, mathuram cafe brahmavara, celebrity favorite udupi, top pure veg udupi, udupi food destinations" />
      </Helmet>

      <div className="container">
        <article className="blog-article glass-panel" style={{ padding: '40px', borderRadius: '16px' }}>
          <header className="article-header">
            <h1 className="gold-text">The Choice of Leaders & Legends: Why Celebrities Love Mathuram Cafe, Udupi</h1>
            <div className="article-meta" style={{ color: 'var(--color-text-light)', marginBottom: '30px' }}>
              <span>Published on: August 20, 2026</span>
              <span style={{ margin: '0 10px' }}>|</span>
              <span>Category: Udupi Food & Culture</span>
            </div>
          </header>

          <div className="article-content" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p>
              When you search for the <strong>best restaurant in Udupi</strong>, you are not just looking for a place to eat—you are looking for an experience. Udupi is globally renowned for its extraordinary culinary heritage, but standing out in the birthplace of South Indian vegetarian cuisine requires unmatched quality, authentic taste, and impeccable hospitality.
            </p>
            
            <p>
              At <strong>Mathuram Cafe in Brahmavara</strong>, we don't just serve food; we serve traditions on a platter. This dedication to authentic Udupi flavors has made us a highly sought-after destination not just for local food lovers and highway travelers, but for some of the most prominent leaders, visionaries, and celebrities in Karnataka.
            </p>

            <h2 className="gold-text" style={{ marginTop: '40px', marginBottom: '20px' }}>A Hub for Eminent Personalities in Udupi District</h2>
            
            <p>
              Whether it’s political stalwarts taking a break during their busy schedules or renowned artists craving the perfect Ghee Podi Dosa, Mathuram Cafe has had the honor of hosting a stellar lineup of guests. Our commitment to maintaining a 100% pure vegetarian, hygienic, and premium family dining experience makes us a top recommendation for anyone visiting Udupi and Kundapur.
            </p>

            <p>
              Let’s take a look at our <strong>Wall of Fame</strong>—the esteemed guests who have visited and appreciated the authentic coastal flavors at Mathuram Cafe:
            </p>

            <div className="vip-showcase" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px', marginTop: '40px', marginBottom: '40px' }}>
              {vipsData.filter(vip => vip.image).map((vip, index) => (
                <div key={index} className="vip-post-card" style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                  <img src={vip.image} alt={`${vip.name} visiting Mathuram Cafe Udupi`} loading="lazy" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
                  <div style={{ padding: '20px' }}>
                    <h3 className="gold-text" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{vip.name}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: 'bold' }}>{vip.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="gold-text" style={{ marginTop: '40px', marginBottom: '20px' }}>Why Mathuram Cafe is the Top Choice</h2>
            <p>
              What brings such distinguished personalities to our doors?
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Authentic Taste:</strong> Recipes that honor the true Udupi Brahmin culinary traditions.</li>
              <li style={{ marginBottom: '10px' }}><strong>Premium Ambiance:</strong> Spacious AC and Non-AC family dining with elegant, modern interiors.</li>
              <li style={{ marginBottom: '10px' }}><strong>Strategic Location:</strong> Conveniently located on NH-66 in Brahmavara, making it the perfect pitstop between Udupi and Kundapur.</li>
              <li style={{ marginBottom: '10px' }}><strong>Uncompromised Hygiene:</strong> A spotless kitchen and dining area that guarantees a safe and pleasant meal.</li>
            </ul>

            <div className="cta-box" style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '30px', borderRadius: '12px', textAlign: 'center', marginTop: '50px' }}>
              <h3 className="gold-text" style={{ marginBottom: '15px' }}>Dine Like a VIP in Udupi!</h3>
              <p style={{ marginBottom: '20px' }}>
                Experience the same premium quality and taste that our esteemed guests love. Plan your visit to Mathuram Cafe today.
              </p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn btn-primary">Explore Our Menu</Link>
                <Link to="/wall-of-fame" className="btn btn-secondary">View Full Wall of Fame</Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Post7;
