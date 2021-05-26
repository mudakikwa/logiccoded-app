import { configureStore } from '@reduxjs/toolkit';
import appDataReducer from './appData';
import panelDataReducer from './panelStates';

export default configureStore({
  reducer: {
    appData: appDataReducer,
    panelData: panelDataReducer,
  },
});
