import React from 'react';
import './BpmInfo.scss';

interface Props {
  children: React.ReactNode;
}

export const BpmInfo: React.FC<Props> = ({ children }) => {
  return (
    <div className="bpm-info">
      <span className="number">{children}</span>
      <label className="label" htmlFor="bpm-slider">
        BPM
      </label>
    </div>
  );
};
