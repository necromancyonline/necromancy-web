import React, { Component } from 'react';
import './Header.css';

// -> IMPORT COMPONENT <-- \\
const logo = require('./Header_images/logo.png');
let slideshowItem = require('./Header_images/slideshow_1.jpg');
// -> IMPORT COMPONENT <-- \\

let slideNum = 1;
class Header extends Component {
  state = {};

  reRender = () => {
    this.setState({});
  };
  componentDidMount() {
    this.updateSlide();
  }

  updateSlide = () => {
    setTimeout(() => {
      if (slideNum === 1) {
        slideNum++;
        slideshowItem = require(`./Header_images/slideshow_${slideNum}.jpg`);
        this.reRender();
      } else {
        slideNum--;
        slideshowItem = require(`./Header_images/slideshow_${slideNum}.jpg`);
        this.reRender();
      }
      this.updateSlide();
    }, 10000);
  };
  render() {
    return (
      <header>
        <div className="header-banner">
          <div>
            <img
              className="banner-image"
              alt="Wizardry-Online-Anime-Style"
              src={slideshowItem}
            />
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

export default Header;
