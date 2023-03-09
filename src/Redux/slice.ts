import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Iprops {
  rating: number;
  name: string;
  date: string;
  review:string
}
interface ReviewState {
  review: Iprops [];
}
const initialState: ReviewState = {
  review: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<Iprops>) => {
      state.review.push(action.payload);
    },
  
  },
});

export const { addData } = userSlice.actions;

export default userSlice.reducer;