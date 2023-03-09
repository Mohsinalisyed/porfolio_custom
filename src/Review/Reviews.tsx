import React from 'react';
import StarRating from './StarRating';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
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
const ReviewData=useSelector((state:RootState)=>state.user.review)
  return (
    <div className='reviewdata'>
     
     <h1 className='text-center'>FEEDBACKS</h1>
     
     
      {ReviewData.map(({ review, name, rating, date }, index) => (
        <div key={index} className='review'>
          
            <div className='review__author'>{name}</div>
            <p className='review__date'>{date}</p>
            <StarRating readonly value={rating} size={15} />
          
          <p className='review__text'>{review}</p>
          
          
        </div>
      ))}
      <hr style={{border:"1px solid gray",width:"100%"}}/>
    </div>
  );
};

export default Reviews;
