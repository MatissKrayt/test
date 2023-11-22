import { createSlice } from '@reduxjs/toolkit';
import { allKorabli } from './thunkActions';

import type { KorabliApiType } from '../types';

const initialState: KorabliApiType = {
    vehicles: [],
};

const rtkSlice = createSlice({
  name: 'korabliSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allKorabli.fulfilled, (state, action) => {
      state.vehicles = action.payload;
    });
  },
});

export default rtkSlice.reducer;