import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTimeSignature } from '../../../state/selectors/metronome';
import { actions } from '../../../state/slices/metronome';
import { Poti } from '../Poti/Poti';

export const TimePoti: React.FC = () => {
  const dispatch = useDispatch();
  const timeSignature = useSelector(selectTimeSignature);

  return (
    <Poti
      title="time"
      stepsCount={12}
      value={timeSignature}
      onChange={(value) => dispatch(actions.setTimeSignature(value))}
    />
  );
};
