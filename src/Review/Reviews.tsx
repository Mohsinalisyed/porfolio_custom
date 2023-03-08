import React from 'react';
import StarRating from './StarRating';
interface Review {
  review: string;
  name: string;
  rating: number;
  date: string;
}
interface ReviewsProps {
  ratingsAndReviews: Review[];
}
const Reviews = ( { ratingsAndReviews }: ReviewsProps) => {

  return (
    <div>
      <h3 className='review__header'>Reviews</h3>
      {ratingsAndReviews.map(({ review, name, rating, date }, index) => (
        <div key={index} className='review'>
          <div className='review__details'>
            <div className='review__author'>{name}</div>
            <p className='review__date'>{date}</p>
            <StarRating readonly value={rating} size={6} />
          </div>
          <p className='review__text'>{review}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
