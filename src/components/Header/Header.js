import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

// -> IMPORT COMPONENT <-- \\
const logo = require('./Header_images/logo.png');
// -> IMPORT COMPONENT <-- \\

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-video"></div>
        <div className="header-logo">
          <img src={logo} alt="Wizardry-Online"></img>
        </div>
        <div className="header-blur" />
        <div className="App-header">
          <nav className="header-nav">
            <div className="header-block"></div>
          </nav>
        </div>
      </header>
    );
  }
}

export default connect()(Header);
