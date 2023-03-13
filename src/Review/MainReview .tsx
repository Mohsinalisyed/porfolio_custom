import React, { useState} from 'react';
import "./style.scss"
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';

import Card from './ReviewCard';
interface Iprops {
  rating: number;
  name: string;
  date: string;
  review:string;
}


function MainReview () {
 
  const [visible, setVisible] = useState(false);
  const [reviews, setReviews] = useState<Iprops[]>([]);


  
 
  return (
    <div className='reviewcontainer'>
      <Card  header="REVIEWS" />
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
      <Reviews  />
    </div>
  );
}

export default MainReview ;
