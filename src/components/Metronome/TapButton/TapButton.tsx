import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMaxBpm, selectMinBpm } from '../../../state/selectors/metronome';
import { setBpm } from '../../../state/slices/metronome';
import { AppDispatch } from '../../../state/store';
import './TapButton.scss';

interface Props {}

export const TapButton: React.FC<Props> = () => {
  const dispatch: AppDispatch = useDispatch();
  const minBpm = useSelector(selectMinBpm);
  const maxBpm = useSelector(selectMaxBpm);
  const [flip, setFlip] = useState(false);
  const lastTapRef = useRef(-1);

  const tap = () => {
    const currentTap = Date.now();

    if (lastTapRef.current) {
      const diff = (currentTap - lastTapRef.current) / 1000;
      const bpm = Math.min(Math.round(60 / diff), maxBpm);

      if (bpm >= minBpm) {
        dispatch(setBpm(bpm));
      }
    }

    lastTapRef.current = currentTap;
    setFlip((flip) => !flip);
  };

  return (
    <div className={`tap-button ${flip ? 'flip' : ''}`} onClick={tap}>
      tap
    </div>
  );
};
