import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;
  const logoSrc = isTransparent ? "/assets/Brand/logo/White logo.webp" : "/assets/Brand/logo/Black logo.webp";

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isTransparent ? 'transparent-home' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logoSrc} alt="Mathuram Cafe Logo" />
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''} onClick={closeMenu}>About</Link></li>
            <li><Link to="/menu" className={location.pathname === '/menu' ? 'active-link' : ''} onClick={closeMenu}>Menu</Link></li>
            <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active-link' : ''} onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/reviews" className={location.pathname === '/reviews' ? 'active-link' : ''} onClick={closeMenu}>Reviews</Link></li>
            <li><Link to="/visit" className={location.pathname === '/visit' ? 'active-link' : ''} onClick={closeMenu}>Visit Us</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''} onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
