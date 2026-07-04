import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      id: 'best-vegetarian-restaurant-in-brahmavara',
      title: 'Best Vegetarian Restaurant in Brahmavara',
      excerpt: 'Discover why Mathuram Cafe is rated as the top pure veg dining experience for families and foodies alike.'
    },
    {
      id: 'south-indian-breakfast-udupi',
      title: 'Where to Eat South Indian Breakfast in Udupi',
      excerpt: 'From crispy Masala Dosa to soft Ghee Podi Idli, find out where to get the most authentic morning meals.'
    },
    {
      id: 'best-family-restaurant-manipal-udupi',
      title: 'Best Family Restaurant Near Manipal and Udupi',
      excerpt: 'Looking for the perfect spot to dine with your family? Explore our spacious AC and Non-AC dining areas.'
    }
  ];

  return (
    <div style={{ paddingTop: '180px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="container">
        <h1 className="section-title">Our Blog</h1>
        <div style={{ display: 'grid', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
          {posts.map((post) => (
            <motion.div 
              key={post.id} 
              className="glass-panel"
              style={{ padding: '30px' }}
              whileHover={{ y: -5 }}
            >
              <h2 className="gold-text" style={{ marginBottom: '15px' }}>{post.title}</h2>
              <p style={{ marginBottom: '20px', color: 'var(--color-text-light)' }}>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="btn btn-primary">Read More</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
