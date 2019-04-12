import React from "react";
import logo from '../logo.svg';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
           Working Home
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          Work in progress ...
        </header>
      </div>
    )
  }
}

export default Home;