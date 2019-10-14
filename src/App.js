import React from 'react';
import logo from './logo.svg';
import './App.css';
import Exchange from './components/Exchange';
import InfoHeader from './components/InfoHeader';

function App() {
  return (
    <div className="App">
      <InfoHeader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>HKDai - A digital, bankless Hong Kong Dollar.</p>
        <Exchange />
      </header>
    </div>
  );
}

export default App;
