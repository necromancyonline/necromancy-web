import React, { Component } from 'react';

// -> IMPORT COMPONENT <- \\
import Discord from '../Discord/Discord';
// -> IMPORT COMPONENT <- \\

import './MenuLeftColumn.css';

class MenuLeftColumn extends Component {
  render() {
    return (
      <div className="menu-lc-align">
        <Discord />
        <div className="menu-lc-image" />
      </div>
    );
  }
}

export default MenuLeftColumn;
