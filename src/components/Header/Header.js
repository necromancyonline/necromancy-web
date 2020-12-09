import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

// -> IMPORT COMPONENT <-- \\
const logo = require('./Header_images/logo.png');
//const video = require('./Header_images/wizon-header-video.mp4');
//const audio = require('./Header_images/momento.mp3');
// -> IMPORT COMPONENT <-- \\

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-video">
          <video
            className="header-video"
            autoPlay
            loop
            src={null}
            type="video/mp4"
            muted
            playsInline
          />
        </div>
        <div className="header-logo">
          <img src={logo} alt="Wizardry-Online"></img>
        </div>
        <div className="header-blur" />
        <div className="App-header">
          <nav className="header-nav">
            <div className="header-block">
              <audio autoPlay="autoPlay" loop muted>
                <source src={null} />
              </audio>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default connect()(Header);
