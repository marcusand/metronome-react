import React, { useRef, useState } from 'react';
import './TapButton.scss';

interface Props {
  minBpm: number;
  maxBpm: number;
  onTap: (value: number) => void;
}

export const TapButton: React.FC<Props> = ({ minBpm, maxBpm, onTap }) => {
  const [flip, setFlip] = useState(false);
  const lastTapRef = useRef(-1);

  const tap = () => {
    const currentTap = Date.now();

    if (lastTapRef.current) {
      const diff = (currentTap - lastTapRef.current) / 1000;
      const bpm = Math.min(Math.round(60 / diff), maxBpm);

      if (bpm >= minBpm) onTap(bpm);
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
