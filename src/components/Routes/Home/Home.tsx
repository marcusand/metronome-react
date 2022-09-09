import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NoSleep from 'nosleep.js';
import { Metronome } from '../../Metronome/Metronome';
import './Home.scss';

interface Props {}

export const Home: React.FC<Props> = () => {
  const noSleepRef = useRef(new NoSleep());

  const enableNoSleep = () => {
    document.removeEventListener('click', enableNoSleep);
    noSleepRef.current.enable();
  };

  useEffect(() => {
    document.addEventListener('click', enableNoSleep);

    return () => {
      noSleepRef.current.disable();
      document.removeEventListener('click', enableNoSleep);
    };
  });

  return (
    <>
      <div className="menu">
        <Metronome />
        <Link to="/about">about</Link>
      </div>
    </>
  );
};
