import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Routes from './Routes';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <CssBaseline />      
        <Routes />
      </Router>
    );
  }
}

export default App;