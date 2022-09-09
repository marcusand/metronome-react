import { createSlice, Dispatch } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createMetronome, Metronome } from '../../lib/createMetronome';

let metronome: Metronome;

export interface MetronomeState {
  playing: boolean;
  bpm: number;
  sampleSet: number;
  timeSignature: number;
  volume: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: MetronomeState = {
  playing: false,
  bpm: 80,
  sampleSet: 0,
  timeSignature: 4,
  volume: 100,
  loading: 'idle',
};

export const metronomeSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadingPending(state) {
      state.loading = 'pending';
    },
    loadingSucceeded(state) {
      state.loading = 'succeeded';
    },
    loadingFailed(state) {
      state.loading = 'failed';
    },
    play(state) {
      metronome.play();
      state.playing = true;
    },
    pause(state) {
      metronome.pause();
      state.playing = false;
    },
    setVolume(state, action: PayloadAction<number>) {
      const { payload } = action;
      metronome.setVolume(payload);
      state.volume = payload;
    },
    setSampleSet(state, action: PayloadAction<number>) {
      const { payload } = action;
      metronome.setSampleSet(payload);
      state.sampleSet = payload;
    },
    setTimeSignature(state, action: PayloadAction<number>) {
      const { payload } = action;
      metronome.setTimeSignature(payload);
      state.timeSignature = payload;
    },
    setBpm(state, action: PayloadAction<number>) {
      const { payload } = action;
      metronome.setBpm(payload);
      state.bpm = payload;
    },
  },
});

export const { reducer, actions } = metronomeSlice;

export const initializeMetronome = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadingPending());

  try {
    metronome = await createMetronome({
      samples: [
        ['/audio/wood.mp3', '/audio/wood-accent.mp3'],
        ['/audio/hihat.mp3', '/audio/hihat-accent.mp3'],
        ['/audio/cowbell.mp3', '/audio/cowbell-accent.mp3'],
      ],
    });
  } catch (error) {
    dispatch(actions.loadingFailed());
  }

  dispatch(actions.loadingSucceeded());
};
