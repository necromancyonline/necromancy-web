import React, { Component } from 'react';
import './Footer.css';

const github = require('./Footer_images/GitHubLogo.png');
const patreon = require('./Footer_images/PatreonLogo.png');

class Footer extends Component {
  onClickLink = (link) => (event) => {
    switch (link) {
      case 'github':
        window.open('https://github.com/necromancyonline');
        break;
      case 'patreon':
        window.open(
          'https://www.patreon.com/NecromancyOnline?fbclid=IwAR0_2ZOeBqtsaWrYaTJt2KiByjKJ4cBr5JYSgVoQ9oFu87QVQtvgYFmu2tc'
        );
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <footer className="footer-box">
        <div className="App-footer">
          <div className="footer-links">
            <div className="footer-link-item">
              <img
                className="footer-link-img"
                alt="github"
                src={github}
                onClick={this.onClickLink('github')}
              />
            </div>
            <div className="footer-link-item">
              <img
                className="footer-link-img"
                alt="patreon"
                src={patreon}
                onClick={this.onClickLink('patreon')}
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
