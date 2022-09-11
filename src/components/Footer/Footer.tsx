import React from 'react';
import './Footer.scss';

interface Props {
  children: React.ReactElement;
}

export const Footer: React.FC<Props> = ({ children }) => {
  return <div className="footer">{children}</div>;
};
