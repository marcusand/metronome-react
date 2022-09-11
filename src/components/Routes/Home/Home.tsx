import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NoSleep from 'nosleep.js';
import { Metronome } from '../../Metronome/Metronome';
import { Footer } from '../../Footer/Footer';
import './Home.scss';

export const Home: React.FC = () => {
  const noSleepRef = useRef(new NoSleep());

  const enableNoSleep = () => {
    document.removeEventListener('click', enableNoSleep);
    noSleepRef.current.enable();
  };

  useEffect(() => {
    document.addEventListener('click', enableNoSleep);

    return () => {
      // eslint-disable-next-line
      noSleepRef.current.disable();
      document.removeEventListener('click', enableNoSleep);
    };
  });

  return (
    <>
      <Metronome />
      <Footer>
        <Link to="/about">about</Link>
      </Footer>
    </>
  );
};
