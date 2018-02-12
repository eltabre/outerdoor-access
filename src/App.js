import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://media.giphy.com/media/rtRflhLVzbNWU/source.gif'} className="App-logo" alt="logo" />
          <h1 className="App-title">Does Rocketry have Outer-Door Access to Space@VT?</h1>
        </header>
        <h1 className="NO">
          NO.
        </h1>
      </div>
    );
  }
}

export default App;
