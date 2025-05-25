import { createSlice } from '@reduxjs/toolkit';

// Auth.js
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: false,
    userData: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logoutUser: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
