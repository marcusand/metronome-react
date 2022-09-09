import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBpm } from '../../state/selectors/metronome';
import { BpmInfo } from './BpmInfo/BpmInfo';
import { RowContainer } from './RowContainer/RowContainer';
import { TapButton } from './TapButton/TapButton';
import { actions as metronome } from '../../state/slices/metronome';
import './Metronome.scss';

interface Props {}

const MIN_BPM = 40;
const MAX_BPM = 220;

export const Metronome: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const bpm = useSelector(selectBpm);

  return (
    <>
      <RowContainer>
        <BpmInfo>{bpm}</BpmInfo>
      </RowContainer>
      <RowContainer>
        <TapButton
          minBpm={MIN_BPM}
          maxBpm={MAX_BPM}
          onTap={(value) => dispatch(metronome.setBpm(value))}
        />
      </RowContainer>
    </>
  );
};
