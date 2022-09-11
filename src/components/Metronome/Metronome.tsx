import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBpm,
  selectPlaying,
  selectSampleSet,
  selectTimeSignature,
  selectVolume,
} from '../../state/selectors/metronome';
import { BpmInfo } from './BpmInfo/BpmInfo';
import { RowContainer } from './RowContainer/RowContainer';
import { TapButton } from './TapButton/TapButton';
import { Slider } from './Slider/Slider';
import { Poti } from './Poti/Poti';
import { PlayButton } from './PlayButton/PlayButton';
import { actions as metronome } from '../../state/slices/metronome';
import './Metronome.scss';

interface Props {}

const MIN_BPM = 40;
const MAX_BPM = 220;

export const Metronome: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const bpm = useSelector(selectBpm);
  const timeSignature = useSelector(selectTimeSignature);
  const sampleSet = useSelector(selectSampleSet);
  const playing = useSelector(selectPlaying);
  const volume = useSelector(selectVolume);

  const setBpm = (value: number) => dispatch(metronome.setBpm(value));
  const setTimeSignature = (value: number) => dispatch(metronome.setTimeSignature(value));
  const setSampleSet = (value: number) => dispatch(metronome.setSampleSet(value));
  const setPlay = () => dispatch(metronome.play());
  const setPause = () => dispatch(metronome.pause());
  const setVolume = (value: number) => dispatch(metronome.setVolume(value));

  return (
    <>
      <RowContainer>
        <BpmInfo>{bpm}</BpmInfo>
      </RowContainer>
      <RowContainer>
        <TapButton minBpm={MIN_BPM} maxBpm={MAX_BPM} onTap={setBpm} />
      </RowContainer>
      <RowContainer width="100%">
        <Slider id="bpm-slider" min={MIN_BPM} max={MAX_BPM} value={bpm} onChange={setBpm} />
      </RowContainer>
      <RowContainer width="60%">
        <div className="buttons">
          <Poti title="time" stepsCount={12} value={timeSignature} onChange={setTimeSignature} />
          <PlayButton playing={playing} onPlay={setPlay} onPause={setPause} />
          <Poti title="sound" stepsCount={3} value={sampleSet} onChange={setSampleSet} />
        </div>
      </RowContainer>
      <RowContainer width="60%">
        <div className="volume-slider">
          <Slider id="volume-slider" min={0} max={100} value={volume} onChange={setVolume} />
          <label htmlFor="volume-slider">volume</label>
        </div>
      </RowContainer>
    </>
  );
};
