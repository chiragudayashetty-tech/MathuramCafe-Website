import React from 'react';
import reviewsData from '../data/reviews.json';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className="reviews-page">
      <div className="container">
        <div className="page-header text-center">
          <h1>Customer Reviews</h1>
          <p>Read what our guests have to say about their experience.</p>
        </div>

        <div className="reviews-list">
          {reviewsData.map((review, idx) => (
            <div key={idx} className="review-item-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">{review.name.charAt(0)}</div>
                  <div>
                    <h3>{review.name}</h3>
                    <span className="review-date">{review.reviewDate}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
              </div>
              
              {review.title && <h4 className="review-title">{review.title}</h4>}
              <p className="review-body">"{review.review}"</p>
              
              <div className="review-footer">
                {review.diningType && <span><small>Dining Type:</small> {review.diningType}</span>}
                <span><small>Reviews by user:</small> {review.reviewCount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
