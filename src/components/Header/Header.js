import React, { Component } from 'react';
import './Header.css';

// -> IMPORT COMPONENT <-- \\
const logo = require('./Header_images/logo.png');
let slideshowItem = require('./Header_images/slideshow_1.jpg');
let nextSlideshowItem = require('./Header_images/slideshow_2.jpg');

// -> IMPORT COMPONENT <-- \\

// -> SCOPE VARS <- //
let opacityHandler = 1;
let transitionHandler = 2;
let slideNum = 1;
// -> SCOPE VARS <- //

class Header extends Component {
  state = {
    hasLoaded: false,
  };

  reRender = () => {
    this.setState({});
  };
  componentDidMount() {
    // this.updateSlide();
    this.handleFade();
    this.setState({
      hasLoaded: true,
    });
  }

  handleFade = () => {
    setInterval(() => {
      opacityHandler = 1;
      this.handleSlideContent();
      this.reRender();
    }, 20000);

    const opacityTimer = () => {
      let interval;

      if (this.state.hasLoaded === true) {
        interval = 20000;
      } else {
        interval = 10000;
      }
      setTimeout(() => {
        opacityHandler = 0;
        transitionHandler = 5;
        this.handleSlideContent();
        this.reRender();
        opacityTimer();
      }, interval);
    };
    opacityTimer();
  };

  handleSlideContent = () => {
    setTimeout(() => {
      if (opacityHandler === 0) {
        if (slideNum === 3) {
          slideNum = 1;
        } else if (slideNum >= 1) {
          slideNum++;
          if (slideNum > 3) {
            slideNum = 1;
          }
        }
        slideshowItem = require(`./Header_images/slideshow_${slideNum}.jpg`);
      } else {
        if (slideNum === 3) {
          slideNum = 1;
        } else if (slideNum >= 1) {
          slideNum++;
          if (slideNum > 3) {
            slideNum = 1;
          }
        }
        nextSlideshowItem = require(`./Header_images/slideshow_${slideNum}.jpg`);
      }
      this.reRender();
    }, 5000);
  };

  render() {
    return (
      <header className="header-background">
        <div
          className="header-banner"
          style={{
            backgroundImage: `url( ${nextSlideshowItem})`,
          }}
        >
          <div>
            <img
              className="banner-image"
              alt="Wizardry Online Anime Style"
              src={slideshowItem}
              style={{
                opacity: opacityHandler,
                transition: `${transitionHandler}s`,
              }}
            />
          </div>
        </div>
        <div className="header-logo">
          <img className="banner-logo" src={logo} alt="Wizardry-Online"></img>
        </div>
        <div className="header-blur" />
        <div className="App-header">
          <nav className="header-nav">
            <div className="header-block"></div>
          </nav>
        </div>{' '}
      </header>
    );
  }
}

export default Header;
