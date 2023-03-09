import React, { useState } from 'react';
import "./style.scss"
import Reviews from './Reviews';
import ReviewComp from './ReviewComp';
import ReviewForm from './ReviewForm';

const initialReviews = [
  {
    rating: 0,
    review: '',
    name: '',
    date: '',
  },
 
];

function MainReview () {

  const [visible, setVisible] = useState(false);
  const [reviews, setReviews] = useState(initialReviews);

  const totalRating = reviews.reduce((acc, { rating }) => acc + rating, 0);
  const average = (totalRating / reviews.length || 0).toFixed(1);

  return (
    <div className='reviewcontainer'>
      <ReviewComp ratingsAndReviews={reviews} average={average} />
      {visible && (
        <ReviewForm
          setReviews={setReviews}
          setVisible={setVisible}
          reviews={reviews}
        />
      )}
      <button
        className={visible ? 'btn' : 'btn center'}
        onClick={() => setVisible(!visible)}
      >
        {visible ? 'Cancel' : 'Please Rate and Review!'}
      </button>
      <Reviews ratingsAndReviews={reviews} />
    </div>
  );
}

export default MainReview ;
