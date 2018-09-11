import React, { Component } from 'react';
import './App.css';
import LandingPage from './app/LandingPage/LandingPage';
import NavBar from './app/NavBar/NavBar';
import About from './app/About/About';
import { ClickMe } from './app/styled-components';
import Portfolio from './app/Portfolio/Portfolio';

const scrollPage = () => {
  window.scrollTo(0, 0);
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar className="nav-bar" />
        <LandingPage className="landing-page" />
        <About className="about" />
        <Portfolio className="portfolio" />
        <ClickMe onClick={scrollPage}>
          Click Me!
          <i className="fas fa-chevron-down" />
        </ClickMe>
      </div>
    );
  }
}

export default App;
