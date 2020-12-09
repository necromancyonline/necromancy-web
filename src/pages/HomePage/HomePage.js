import React, { Component } from 'react';

// -> IMPORT COMPONENT <- \\
import backgroundIMG from '../../components/App/App_public/bg_body.jpg';
import Discord from '../../components/Discord/Discord';
import Patreon from '../../components/Patreon/Patreon';
import Faq from '../../components/Faq/Faq';
import Github from '../../components/Github/Github';
// -> IMPORT COMPONENT <- \\

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-body">
        <div className="background-site">
          <img src={backgroundIMG} alt="background-for-site" />
        </div>
        <div className="homepage-body-content">
          <Discord />
          <Patreon />
          <Faq />
          <Github />
        </div>
      </div>
    );
  }
}

export default HomePage;
