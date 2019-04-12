import React from "react";
import logo from '../logo.svg';

class TemporaryHome extends React.Component {
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
    )
  }
}

export default TemporaryHome;