import React, { Component } from 'react';
import { Menu, Links, Nav } from '../styled-components/index';

class NavBar extends Component {
  render() {
    return (
      <Nav className="Nav">
        <Menu className="Menu">
          <Links className="About">About</Links>
          <Links className="Portfolio">Portfolio</Links>
        </Menu>
      </Nav>
    );
  }
}

export default NavBar;
