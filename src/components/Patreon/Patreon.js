import React, { Component } from 'react';
import './Patreon.css';

const dropbox = require('./Patreon_images/bg_leftMenu.png');
const patreon = require('./Patreon_images/patreon.jpg');

class Patreon extends Component {
  onClickLink = (link) => (event) => {
    switch (link) {
      case 'patreon':
        window.open(
          'https://www.patreon.com/NecromancyOnline?fbclid=IwAR0_2ZOeBqtsaWrYaTJt2KiByjKJ4cBr5JYSgVoQ9oFu87QVQtvgYFmu2tc'
        );
        break;
      default:
        return;
    }
  };
  componentDidMount() {}

  render() {
    return (
      <div className="patreon-position-1">
        <div className="patreon-box" onClick={this.onClickLink('patreon')}>
          <img src={dropbox} alt="patreon-box" />
          <img src={patreon} alt="patreon" className="patreon-image" />
        </div>
      </div>
    );
  }
}

export default Patreon;
