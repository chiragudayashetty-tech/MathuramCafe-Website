import React, { useState, useEffect } from 'react';
import menuData from '../data/menu.json';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData.menu[0].category);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle scroll to sync category tabs if needed, or just let users click tabs
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const element = document.getElementById(`category-${category.replace(/\s+/g, '-')}`);
    if (element) {
      const yOffset = -100; 
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
          if (rect.top <= 150) {
            current = cat.category;
          }
        }
      });
      if (current) {
        setActiveCategory(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredMenu = menuData.menu.map(category => {
    const items = category.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, items };
  }).filter(category => category.items.length > 0);

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Discover our traditional South Indian delicacies.</p>
        
        <div className="menu-search">
          <input 
            type="text" 
            placeholder="Search for dishes..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="menu-container container">
        {/* Sticky Sidebar / Tabs */}
        <div className="menu-sidebar">
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
          {filteredMenu.length === 0 ? (
            <div className="no-results">No dishes found matching "{searchQuery}"</div>
          ) : (
            filteredMenu.map((cat, idx) => (
              <div 
                key={idx} 
                id={`category-${cat.category.replace(/\s+/g, '-')}`} 
                className="menu-category-section"
              >
                <h2 className="category-title">{cat.category}</h2>
                <div className="menu-items-grid">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="menu-item-card">
                      <div className="item-details">
                        <div className="item-header">
                          <h3 className="item-name">{item.name}</h3>
                          <div className="item-price">₹{item.price}</div>
                        </div>
                        <div className="item-badges">
                          {item.bestseller && <span className="badge bestseller">Bestseller</span>}
                          {item.chefRecommended && <span className="badge chef-rec">Chef's Pick</span>}
                          {item.signatureDish && <span className="badge signature">Signature</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
