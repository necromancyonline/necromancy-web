import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

// -> IMPORT COMPONENT <-- \\
const logo = require('./Header_images/logo.png');
let slideshowItem = require('./Header_images/slideshow_1.jpg');
let nextSlideshowItem = require('./Header_images/slideshow_2.jpg');

// -> IMPORT COMPONENT <-- \\
let opacityHandler = 1;
let transitionHandler = 2;
let slideNum = 1;
let nextSlideNum = 2;
class Header extends Component {
  state = {
    hasLoaded: false,
  };

  reRender = () => {
    this.setState({});
  };
  componentDidMount() {
    this.updateSlide();
    this.handleFade();
    this.setState({
      hasLoaded: true,
    });
  }

  handleFade = () => {
    setInterval(() => {
      opacityHandler = 1;
      transitionHandler = 0;
      this.reRender();
    }, 10000);

    const opacityTimer = () => {
      let interval;
      if (this.state.hasLoaded === true) {
        interval = 10000;
      } else {
        interval = 8000;
      }
      setTimeout(() => {
        opacityHandler = 0;
        transitionHandler = 2;
        this.reRender();
        opacityTimer();
      }, interval);
    };
    opacityTimer();
  };
  updateSlide = () => {
    setInterval(() => {
      if (slideNum === 1) {
        slideNum++;
        slideshowItem = require(`./Header_images/slideshow_${slideNum}.jpg`);
        nextSlideNum--;
        nextSlideshowItem = require(`./Header_images/slideshow_${nextSlideNum}.jpg`);
      } else {
        slideNum--;
        slideshowItem = require(`./Header_images/slideshow_${slideNum}.jpg`);
        nextSlideNum++;
        nextSlideshowItem = require(`./Header_images/slideshow_${nextSlideNum}.jpg`);
      }
      this.reRender();
      console.log('slide');
    }, 10000);
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
