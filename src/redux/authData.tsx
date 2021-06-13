import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'Authetication',
  initialState: {
    token: '',
    tokenExpiration: '',
  },
  reducers: {
    addAuth: (state, action) => {
      state.token = action.payload.token;
      state.tokenExpiration = action.payload.tokenExpiration;
    },
  },
});

export const { addAuth } = authSlice.actions;

export default authSlice.reducer;
