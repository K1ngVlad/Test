import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
export const {} = authSlice.actions;
