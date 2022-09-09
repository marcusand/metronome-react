import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBpm } from '../../state/selectors/metronome';
import { BpmInfo } from './BpmInfo/BpmInfo';
import { RowContainer } from './RowContainer/RowContainer';
import { TapButton } from './TapButton/TapButton';
import { Slider } from './Slider/Slider';
import { actions as metronome } from '../../state/slices/metronome';
import './Metronome.scss';

interface Props {}

const MIN_BPM = 40;
const MAX_BPM = 220;

export const Metronome: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const bpm = useSelector(selectBpm);

  const setBpm = (value: number) => dispatch(metronome.setBpm(value));

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
    </>
  );
};
