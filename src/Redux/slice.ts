import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IReview {
  rating: number;
  name: string;
  date: string;
  review:string;
}

interface IReviewState {
  reviews: IReview[];
  totalRating: number;
  average: string;
}

const initialState: IReviewState = {
  reviews: [],
  totalRating: 0,
  average: "0.0"
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<IReview>) {
      state.reviews.push(action.payload);
      state.totalRating = state.reviews.reduce((acc, { rating }) => acc + rating, 0);
      state.average = (state.totalRating / state.reviews.length || 0).toFixed(1);
    }
  }
 
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
