/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const panelData = createSlice({
  name: 'panelData',
  initialState: {
    feedBack: false,
    rate: false,
  },
  reducers: {
    showFeedBack: (state) => {
      state.feedBack = true;
    },
    hideFeedBack: (state) => {
      state.feedBack = false;
    },
    showRate: (state) => {
      state.rate = true;
    },
    hideRate: (state) => {
      state.rate = false;
    },
  },
});

export const { showFeedBack, hideFeedBack } = panelData.actions;

export default panelData.reducer;
