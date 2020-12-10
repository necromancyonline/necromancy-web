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

let slideshowItem = require('./Header_images/slideshow_1.jpg');

class Header extends Component {
  state = {
    hasLoaded: false,
  };

  reRender = () => {
    this.setState({});
  };
  componentDidMount() {
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
        transitionHandler = 3;
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
    // console.log(slideNum, slideshowItem, nextSlideshowItem); // to watch how slide show changes
    return (
      <div className="header">
        <div
          className="banner-back-image"
          style={{
            backgroundImage: `url( ${nextSlideshowItem})`,
          }}
        >
          <div>
            <img
              className="banner-front-image"
              alt="Wizardry Online Anime Style"
              src={slideshowItem}
              style={{
                opacity: opacityHandler,
                transition: `${transitionHandler}s`,
              }}
            />
          </div>
        </div>
        <div className="banner-logo-box">
          <img
            className="banner-logo-image"
            src={logo}
            alt="Wizardry-Online"
          ></img>
        </div>
        <div className="header-nav-box">
          <nav className="header-nav">
            <div className="header-block"></div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
