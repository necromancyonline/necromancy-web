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
const totalSlides = 4;
// -> SCOPE VARS <- //

// -> NAV BAR VARS <-//
let positioner = 'absolute';
let offSetter = '0px';
// -> NAV BAR VARS <-//

class Header extends Component {
  state = {
    hasLoaded: false,
    navNeedsUpdate: false,
  };

  reRender = () => {
    this.setState({
      ...this.state,
    });
  };

  navBarRender = (boolean) => {
    this.setState({
      ...this.state,
      navNeedsUpdate: boolean,
    });
  };

  componentDidMount() {
    this.handleFade();
    this.setState({
      ...this.state,
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
        if (slideNum === totalSlides) {
          slideNum = 1;
        } else if (slideNum >= 1) {
          slideNum++;
          if (slideNum > totalSlides) {
            slideNum = 1;
          }
        }
        slideshowItem = require(`./Header_images/slideshow_${slideNum}.jpg`);
      } else {
        if (slideNum === totalSlides) {
          slideNum = 1;
        } else if (slideNum >= 1) {
          slideNum++;
          if (slideNum > totalSlides) {
            slideNum = 1;
          }
        }
        nextSlideshowItem = require(`./Header_images/slideshow_${slideNum}.jpg`);
      }
      this.reRender();
    }, 5000);
  };

  render() {
    // console.log(
    //   slideNum,
    //   `FRONT: ${slideshowItem}`,
    //   `BACK: ${nextSlideshowItem}`
    // ); // to watch how slide show changes

    window.onscroll = function () {
      updateNavBar();
    };

    const updateNavBar = () => {
      if (this.state.navNeedsUpdate === false) {
        if (window.pageYOffset >= 600) {
          positioner = 'fixed';
          offSetter = '-600px';
          this.navBarRender(true);
        }
      } else {
        if (window.pageYOffset <= 600) {
          positioner = 'absolute';
          offSetter = '0px';
          this.navBarRender(false);
        }
      }
    };
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
        <div
          className="header-nav-box"
          style={{ position: positioner, marginTop: offSetter }}
        >
          <nav className="header-nav">
            <div className="header-block"></div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
