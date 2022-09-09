import React from 'react';
import './RowContainer.scss';

interface Props {
  width?: string;
  children: React.ReactNode;
}

export const RowContainer: React.FC<Props> = ({ width = 'auto', children }) => {
  return (
    <div className="row-container" style={{ width }}>
      {children}
    </div>
  );
};
