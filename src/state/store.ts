import { configureStore } from '@reduxjs/toolkit';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';
import { MetronomeState, reducer as metronomeReducers } from './slices/metronome';

const localStorageItemName = 'metronome-state';

export type RootState = {
  metronome: MetronomeState;
};

export const store = configureStore({
  reducer: {
    metronome: metronomeReducers,
  },
  preloadedState: loadFromLocalStorage<RootState>(localStorageItemName),
});

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => saveToLocalStorage<RootState>(store.getState(), localStorageItemName));
