// Code MovieReviews Here
import React from 'react';

function MovieReviews({reviews}) {
  
  const renderReviews = () => {
    return reviews.map((review, index) => <div className="review" key={index}>{review.summary_short}</div>)
  }

  return (
    <div className="review-list">
      {renderReviews}
    </div>
  )
};

export default MovieReviews;