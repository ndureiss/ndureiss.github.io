import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome on Nicolas Dureisseix website.
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          Work in progress ...
        </header>
      </div>
    );
  }
}

export default App;
