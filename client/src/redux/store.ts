import { configureStore } from '@reduxjs/toolkit';
import type { ConfigureStoreOptions } from '@reduxjs/toolkit';

import { KorabliApiType } from '../types';

import korabliSlice from './korabliSlice';

type PreloadState = {
  korabliSlice: KorabliApiType
};

const storeOptions: ConfigureStoreOptions<PreloadState> = {
  reducer: {
    korabliSlice,
  },
};

export const store = configureStore(storeOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
