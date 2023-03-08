import React, { useState, useEffect, ChangeEvent } from 'react';
import StarRating from './StarRating';
const initialFormState = { name: '', review: '', rating: 0 };
interface Iprops{
  setVisible:(value: React.SetStateAction<boolean>) => void
  setReviews: React.Dispatch<React.SetStateAction<{
    rating: number;
    review: string;
    name: string;
    date: string;
}[]>>
reviews: {
  rating: number;
  review: string;
  name: string;
  date: string;
}[]
}
const ReviewForm:React.FC<Iprops>= ({ setVisible, setReviews, reviews }) => {
 
  const [formState, setFormState] = useState(initialFormState);
  const [disabled, setDisabled] = useState(true);

  const { name, review, rating } = formState;

  function handleSubmit(e:any) {
    e.preventDefault();
    setReviews([
      { name, review, rating, date: new Date().toLocaleDateString('en-US') },
      ...reviews,
    ]);
    setVisible(false);
    setFormState(initialFormState);

    
    // setDisabled(true);
  }

  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (review.length > 3 && rating > 0 && name !== '') setDisabled(false);
    else setDisabled(true);
  }, [name, rating, review]);

  return (
    <div>
      <StarRating
        onChange={(rating:number) => setFormState({ ...formState, rating })}
        value={formState.rating}
      />
      <form className='reviewform' onSubmit={handleSubmit}>
        <input placeholder='Name' name='name' onChange={handleChange} />
        <input
          placeholder='Write your review here'
          name='review'
          onChange={handleChange}
        />
        <button className='btn' disabled={disabled} type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
