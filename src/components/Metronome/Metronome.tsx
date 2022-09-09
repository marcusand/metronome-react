import React from 'react';
import { useSelector } from 'react-redux';
import { selectBpm } from '../../state/selectors/metronome';
import { BpmInfo } from './BpmInfo/BpmInfo';
import { RowContainer } from './RowContainer/RowContainer';
import './Metronome.scss';

interface Props {}

export const Metronome: React.FC<Props> = () => {
  const bpm = useSelector(selectBpm);

  return (
    <>
      <RowContainer>
        <BpmInfo>{bpm}</BpmInfo>
      </RowContainer>
    </>
  );
};
