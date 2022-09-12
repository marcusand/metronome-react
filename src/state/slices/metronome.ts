import { createSlice, Dispatch } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createMetronome, Metronome } from '../../lib/createMetronome';
import { RootState } from '../store';

let metronome: Metronome | undefined;

export interface MetronomeState {
  playing: boolean;
  bpm: number;
  sampleSet: number;
  timeSignature: number;
  volume: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  minBpm: number;
  maxBpm: number;
}

const initialState: MetronomeState = {
  playing: false,
  bpm: 80,
  sampleSet: 0,
  timeSignature: 3,
  volume: 100,
  loading: 'idle',
  minBpm: 40,
  maxBpm: 220,
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
    setPlaying(state, action: PayloadAction<boolean>) {
      state.playing = action.payload;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
    setSampleSet(state, action: PayloadAction<number>) {
      state.sampleSet = action.payload;
    },
    setTimeSignature(state, action: PayloadAction<number>) {
      state.timeSignature = action.payload;
    },
    setBpm(state, action: PayloadAction<number>) {
      state.bpm = action.payload;
    },
  },
});

const { actions } = metronomeSlice;

export const { reducer } = metronomeSlice;

export const initializeMetronome = () => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.loadingPending());

  try {
    metronome = createMetronome({
      samples: [
        ['/audio/wood.mp3', '/audio/wood-accent.mp3'],
        ['/audio/hihat.mp3', '/audio/hihat-accent.mp3'],
        ['/audio/cowbell.mp3', '/audio/cowbell-accent.mp3'],
      ],
    });

    const { metronome: initialState } = getState();

    metronome.setBpm(initialState.bpm);
    metronome.setSampleSet(initialState.sampleSet);
    metronome.setTimeSignature(initialState.timeSignature);
    metronome.setVolume(initialState.volume);

    /**
     * we don't care what the initial play state is,
     * we are always setting it to false on initialization
     * since we need the user interaction for the audio context
     * to start
     */
    dispatch(actions.setPlaying(false));

    await metronome.loadSamples();
    dispatch(actions.loadingSucceeded());
  } catch (error) {
    dispatch(actions.loadingFailed());
  }
};

export const play = () => (dispatch: Dispatch) => {
  if (metronome) {
    metronome.play();
    dispatch(actions.setPlaying(true));
  }
};

export const pause = () => (dispatch: Dispatch) => {
  if (metronome) {
    metronome.pause();
    dispatch(actions.setPlaying(false));
  }
};

export const setVolume = (value: number) => (dispatch: Dispatch) => {
  if (metronome) {
    metronome.setVolume(value);
    dispatch(actions.setVolume(value));
  }
};

export const setSampleSet = (value: number) => (dispatch: Dispatch) => {
  if (metronome) {
    metronome.setSampleSet(value);
    dispatch(actions.setSampleSet(value));
  }
};

export const setTimeSignature = (value: number) => (dispatch: Dispatch) => {
  if (metronome) {
    metronome.setTimeSignature(value);
    dispatch(actions.setTimeSignature(value));
  }
};

export const setBpm = (value: number) => (dispatch: Dispatch) => {
  if (metronome) {
    metronome.setBpm(value);
    dispatch(actions.setBpm(value));
  }
};
