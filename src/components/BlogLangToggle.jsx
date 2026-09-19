import React from 'react';
import { motion } from 'framer-motion';
import './BlogLangToggle.css';

const BlogLangToggle = ({ lang, setLang }) => {
  return (
    <div className="blog-lang-toggle-wrapper">
      <span className="lang-label-text">
        🌐 <span>Language / ಭಾಷೆ:</span>
      </span>
      <div className="blog-lang-toggle-container">
        <button
          type="button"
          className={`blog-lang-btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => setLang('en')}
          aria-label="Read in English"
        >
          <span>🇬🇧</span> English
        </button>
        <button
          type="button"
          className={`blog-lang-btn ${lang === 'kn' ? 'active' : ''}`}
          onClick={() => setLang('kn')}
          aria-label="ಕನ್ನಡದಲ್ಲಿ ಓದಿ"
        >
          <span>🇮🇳</span> ಕನ್ನಡ
        </button>
      </div>
    </div>
  );
};

export default BlogLangToggle;
