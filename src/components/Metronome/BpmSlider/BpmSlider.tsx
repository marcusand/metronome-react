import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBpm, selectMaxBpm, selectMinBpm } from '../../../state/selectors/metronome';
import { setBpm } from '../../../state/slices/metronome';
import { AppDispatch } from '../../../state/store';
import { Slider } from '../Slider/Slider';

export const BpmSlider: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const minBpm = useSelector(selectMinBpm);
  const maxBpm = useSelector(selectMaxBpm);
  const bpm = useSelector(selectBpm);

  return (
    <Slider
      id="bpm-slider"
      min={minBpm}
      max={maxBpm}
      value={bpm}
      onChange={(value) => dispatch(setBpm(value))}
    />
  );
};
