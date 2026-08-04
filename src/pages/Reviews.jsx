import React, { useEffect } from 'react';
import reviewsData from '../data/reviews.json';
import './Reviews.css';

const GOOGLE_REVIEW_URL = "https://g.page/r/CRxmGfm8VFvWEAE/review";

const Reviews = () => {
  useEffect(() => {
    // Add Schema.org Review & AggregateRating JSON-LD for rich SEO snippets
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Mathuram Cafe",
      "image": "https://mathuramcafe.in/assets/Brand/logo/Black%20logo.webp",
      "url": "https://mathuramcafe.in",
      "telephone": "+919632832596",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Laxmi Empire Building, Krishikendra, Brahmavara",
        "addressLocality": "Brahmavara",
        "addressRegion": "Karnataka",
        "postalCode": "576213",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": reviewsData.length.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": reviewsData.map((rev) => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": rev.name
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": rev.rating.toString(),
          "bestRating": "5"
        },
        "reviewBody": rev.review
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'reviews-jsonld';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('reviews-jsonld');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="reviews-page">
      <div className="container">
        <div className="page-header text-center">
          <h1 className="section-title">Customer Reviews &amp; Testimonials</h1>
          <p className="section-subtitle">Read authentic feedback from our guests across Udupi, Manipal, and Brahmavara.</p>
          
          {/* Google Review Badge & CTA */}
          <div className="google-review-cta-card glass-panel">
            <div className="google-rating-summary">
              <div className="google-logo-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="rating-score-info">
                <span className="rating-number">5.0</span>
                <span className="rating-stars-gold">★★★★★</span>
                <span className="rating-source">Rated on Google</span>
              </div>
            </div>
            <a 
              href={GOOGLE_REVIEW_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary google-review-btn"
            >
              Write a Review on Google
            </a>
          </div>
        </div>

        <div className="reviews-list">
          {reviewsData.map((review, idx) => (
            <article 
              key={idx} 
              className="review-item-card"
              itemScope 
              itemType="https://schema.org/Review"
            >
              <meta itemProp="itemReviewed" content="Mathuram Cafe" />
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">{review.name.charAt(0)}</div>
                  <div>
                    <h3 itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">{review.name}</span>
                    </h3>
                    <span className="review-date">{review.reviewDate}</span>
                  </div>
                </div>
                <div 
                  className="review-rating" 
                  itemProp="reviewRating" 
                  itemScope 
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content={review.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
              </div>
              
              {review.title && <h4 className="review-title">{review.title}</h4>}
              <p className="review-body" itemProp="reviewBody">"{review.review}"</p>
              
              <div className="review-footer">
                {review.diningType && <span><small>Dining Type:</small> {review.diningType}</span>}
                {review.priceRange && <span><small>Price Range:</small> {review.priceRange}</span>}
                <span><small>Reviews by user:</small> {review.reviewCount}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bottom-review-cta text-center" style={{ marginTop: '50px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--color-text)' }}>
            Dined with us recently? We'd love to hear your feedback!
          </p>
          <a 
            href={GOOGLE_REVIEW_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            Leave Your Review on Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
