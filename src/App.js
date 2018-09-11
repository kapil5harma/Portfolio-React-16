import React, { Component } from 'react';
import './App.css';
import LandingPage from './app/LandingPage/LandingPage';
import NavBar from './app/NavBar/NavBar';
import About from './app/About/About';
import { ClickMe } from './app/styled-components';
import Portfolio from './app/Portfolio/Portfolio';

const scrollPage = () => {
  // window.scrollTo(0, 0);
  // console.log('window.scrollY: ', window.scrollY);
  // console.log('window.innerHeight: ', window.innerHeight);
  if (window.scrollY % window.innerHeight === 0) {
    // console.log('1');
    window.scrollBy(0, window.innerHeight);
  } else if (window.scrollY < window.innerHeight) {
    // console.log('2');
    window.scrollTo(0, window.innerHeight);
  } else if (
    window.scrollY > window.innerHeight &&
    window.scrollY < 2 * window.innerHeight
  ) {
    // console.log('3');
    window.scrollTo(0, 2 * window.innerHeight);
  }
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
