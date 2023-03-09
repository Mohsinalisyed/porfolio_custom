import React, { useState } from 'react';
import "./style.scss"
import Reviews from './Reviews';
import ReviewComp from './ReviewComp';
import ReviewForm from './ReviewForm';
import { useDispatch } from 'react-redux';
import {addRating, addStar } from '../Redux/slice';
interface Iprops {
  rating: number;
  name: string;
  date: string;
  review:string;
}


function MainReview () {
  const [visible, setVisible] = useState(false);
  const [reviews, setReviews] = useState<Iprops[]>([]);
  const totalRating = reviews.reduce((acc, { rating }) => acc + rating, 0);
  const average = (totalRating / reviews.length || 0).toFixed(1);
  const dispatch=useDispatch()
   dispatch(addRating(reviews.length))
   dispatch(addStar(average))
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
    <div className='p-5'>
    <button
        className={visible ? 'reviewbtn' : 'reviewbtn center'}
        onClick={() => setVisible(!visible)}
      >
        {visible ? 'Cancel' : 'Please Rate and Review!'}
      </button>
    </div>
      <Reviews ratingsAndReviews={reviews} />
    </div>
  );
}

export default MainReview ;
