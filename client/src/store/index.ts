import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  auth: authSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
