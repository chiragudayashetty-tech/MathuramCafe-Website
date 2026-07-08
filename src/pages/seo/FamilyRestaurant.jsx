import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const FamilyRestaurant = () => {
  return (
    <>
      <Helmet>
        <title>Best Family Restaurant in Brahmavara | Mathuram Cafe</title>
        <meta name="description" content="Looking for a premium family restaurant in Brahmavara? Mathuram Cafe offers spacious AC dining, pure veg food, and ample parking for large family gatherings." />
      </Helmet>

      <div className="seo-landing-page" style={{ paddingTop: '180px', paddingBottom: '80px', minHeight: '100vh' }}>
        <div className="container">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="seo-header"
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <h1 className="gold-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>Best Family Restaurant in Brahmavara</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto' }}>
              Create unforgettable memories with your loved ones at Mathuram Cafe, the most welcoming and spacious family dining destination in the region.
            </p>
          </motion.div>

          <div className="seo-content glass-panel" style={{ padding: '50px', borderRadius: '16px', lineHeight: '1.8' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginBottom: '40px' }}>
              <div style={{ flex: '1 1 400px' }}>
                <h2 className="gold-text" style={{ marginBottom: '20px' }}>Designed for Family Comfort</h2>
                <p>
                  Finding a restaurant that caters to the diverse needs of an entire family can be a challenge. At Mathuram Cafe, we have meticulously designed our establishment to be the ultimate <strong>family restaurant in Brahmavara</strong>. From toddlers requiring high chairs and mild food options to grandparents seeking comfortable seating and traditional flavors, we ensure that every member of your family feels entirely at home.
                </p>
                <p style={{ marginTop: '15px' }}>
                  Our expansive dining areas are designed to easily accommodate large family groups. Whether you are celebrating a birthday, a milestone anniversary, or simply enjoying a regular Sunday lunch together, our seating arrangements can be flexibly adjusted to host your entire party comfortably. We offer both premium Air-Conditioned (AC) halls for a cool, quiet dining experience, and well-ventilated Non-AC sections for those who prefer the natural breeze.
                </p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <img 
                  src="/assets/Photos/Resturant/family-restaurant-mathuram-cafe-brahmavara.webp" 
                  alt="Family Dining at Mathuram Cafe" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
                />
              </div>
            </div>

            <h2 className="gold-text" style={{ marginBottom: '20px' }}>A Menu to Satisfy Everyone</h2>
            <p>
              The hallmark of a great family restaurant is a menu that appeals to multiple generations. Our 100% <Link to="/menu" className="gold-text" style={{ textDecoration: 'underline' }}>pure veg menu</Link> is incredibly diverse. While the elders in the family might gravitate towards our authentic South Indian Thali or a classic Kumbakonam Filter Coffee, the younger generation often loves our Indo-Chinese offerings like Veg Fried Rice, Hakka Noodles, and crispy Mushroom Pepper Dry.
            </p>
            <p style={{ marginTop: '15px' }}>
              We also feature an extensive North Indian selection, complete with rich Paneer Butter Masala, soft Butter Naans, and fragrant Veg Biryani. And of course, no family meal is complete without dessert! Our signature Gudbud Ice Cream, Royal Falooda, and fresh fruit milkshakes are absolute favorites among children and adults alike, ensuring your family meal ends on a high, sweet note.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', margin: '40px 0' }}>
              <div style={{ flex: '1 1 300px' }}>
                <img 
                  src="/assets/Photos/Resturant/parking .webp" 
                  alt="Ample Parking at Mathuram Cafe Brahmavara" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
                />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h2 className="gold-text" style={{ marginBottom: '20px' }}>Ample Parking & Highway Convenience</h2>
                <p>
                  One of the biggest frustrations when taking the family out to eat is finding safe and convenient parking. As a top-rated family restaurant in Brahmavara, Mathuram Cafe completely eliminates this stress. We boast a massive, dedicated parking lot right on the premises. You can safely park multiple cars or large family vehicles without any hassle.
                </p>
                <p style={{ marginTop: '15px' }}>
                  Located conveniently in the Laxmi Empire Building along the main route, our restaurant is incredibly easy to access. Whether you are a local resident of Brahmavara or a family on a road trip along the NH66 coastal highway, our location, clean restrooms, and fast service make us the ideal pitstop for family travelers.
                </p>
              </div>
            </div>

            <h2 className="gold-text" style={{ marginBottom: '20px' }}>Hygiene You Can Trust</h2>
            <p>
              When dining out with family—especially with children—hygiene is non-negotiable. Mathuram Cafe maintains rigorous cleanliness standards across our kitchen, dining halls, and washrooms. Our open-kitchen concept allows you to see the high standards of food safety we practice. We use only fresh, high-quality ingredients and filtered water, ensuring that every meal served to your family is not just delicious, but perfectly safe and wholesome.
            </p>

            <div style={{ marginTop: '50px', padding: '30px', backgroundColor: 'var(--color-background)', borderRadius: '12px', textAlign: 'center' }}>
              <h3 className="gold-text" style={{ marginBottom: '15px' }}>Plan Your Next Family Outing</h3>
              <p style={{ marginBottom: '25px' }}>
                Join the hundreds of families who have made Mathuram Cafe their go-to dining destination in Udupi district. We can't wait to host you!
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link to="/gallery" className="btn btn-primary">View Restaurant Gallery</Link>
                <Link to="/contact" className="btn btn-secondary">Contact for Reservations</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyRestaurant;
