import { RootState } from '../store';

export const selectBpm = (state: RootState) => state.metronome.bpm;
export const selectTimeSignature = (state: RootState) => state.metronome.timeSignature;
export const selectSampleSet = (state: RootState) => state.metronome.sampleSet;
export const selectPlaying = (state: RootState) => state.metronome.playing;
export const selectVolume = (state: RootState) => state.metronome.volume;
export const selectMinBpm = (state: RootState) => state.metronome.minBpm;
export const selectMaxBpm = (state: RootState) => state.metronome.maxBpm;
