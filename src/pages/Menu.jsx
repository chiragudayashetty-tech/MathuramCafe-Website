import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import menuData from '../data/menu.json';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData.menu[0].category);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const element = document.getElementById(`category-${category.replace(/\s+/g, '-')}`);
    if (element) {
      const yOffset = -120; // accounting for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      menuData.menu.forEach((cat) => {
        const element = document.getElementById(`category-${cat.category.replace(/\s+/g, '-')}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180) {
            current = cat.category;
          }
        }
      });
      if (current) {
        setActiveCategory(current);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredMenu = menuData.menu.map(category => {
    const items = category.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, items };
  }).filter(category => category.items.length > 0);

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.div 
      className="menu-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="menu-header glass-panel">
        <h1 className="gold-text">Our Menu</h1>
        <p>Discover our traditional South Indian delicacies.</p>
        
        <div className="menu-search">
          <Search size={20} className="search-icon" color="var(--color-secondary)" />
          <input 
            type="text" 
            placeholder="Search for dishes..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="menu-container container">
        {/* Sticky Mobile-First Horizontal Tabs */}
        <div className="menu-sidebar glass-panel">
          <div className="scroll-hint">Swipe categories →</div>
          <ul className="category-tabs">
            {menuData.menu.map((cat, idx) => (
              <li 
                key={idx} 
                className={activeCategory === cat.category ? 'active' : ''}
                onClick={() => handleCategoryClick(cat.category)}
              >
                {cat.category}
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Content */}
        <div className="menu-content">
          <AnimatePresence>
            {filteredMenu.length === 0 ? (
              <motion.div 
                className="no-results glass-panel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No dishes found matching "{searchQuery}"
              </motion.div>
            ) : (
              filteredMenu.map((cat, idx) => (
                <div 
                  key={idx} 
                  id={`category-${cat.category.replace(/\s+/g, '-')}`} 
                  className="menu-category-section"
                >
                  <motion.h2 
                    className="category-title gold-text"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    {cat.category}
                  </motion.h2>
                  
                  <motion.div 
                    className="menu-items-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    {cat.items.map((item, itemIdx) => (
                      <motion.div key={itemIdx} variants={itemVariants}>
                        <div className="menu-item-card glass-panel">
                          <div className="item-details">
                            <div className="item-header">
                              <h3 className="item-name">{item.name}</h3>
                              <div className="item-price gold-text">₹{item.price}</div>
                            </div>
                            <div className="item-badges">
                              {item.bestseller && <span className="badge bestseller">Bestseller</span>}
                              {item.chefRecommended && <span className="badge chef-rec">Chef's Pick</span>}
                              {item.signatureDish && <span className="badge signature">Signature</span>}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
