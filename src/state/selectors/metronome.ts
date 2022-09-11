import { RootState } from '../store';

export const selectBpm = (state: RootState) => state.metronome.bpm;
export const selectTimeSignature = (state: RootState) => state.metronome.timeSignature;
export const selectSampleSet = (state: RootState) => state.metronome.sampleSet;
