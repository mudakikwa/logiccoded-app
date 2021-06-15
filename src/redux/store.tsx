import { configureStore } from '@reduxjs/toolkit';
import appDataReducer from './appData';
import panelDataReducer from './panelStates';
import authData from './authData';
import ratingData from './ratingData';

export default configureStore({
  reducer: {
    appData: appDataReducer,
    panelData: panelDataReducer,
    authData,
    ratingData,
  },
});
