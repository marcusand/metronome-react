import React from 'react';
import { useSelector } from 'react-redux';
import { selectBpm } from '../../../state/selectors/metronome';
import './BpmInfo.scss';

export const BpmInfo: React.FC = () => {
  const bpm = useSelector(selectBpm);

  return (
    <div className="bpm-info">
      <span className="number">{bpm}</span>
      <label className="label" htmlFor="bpm-slider">
        BPM
      </label>
    </div>
  );
};
