import React from 'react';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { selectLoading } from '../../state/selectors/metronome';
import { About } from '../Routes/About/About';
import { Home } from '../Routes/Home/Home';
import './App.scss';

interface Props {}

export const App: React.FC<Props> = () => {
  const loading = useSelector(selectLoading);

  return (
    <div className="outer-container">
      <div className="inner-container">
        {loading === 'pending' && <span>loading...</span>}
        {loading === 'failed' && <span>error loading samples :/</span>}
        {loading === 'succeeded' && (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </div>
  );
};
