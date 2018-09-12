import React, { Component } from 'react';

import './App.css';

import LandingPage from './app/LandingPage/LandingPage';
import NavBar from './app/NavBar/NavBar';
import About from './app/About/About';
import Portfolio from './app/Portfolio/Portfolio';

import { ClickMe, ToTop } from './app/styled-components';

const scrollPage = () => {
  if (window.scrollY % window.innerHeight === 0) {
    window.scrollBy(0, window.innerHeight);
  } else if (window.scrollY < window.innerHeight) {
    window.scrollTo(0, window.innerHeight);
  } else if (
    window.scrollY > window.innerHeight &&
    window.scrollY < 2 * window.innerHeight
  ) {
    window.scrollTo(0, 2 * window.innerHeight);
  }
};

// Binding our scroll event handler.
window.onscroll = () => {
  // Grab element with id='to-top' to add and remove classes.
  let toTop = document.getElementById('to-top');

  // Show/Hide 'To Top' on scroll down/up.
  if (window.scrollY > 90) {
    toTop.classList.add('slide-in');
    toTop.classList.remove('slide-out');
  } else if (window.scrollY < window.oldScroll) {
    toTop.classList.add('slide-out');
    toTop.classList.remove('slide-in');
  }
  window.oldScroll = window.scrollY;
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
        <ToTop className="to-top" id="to-top">
          <i className="fas fa-angle-double-up" />
          To Top
        </ToTop>
      </div>
    );
  }
}

export default App;
