import React, { Component } from 'react';
import { connect } from 'react-redux';
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
let nextSlideNum = 2;
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
        this.reRender();
        // this.updateSlide();
        opacityTimer();
        this.handleSlideContent();
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
          slideNum += 2;
          if (slideNum > 3) {
            slideNum = 1;
          }
        }
        slideshowItem = require(`./Header_images/slideshow_${slideNum}.jpg`);
      } else {
        if (nextSlideNum === 3) {
          nextSlideNum = 1;
        } else if (nextSlideNum >= 1) {
          nextSlideNum += 2;
          if (nextSlideNum > 3) {
            nextSlideNum = 2;
          }
        }
        nextSlideshowItem = require(`./Header_images/slideshow_${nextSlideNum}.jpg`);
      }
      console.log('content changed');
      this.reRender();
    }, 5000);
  };

  render() {
    console.log(slideshowItem);
    return (
      <header>
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
          <img src={logo} alt="Wizardry-Online"></img>
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

export default connect()(Header);
