import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Iprops {
  rating?: number;
  name?: string;
  date?: string;
  review?:string;
}
interface ReviewState {
  review: Iprops[];
 rating?:number
 star?:string,
  
}
const initialState: ReviewState = {
  review: [],
  rating:0
 
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<Iprops>) => {
      state.review.push(action.payload); 
    },
    addRating:(state, action: PayloadAction<number>) => {
      state.rating=action.payload; 
    },
    addStar:(state, action: PayloadAction<string>) => {
      state.star=action.payload; 
    },
  },
});

export const { addData,addRating,addStar } = userSlice.actions;

export default userSlice.reducer;