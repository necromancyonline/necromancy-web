import React, { Component } from 'react';
import './Discord.css';

class Discord extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="discord-box">
        <iframe
          className="Discord"
          title="Discord"
          src={process.env.REACT_APP_DISCORD_KEY}
          width="350"
          height="528"
          allowtransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    );
  }
}

export default Discord;
