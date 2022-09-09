import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { About } from '../Routes/About/About';
import { Home } from '../Routes/Home/Home';

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
