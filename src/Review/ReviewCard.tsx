import React from 'react';
import StarRating from './StarRating';
 interface Iprops{
  header:string,
  rating:string,
  reviews:any
 }
const Card :React.FC<Iprops>= ({ header, rating, reviews }) => {
  return (
    <div className='reviewcard '>
      <div className='card__content'>
        <h2 className='card__header'>{header}</h2>
        <div className='card__review'>
          <StarRating value={rating} readonly size={10} />
          <div data-testid='rating' className='card__label'>
            {`${rating} | ${reviews.length || 0} users rated this!`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
