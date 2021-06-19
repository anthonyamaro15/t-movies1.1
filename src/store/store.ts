import { combineReducers, configureStore } from "@reduxjs/toolkit";

import homepageSlice from "./slices/homepageSlice";

const rootReducer = combineReducers({
   homepageSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default configureStore({
   reducer: rootReducer,
});
