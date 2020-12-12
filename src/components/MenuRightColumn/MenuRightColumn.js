import React, { Component } from 'react';

// -> IMPORT COMPONENT <- \\

// -> IMPORT COMPONENT <- \\

import './MenuRightColumn.css';

/*-----> IMAGES FOR RIGHT COLUMN <-----*/
const MRC1 = require('./MenuRightColumn_images/mrc_1.jpg');
const MRC2 = require('./MenuRightColumn_images/mrc_2.jpg');
const MRC3 = require('./MenuRightColumn_images/mrc_3.jpg');
const MRC4 = require('./MenuRightColumn_images/mrc_4.jpg');
const MRC5 = require('./MenuRightColumn_images/mrc_5.jpg');
const MRC6 = require('./MenuRightColumn_images/mrc_6.jpg');
/*-----> IMAGES FOR RIGHT COLUMN <-----*/

/*-----> GIFS FOR RIGHT COLUMN <-----*/
const MRC1_GIF = require('./MenuRightColumn_images/mrc_1_gif.gif');
const MRC2_GIF = require('./MenuRightColumn_images/mrc_2_gif.gif');
const MRC3_GIF = require('./MenuRightColumn_images/mrc_3_gif.gif');
const MRC4_GIF = require('./MenuRightColumn_images/mrc_4_gif.gif');
const MRC5_GIF = require('./MenuRightColumn_images/mrc_5_gif.gif');
const MRC6_GIF = require('./MenuRightColumn_images/mrc_6_gif.gif');
/*-----> GIFS FOR RIGHT COLUMN <-----*/

class MenuLeftColumn extends Component {
  onClickLink = (link) => (event) => {
    switch (link) {
      case '1':
        window.open(
          'https://www.youtube.com/watch?v=WUv4XbqZJuY&ab_channel=FodderBoi'
        );
        break;
      case '2':
        window.open(
          'https://www.youtube.com/watch?v=wQSXfeKitVc&ab_channel=WizonRepair'
        );
        break;
      case '3':
        window.open(
          'https://www.youtube.com/watch?v=typt2qBEgWE&ab_channel=MMOHuts'
        );
        break;
      case '4':
        window.open(
          'https://www.youtube.com/watch?v=uaEhhB3dwrY&ab_channel=Dremlock'
        );
        break;
      case '5':
        window.open(
          'https://www.youtube.com/watch?v=xBy2Gt83uQM&ab_channel=%2a%E7%B4%85%E8%8C%B6%E5%A5%BD%E3%81%8D%2a.'
        );
        break;
      case '6':
        window.open(
          'https://www.youtube.com/watch?v=aX6hkmqSFAU&ab_channel=AikaLakuza'
        );
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="menu-rc-align">
        <div className="menu-rc-image">
          <div
            className="menu-rc-item"
            style={{
              backgroundImage: `url(${MRC1})`,
            }}
          >
            <img
              className="menu-rc-gif"
              src={MRC1_GIF}
              onClick={this.onClickLink('1')}
            />
          </div>
        </div>
        <div className="menu-rc-image">
          <div
            className="menu-rc-item"
            style={{
              backgroundImage: `url(${MRC2})`,
            }}
          >
            <img
              className="menu-rc-gif"
              src={MRC2_GIF}
              onClick={this.onClickLink('2')}
            />
          </div>
        </div>
        <div className="menu-rc-image">
          <div
            className="menu-rc-item"
            style={{
              backgroundImage: `url(${MRC3})`,
            }}
          >
            {' '}
            <img
              className="menu-rc-gif"
              src={MRC3_GIF}
              onClick={this.onClickLink('3')}
            />
          </div>
        </div>
        <div className="menu-rc-image">
          <div
            className="menu-rc-item"
            style={{
              backgroundImage: `url(${MRC4})`,
            }}
          >
            <img
              className="menu-rc-gif"
              src={MRC4_GIF}
              onClick={this.onClickLink('4')}
            />
          </div>
        </div>
        <div className="menu-rc-image">
          <div
            className="menu-rc-item"
            style={{
              backgroundImage: `url(${MRC5})`,
            }}
          >
            <img
              className="menu-rc-gif"
              src={MRC5_GIF}
              onClick={this.onClickLink('5')}
            />
          </div>
        </div>
        <div className="menu-rc-image">
          <div
            className="menu-rc-item"
            style={{
              backgroundImage: `url(${MRC6})`,
            }}
          >
            <img
              className="menu-rc-gif"
              src={MRC6_GIF}
              onClick={this.onClickLink('6')}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MenuLeftColumn;
