import { createSlice } from '@reduxjs/toolkit';

const rateSlice = createSlice({
  name: 'AddRating',
  initialState: {
    loading: null,
    error: null,
    sucess: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.value;
    },
    setError: (state, action) => {
      state.error = action.payload.value;
    },
    setSucess: (state, action) => {
      state.sucess = action.payload.value;
    },
  },
});

export const { setLoading, setError, setSucess } = rateSlice.actions;

export default rateSlice.reducer;
