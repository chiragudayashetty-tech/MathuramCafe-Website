import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800); // Wait for the doors to open (2s delay 1s)
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="preloader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
    >
      <div className="temple-doors">
        <motion.div 
          className="door left-door"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 90 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div 
          className="door right-door"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: -90 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          style={{ transformOrigin: "right" }}
        />
      </div>
      
      <motion.div 
        className="mandala-container"
        initial={{ scale: 0.8, opacity: 0, rotate: -90 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img src="/assets/Brand/logo/Logo.webp" alt="Mandala" className="mandala-logo" />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
