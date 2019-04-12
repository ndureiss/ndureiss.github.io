import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Routes from './Routes';

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Routes />
      </Router>
    );
  }
}

export default App;