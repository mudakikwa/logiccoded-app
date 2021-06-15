import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'Authetication',
  initialState: {
    token: '',
    tokenExpiration: '',
  },
  reducers: {
    addAuth: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userId', action.payload.id);
      state.token = action.payload.token;
      state.tokenExpiration = action.payload.tokenExpiration;
    },
  },
});

export const { addAuth } = authSlice.actions;

export default authSlice.reducer;
