import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTimeSignature } from '../../../state/selectors/metronome';
import { setTimeSignature } from '../../../state/slices/metronome';
import { AppDispatch } from '../../../state/store';
import { Poti } from '../Poti/Poti';

export const TimePoti: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const timeSignature = useSelector(selectTimeSignature);

  return (
    <Poti
      title="time"
      stepsCount={12}
      value={timeSignature}
      onChange={(value) => dispatch(setTimeSignature(value))}
    />
  );
};
