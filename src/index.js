import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DarkMode from './Context/DarkMode';

ReactDOM.render(
  <DarkMode>
    <App />
  </DarkMode>,
  document.getElementById('root')
);
