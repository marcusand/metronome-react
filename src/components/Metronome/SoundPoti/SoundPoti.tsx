import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Poti } from '../Poti/Poti';
import { selectSampleSet } from '../../../state/selectors/metronome';
import { actions } from '../../../state/slices/metronome';

export const SoundPoti: React.FC = () => {
  const dispatch = useDispatch();
  const sampleSet = useSelector(selectSampleSet);

  return (
    <Poti
      title="sound"
      stepsCount={3}
      value={sampleSet}
      onChange={(value) => dispatch(actions.setSampleSet(value))}
    />
  );
};
