import React, { Component } from 'react';

class NavBar extends Component {
  
  render() {
    
    return (
      <nav
        className="nav-bar"
        
      >
        <div className="menu">
          <div
            className="about"
          >
            About
          </div>
          <div
            className="portfolio"
          >
            Portfolio
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
