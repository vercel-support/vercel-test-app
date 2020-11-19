import React from 'react';
import logo from './logo.svg';
import './App.css';

import A from '@test-app/A'
import B from '@test-app/B'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div><code>{A}</code></div>
          <div><code>{B}</code></div>
        </p>
        <div>5</div>
      </header>
    </div>
  );
}

export default App;
