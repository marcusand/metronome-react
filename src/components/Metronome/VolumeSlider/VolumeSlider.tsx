import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from '../Slider/Slider';
import { selectVolume } from '../../../state/selectors/metronome';
import { actions } from '../../../state/slices/metronome';
import './VolumeSlider.scss';

export const VolumeSlider: React.FC = () => {
  const dispatch = useDispatch();
  const volume = useSelector(selectVolume);

  return (
    <div className="volume-slider">
      <Slider
        id="volume-slider"
        min={0}
        max={100}
        value={volume}
        onChange={(value) => dispatch(actions.setVolume(value))}
      />
      <label htmlFor="volume-slider">volume</label>
    </div>
  );
};
