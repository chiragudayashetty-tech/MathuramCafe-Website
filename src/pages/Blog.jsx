import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const posts = [
    {
      id: 'secret-science-of-udupi-ghee-dosa-mathuram-cafe',
      title: 'The Midnight Dosa Craving & The Secret Science of Udupi Ghee Roast: Why Mathuram Cafe Recipes Taste So Addictive',
      titleKn: 'ಮಧ್ಯರಾತ್ರಿಯ ದೋಸೆ ಕ್ರೇವಿಂಗ್ ಮತ್ತು ಉಡುಪಿ ತುಪ್ಪದ ರೋಸ್ಟ್ ರಹಸ್ಯ: ಮಥುರಾಮ್ ಕೆಫೆಯ ರುಚಿ ಏಕೆ ಇಷ್ಟೊಂದು ಮೋಡಿ ಮಾಡುತ್ತದೆ?',
      excerpt: 'Ever wondered why Udupi Masala Dosa and Thatte Idli trigger instant cravings? Uncover the 4 secret culinary laws and local foodie hacks (with English & Kannada translation!).'
    },
    {
      id: 'mangalore-to-murudeshwar-goa-nh66-road-trip-food-guide',
      title: 'Mangalore to Murudeshwar & Goa Road Trip: The Best Pure Veg Highway Pitstops on NH 66',
      titleKn: 'ಮಂಗಳೂರು-ಮುರುಡೇಶ್ವರ-ಗೋವಾ ರೋಡ್ ಟ್ರಿಪ್: NH 66 ಹೆದ್ದಾರಿಯ ಅತ್ಯುತ್ತಮ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಹೋಟೆಲ್',
      excerpt: 'Cruising the coastal NH 66 highway? Here is the ultimate driver’s food trail featuring massive vehicle parking, clean restrooms, and authentic pure veg food.'
    },
    {
      id: 'udupi-temple-food-trail',
      title: 'Ultimate Udupi Temple Food Trail: Best Pure Veg Restaurants Near Sri Krishna Matha, Barkur & Brahmavara',
      titleKn: 'ಉಡುಪಿ ದೇವಸ್ಥಾನಗಳ ಫುಡ್ ಟ್ರಯಲ್: ಶ್ರೀ ಕೃಷ್ಣ ಮಠ, ಬಾರಕೂರು ಮತ್ತು ಸಾತ್ವಿಕ ಊಟದ ಮಾರ್ಗದರ್ಶಿ',
      excerpt: 'Planning a pilgrimage to Sri Krishna Matha, Barkur, or Anegudde? Here is the ultimate Udupi temple food trail guide and the best pure veg restaurant on NH 66.'
    },
    {
      id: 'celebrities-at-mathuram-cafe-udupi',
      title: 'The Choice of Leaders & Legends: Why Celebrities Love Mathuram Cafe, Udupi',
      titleKn: 'ಗಣ್ಯರು ಮತ್ತು ಸೆಲೆಬ್ರಿಟಿಗಳ ನೆಚ್ಚಿನ ತಾಣ: ಮಥುರಾಮ್ ಕೆಫೆಯ ವಾಲ್ ಆಫ್ ಫೇಮ್',
      excerpt: 'Discover why prominent leaders and celebrities choose Mathuram Cafe in Brahmavara. Explore the Wall of Fame of the best vegetarian restaurant in Udupi.'
    },
    {
      id: 'top-10-must-try-udupi-foods-mathuram-cafe',
      title: 'Top 10 Must-Try Udupi Foods at Mathuram Cafe, Brahmavara (2026 Guide)',
      titleKn: 'ಬ್ರಹ್ಮಾವರದ ಮಥುರಾಮ್ ಕೆಫೆಯಲ್ಲಿ ನೀವು ಸವಿಯಲೇಬೇಕಾದ ಟಾಪ್ 10 ಉಡುಪಿ ತಿನಿಸುಗಳು',
      excerpt: 'Looking for the best food in Udupi? Explore the top 10 authentic Udupi dishes from crispy Masala Dosa to Gudbud Ice Cream with full photos.'
    },
    {
      id: 'best-pure-veg-restaurant-in-udupi',
      title: 'Why Mathuram Cafe is the Best Pure Veg Restaurant in Udupi',
      titleKn: 'ಇಡೀ ಉಡುಪಿಯಲ್ಲಿ ಮಥುರಾಮ್ ಕೆಫೆ ಏಕೆ ನಂಬರ್ 1 ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ರೆಸ್ಟೋರೆಂಟ್?',
      excerpt: 'Discover the heart, soul, and authentic flavors that make us the ultimate destination for vegetarian food in the Udupi region.'
    },
    {
      id: 'best-veg-restaurant-near-nh-66',
      title: 'Best Veg Restaurant Near NH 66: A Must-Stop Highway Oasis',
      titleKn: 'ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ 66 ಬಳಿಯ ಅತ್ಯುತ್ತಮ ಸಸ್ಯಾಹಾರಿ ಹೋಟೆಲ್: ಮಥುರಾಮ್ ಕೆಫೆ',
      excerpt: 'Driving along the scenic NH 66? Discover why Mathuram Cafe is the perfect, hygienic pitstop for authentic pure veg food.'
    },
    {
      id: 'best-family-restaurant-manipal-udupi',
      title: 'Best Family Restaurant Near Manipal and Udupi',
      titleKn: 'ಮಣಿಪಾಲ ಮತ್ತು ಉಡುಪಿ ಸಮೀಪದ ಅತ್ಯುತ್ತಮ ಫ್ಯಾಮಿಲಿ ರೆಸ್ಟೋರೆಂಟ್',
      excerpt: 'Looking for the perfect spot to dine with your family? Explore our spacious AC and Non-AC dining areas.'
    },
    {
      id: 'south-indian-breakfast-udupi',
      title: 'Where to Eat South Indian Breakfast in Udupi',
      titleKn: 'ಉಡುಪಿ ಮತ್ತು ಬ್ರಹ್ಮಾವರದಲ್ಲಿ ದಕ್ಷಿಣ ಭಾರತೀಯ ಉಪಹಾರದ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ',
      excerpt: 'From crispy Masala Dosa to soft Ghee Podi Idli, find out where to get the most authentic morning meals.'
    },
    {
      id: 'best-vegetarian-restaurant-in-brahmavara',
      title: 'Best Vegetarian Restaurant in Brahmavara',
      titleKn: 'ವಿಮರ್ಶೆ: ಬ್ರಹ್ಮಾವರದ ಅತ್ಯುತ್ತಮ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಹೋಟೆಲ್ ಮಥುರಾಮ್ ಕೆಫೆ ಏಕೆ?',
      excerpt: 'Discover why Mathuram Cafe is rated as the top pure veg dining experience for families and foodies alike.'
    }
  ];

  return (
    <div style={{ paddingTop: '180px', paddingBottom: '80px', minHeight: '80vh', backgroundColor: 'var(--color-background)' }}>
      <Helmet>
        <title>Mathuram Cafe Blog | Food Guides, Udupi Culture & Travel (ಕನ್ನಡ & English)</title>
        <meta 
          name="description" 
          content="Explore authentic Udupi food guides, temple travel itineraries, highway pitstop recommendations, and pure veg cuisine at Mathuram Cafe Brahmavara (English & ಕನ್ನಡ)." 
        />
        <meta 
          name="keywords" 
          content="ಉಡುಪಿಯ ಬೆಸ್ಟ್ ಹೋಟೆಲ್, ಬ್ರಹ್ಮಾವರ ಸಸ್ಯಾಹಾರಿ ಹೋಟೆಲ್, ಉಡುಪಿ ಮಸಾಲ ದೋಸೆ, ಉಡುಪಿ ಕೃಷ್ಣ ಮಠ ಊಟ, ಉಡುಪಿ ಫಿಲ್ಟರ್ ಕಾಫಿ, ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ರೆಸ್ಟೋರೆಂಟ್ ಉಡುಪಿ, ದಕ್ಷಿಣ ಭಾರತೀಯ ತಿಂಡಿ, ಮಥುರಾಮ್ ಕೆಫೆ ಬ್ರಹ್ಮಾವರ, best veg restaurant in udupi, udupi food blog, brahmavara restaurants" 
        />
      </Helmet>

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <h1 className="section-title" style={{ marginBottom: '12px' }}>Our Blog / ನಮ್ಮ ಬ್ಲಾಗ್</h1>
          <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto' }}>
            Discover coastal food stories, authentic recipes, temple food trails, and highway travel guides. Available in both <strong>English</strong> and <strong>ಕನ್ನಡ</strong>!
          </p>
        </div>

        <div style={{ display: 'grid', gap: '30px', maxWidth: '850px', margin: '0 auto' }}>
          {posts.map((post) => (
            <motion.div 
              key={post.id} 
              className="glass-panel"
              style={{ padding: '35px', background: '#fff', borderRadius: '16px' }}
              whileHover={{ y: -5 }}
            >
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 'bold', background: 'rgba(78, 107, 58, 0.12)', color: '#2d451e', padding: '3px 10px', borderRadius: '20px' }}>
                  🌐 English &amp; ಕನ್ನಡ
                </span>
                <span style={{ fontSize: '0.78rem', fontWeight: 'bold', background: 'rgba(212, 166, 90, 0.15)', color: 'var(--color-primary)', padding: '3px 10px', borderRadius: '20px' }}>
                  🌿 100% Pure Veg
                </span>
              </div>

              <h2 className="gold-text" style={{ marginBottom: '10px', fontSize: '1.45rem', lineHeight: '1.35' }}>
                {post.title}
              </h2>
              
              <div style={{ fontSize: '0.95rem', color: '#4E6B3A', fontWeight: '600', marginBottom: '14px', lineHeight: '1.4' }}>
                {post.titleKn}
              </div>

              <p style={{ marginBottom: '22px', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                {post.excerpt}
              </p>
              
              <Link to={`/blog/${post.id}`} className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
                Read Article / ಓದಿ ➔
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
