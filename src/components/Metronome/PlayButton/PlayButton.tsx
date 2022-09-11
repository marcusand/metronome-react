import React from 'react';
import './PlayButton.scss';

const PlayIcon: React.FC = () => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <path d="M500 250L125 500L125 0L500 250Z" />
  </svg>
);

const PauseIcon: React.FC = () => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <rect x="62" width="100" height="500" />
    <rect x="337" width="100" height="500" />
  </svg>
);

interface Props {
  playing: boolean;
  onPlay: () => void;
  onPause: () => void;
}

export const PlayButton: React.FC<Props> = ({ playing, onPlay, onPause }) => {
  return (
    <div className="play-button" onClick={() => (playing ? onPause() : onPlay())}>
      <div className="icon-container">{playing ? <PauseIcon /> : <PlayIcon />}</div>
    </div>
  );
};
