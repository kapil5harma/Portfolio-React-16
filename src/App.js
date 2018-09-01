import React, { Component } from 'react';
import './App.css';
import LandingPage from './app/LandingPage/LandingPage';
import NavBar from './app/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar></NavBar>
        <LandingPage></LandingPage>
      </div>
    );
  }
}

export default App;
