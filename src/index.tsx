import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { store } from './state/store';
import './index.scss';
import { initializeMetronome } from './state/slices/metronome';

store.dispatch(initializeMetronome());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
