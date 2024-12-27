import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define your initial state here
  isLoggedIn : localStorage.getItem('isLoggedIm') || false ,
  role : localStorage.getItem('role') || '',
  data : localStorage.getItem('data') || {}
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Define your reducers here
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;