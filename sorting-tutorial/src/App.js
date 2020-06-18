import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <a href=""><span>Yul's Sorting</span></a>
      </nav>
      <header className="App-header">
        <h1>Welcome to <span className="secondary-color">Sorting Tutorial!</span></h1>
      </header>
      <main className="App-main">
        <Home />
      </main>
    </div>
  );
}

export default App;
