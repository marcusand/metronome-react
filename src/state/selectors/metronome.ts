import { RootState } from '../store';

export const selectBpm = (state: RootState) => state.metronome.bpm;
