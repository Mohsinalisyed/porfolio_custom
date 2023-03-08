import React from 'react';
import Card from './ReviewCard';

interface Review {
  rating: number;
  review: string;
  name: string;
  date: string;
}

interface Props {
  average: string;
  ratingsAndReviews: Review[];
}

const ReviewComp= ({ average, ratingsAndReviews }: Props) => {
  return (
    <Card
      header="Review Detail"
      rating={average}
      reviews={ratingsAndReviews}
    />
  );
};

export default ReviewComp;





