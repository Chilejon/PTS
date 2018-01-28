import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PTS</h1>
        </header>

          <form>
          <button value="enterPred">Enter Preditions</button>
          </form>

      </div>
    );
  }
}

export default App;
