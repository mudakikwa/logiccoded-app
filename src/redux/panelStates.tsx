/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const panelData = createSlice({
  name: 'panelData',
  initialState: {
    feedBack: false,
    rate: false,
    shutDown: false,
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
    showShutDown: (state) => {
      state.shutDown = true;
    },
    hideShutDown: (state) => {
      state.shutDown = false;
    },
  },
});

export const {
  showFeedBack,
  hideFeedBack,
  showRate,
  hideRate,
  showShutDown,
  hideShutDown,
} = panelData.actions;

export default panelData.reducer;
