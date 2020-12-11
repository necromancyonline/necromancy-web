import React, { Component } from 'react';

// -> IMPORT COMPONENT <- \\
import MenuLeftColumn from '../../components/MenuLeftColumn/MenuLeftColumn';
import Patreon from '../../components/Patreon/Patreon';
import Faq from '../../components/Faq/Faq';
import Github from '../../components/Github/Github';
// -> IMPORT COMPONENT <- \\

import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-body">
        <div className="homepage-body-content">
          <div className="homepage-center">
            <div className="homepage-spacer" />
            <div className="homepage-left-column">
              <MenuLeftColumn />
            </div>
            <div className="homepage-faq">
              <Faq />
            </div>
            <div className="homepage-links">
              <Patreon />
              <Github />
            </div>
            <div className="homepage-spacer" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
