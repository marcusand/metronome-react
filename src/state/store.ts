import { configureStore } from '@reduxjs/toolkit';
import { reducer as metronomeReducers } from './slices/metronome';

export const store = configureStore({
  reducer: {
    metronome: metronomeReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
