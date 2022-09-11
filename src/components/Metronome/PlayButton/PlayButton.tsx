import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlaying } from '../../../state/selectors/metronome';
import { actions } from '../../../state/slices/metronome';
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

export const PlayButton: React.FC = () => {
  const playing = useSelector(selectPlaying);
  const dispatch = useDispatch();

  const handleClick = () => {
    playing ? dispatch(actions.pause()) : dispatch(actions.play());
  };

  return (
    <div className="play-button" onClick={handleClick}>
      <div className="icon-container">{playing ? <PauseIcon /> : <PlayIcon />}</div>
    </div>
  );
};
