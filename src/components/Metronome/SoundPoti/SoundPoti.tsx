import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Poti } from '../Poti/Poti';
import { selectSampleSet } from '../../../state/selectors/metronome';
import { AppDispatch } from '../../../state/store';
import { setSampleSet } from '../../../state/slices/metronome';

export const SoundPoti: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const sampleSet = useSelector(selectSampleSet);

  return (
    <Poti
      title="sound"
      stepsCount={3}
      value={sampleSet}
      onChange={(value) => dispatch(setSampleSet(value))}
    />
  );
};
