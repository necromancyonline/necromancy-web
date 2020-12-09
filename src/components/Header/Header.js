import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

// -> IMPORT COMPONENT <-- \\
const logo = require('./Header_images/logo.png');
const slideshowItem = require('./Header_images/slideshow_1.jpg');
// -> IMPORT COMPONENT <-- \\

class Header extends Component {
  state = {
    slideNum: 1,
  };

  componentDidMount() {
    this.updateSlide();
  }

  updateSlide = () => {
    setTimeout(() => {
      console.log('working');
      this.updateSlide();
    }, 5000);
  };
  render() {
    return (
      <header>
        <div className="header-banner">
          <div>
            <img src={slideshowItem} />
          </div>
        </div>
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
