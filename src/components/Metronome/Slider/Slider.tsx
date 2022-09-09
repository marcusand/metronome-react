import React from 'react';
import './Slider.scss';

interface Props {
  id?: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

export const Slider: React.FC<Props> = ({ id = '', min, max, value, onChange }) => {
  return (
    <div className="slider-container">
      <input type="button" className="button" value="-" />
      <input
        type="range"
        className="slider"
        id={id}
        min={min}
        max={max}
        onChange={(e) => onChange(parseInt(e.target.value))}
        value={value}
      />
      <input type="button" className="button" value="+" />
    </div>
  );
};
