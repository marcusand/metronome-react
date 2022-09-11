import React, { useRef } from 'react';
import './Poti.scss';

interface Props {
  title?: string;
  stepsCount: number;
  value: number;
  onChange: (value: number) => void;
}

const minAngle = -130;
const maxAngle = 130;

export const Poti: React.FC<Props> = ({ title = '', stepsCount, value, onChange }) => {
  const mouseDownY = useRef(0);
  const mouseDownStep = useRef(0);

  const angleOfOneStep = (Math.abs(minAngle) + maxAngle) / (stepsCount - 1);
  const currentAngle = minAngle + value * angleOfOneStep;

  const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = (event) => {
    mouseDownY.current = event.pageY;
    mouseDownStep.current = value;

    if (event.pointerType === 'touch') {
      document.addEventListener('touchmove', handlePointerMove);
      document.addEventListener('touchend', handlePointerUp);
    } else {
      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    }
  };

  const handlePointerUp = (event: TouchEvent | PointerEvent) => {
    if (event instanceof TouchEvent) {
      document.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('touchend', handlePointerUp);
    } else {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    }
  };

  const handlePointerMove = (event: TouchEvent | PointerEvent) => {
    let pageY;

    if (event instanceof TouchEvent) {
      pageY = event.targetTouches[0].pageY;
    } else {
      pageY = event.pageY;
    }

    const dy = mouseDownY.current - pageY;
    const dStep = Math.round(dy * (stepsCount * 0.01));
    const newStep = mouseDownStep.current + dStep;
    const newStepCapped = Math.min(Math.max(newStep, 0), stepsCount - 1);

    onChange(newStepCapped);
  };

  return (
    <div className="poti-container">
      <div className="poti" onPointerDown={handlePointerDown}>
        <div className="stroke-container" style={{ transform: `rotate(${currentAngle}deg)` }}>
          <div className="stroke"></div>
        </div>
        <div>{value + 1}</div>
      </div>
      <div className="title">{title}</div>
    </div>
  );
};
