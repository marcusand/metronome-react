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
  const mouseDownAngle = useRef(0);

  const angleOfOneStep = (Math.abs(minAngle) + maxAngle) / (stepsCount - 1);
  const anglesLookUp = Array(stepsCount)
    .fill(0)
    .map((_, index) => Math.round(minAngle + index * angleOfOneStep));

  const currentAngle = anglesLookUp[value];

  const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = (event) => {
    mouseDownY.current = event.pageY;
    mouseDownAngle.current = currentAngle;

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

    if (event instanceof PointerEvent) {
      pageY = event.pageY;
    } else {
      pageY = event.targetTouches[0].pageY;
    }

    const dy = mouseDownY.current - pageY;
    const newAngle = mouseDownAngle.current + dy * 5;
    const newAngleCapped = Math.max(minAngle, Math.min(maxAngle, newAngle));

    const nearestStep = anglesLookUp.findIndex((angle) => {
      return newAngleCapped - angle < angleOfOneStep;
    });

    if (nearestStep !== currentAngle) {
      onChange(nearestStep);
    }
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
