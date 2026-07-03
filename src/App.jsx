import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import VisitUs from './pages/VisitUs';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Post1 from './pages/posts/Post1';
import Post2 from './pages/posts/Post2';
import Post3 from './pages/posts/Post3';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import './index.css';

function App() {
  const [loading, setLoading] = React.useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      <ScrollToTop />
      
      {!loading && (
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/visit" element={<VisitUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/best-vegetarian-restaurant-in-brahmavara" element={<Post1 />} />
              <Route path="/blog/south-indian-breakfast-udupi" element={<Post2 />} />
              <Route path="/blog/best-family-restaurant-manipal-udupi" element={<Post3 />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
