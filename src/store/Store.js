import { configureStore } from "@reduxjs/toolkit";
import plantReducer from "../reducers";
export const Store = configureStore({
  reducer: {
    shop: plantReducer,
  },
});
