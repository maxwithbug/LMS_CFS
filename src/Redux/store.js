import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slices/AuthSlices'; // Use default import

export const Store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
  devTools: true,
});

