import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="/about" element={<div>about</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
