import React, { Component } from 'react';

// -> IMPORT COMPONENT <- \\

// -> IMPORT COMPONENT <- \\

import './MenuRightColumn.css';

const MRC1 = require('./MenuRightColumn_images/mrc_1.jpg');
const MRC2 = require('./MenuRightColumn_images/mrc_2.jpg');
const MRC3 = require('./MenuRightColumn_images/mrc_3.jpg');
const MRC4 = require('./MenuRightColumn_images/mrc_4.jpg');
const MRC5 = require('./MenuRightColumn_images/mrc_5.jpg');
const MRC6 = require('./MenuRightColumn_images/mrc_6.jpg');

class MenuLeftColumn extends Component {
  render() {
    return (
      <div className="menu-rc-align">
        <div className="menu-rc-image">
          <div
            className="menu-rc-item"
            style={{
              backgroundImage: `url(${MRC2})`,
            }}
          ></div>
        </div>
        <div className="menu-rc-image">
          <div
            className="menu-rc-item"
            style={{
              backgroundImage: `url(${MRC1})`,
            }}
          ></div>
        </div>
        <div className="menu-rc-image">
          <div
            className="menu-rc-item"
            style={{
              backgroundImage: `url(${MRC3})`,
            }}
          ></div>
        </div>
        <div className="menu-rc-image">
          <div
            className="menu-rc-item"
            style={{
              backgroundImage: `url(${MRC4})`,
            }}
          ></div>
        </div>
        <div className="menu-rc-image">
          <div
            className="menu-rc-item"
            style={{
              backgroundImage: `url(${MRC5})`,
            }}
          ></div>
        </div>
        <div className="menu-rc-image">
          <div
            className="menu-rc-item"
            style={{
              backgroundImage: `url(${MRC6})`,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default MenuLeftColumn;
