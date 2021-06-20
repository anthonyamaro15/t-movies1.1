import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
   loaded: false,
};
export const homepageSlice = createSlice({
   name: "homepageSlice",
   initialState,
   reducers: {
      setLoaded: (state, action: PayloadAction<boolean>) => {
         state.loaded = action.payload;
      },
   },
});

export const { setLoaded } = homepageSlice.actions;
export const loaded = (state: RootState) => state.homepageSlice.loaded;
export default homepageSlice.reducer;
