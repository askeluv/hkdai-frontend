import React from 'react';
import logo from './hkdai.svg';
import './App.css';
import Exchange from './components/Exchange';
import InfoHeader from './components/InfoHeader';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <InfoHeader />
      <header className="App-header">
        <img src={logo} className="App-logo mb-4" alt="logo" />
        <h2 className="header mb-5">HKDai - A bankless Hong Kong Dollar.</h2>
        <Exchange />
      </header>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
