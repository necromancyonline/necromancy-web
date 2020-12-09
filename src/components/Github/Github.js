import React, { Component } from 'react';
import './Github.css';

const dropbox = require('./Github_images/bg_leftMenu.png');
const github = require('./Github_images/github.png');

class Github extends Component {
  onClickLink = (link) => (event) => {
    switch (link) {
      case 'github':
        window.open('https://github.com/necromancyonline');
        break;
      default:
        return;
    }
  };
  componentDidMount() {}

  render() {
    return (
      <div className="github-box" onClick={this.onClickLink('github')}>
        <img src={dropbox} alt="github-box" />
        <img src={github} alt="github" className="github-image" />
        {/* <p className="github-text">Click here!</p> */}
      </div>
    );
  }
}

export default Github;
