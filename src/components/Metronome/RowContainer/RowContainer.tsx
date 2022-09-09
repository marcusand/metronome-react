import React from 'react';

interface Props {
  width?: string;
  children: React.ReactNode;
}

export const RowContainer: React.FC<Props> = ({ width = 'auto', children }) => {
  return (
    <div className="container" style={{ width }}>
      {children}
    </div>
  );
};
