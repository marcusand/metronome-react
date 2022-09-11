import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../Footer/Footer';
import './About.scss';

export const About: React.FC = () => {
  return (
    <div className="about">
      <section>
        <h2>offline usage & installation</h2>
        <p>
          This metronome is offline capable and installable. This means on ios or android you can
          add it to your homescreen and use it like a native app or you can "install" it on your
          desktop computer.
        </p>
        <p>
          For more information see{' '}
          <a
            href="https://mobilesyrup.com/2020/05/24/how-install-progressive-web-app-pwa-android-ios-pc-mac/"
            target="_blank"
            rel="noreferrer"
          >
            this guide
          </a>
          .
        </p>
      </section>
      <section>
        <h2>credits</h2>
        <p>
          By{' '}
          <a href="https://github.com/marcusand" target="__blank">
            marcusand
          </a>
          . Report any issues on <a href="https://github.com/marcusand/metronome">github</a> or send
          me an <a href="mailto:mail@marcusand.de">email</a>
        </p>
      </section>
      <Footer>
        <Link to="/">back</Link>
      </Footer>
    </div>
  );
};
