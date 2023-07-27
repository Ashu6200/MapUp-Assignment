import { configureStore } from "@reduxjs/toolkit";
import regionSlice from "./regionSlice";

// Create a Redux store using the 'configureStore' function from '@reduxjs/toolkit'.
export const store = configureStore({
    // The 'reducer' field specifies the root reducer for the store.
    // In this case, we use the reducer from the 'regionSlice'.
    reducer: regionSlice.reducer,
});
