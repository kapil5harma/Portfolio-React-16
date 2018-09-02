import React, { Component } from 'react';
import './App.css';
import LandingPage from './app/LandingPage/LandingPage';
import NavBar from './app/NavBar/NavBar';
import SocialLinks from './app/SocialLinks/SocialLinks';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar></NavBar>
        <LandingPage></LandingPage>
        <SocialLinks></SocialLinks>
      </div>
    );
  }
}

export default App;
