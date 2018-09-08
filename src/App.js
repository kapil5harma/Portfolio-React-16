import React, { Component } from 'react';
import './App.css';
import LandingPage from './app/LandingPage/LandingPage';
import NavBar from './app/NavBar/NavBar';
import About from './app/About/About';
import { ClickMe } from './app/styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar className="nav-bar" />
        <LandingPage className="landing-page" />
        <About className="about" />
        <ClickMe width="10rem" bottom="1.5rem">
          Click Me!
        </ClickMe>
      </div>
    );
  }
}

export default App;
