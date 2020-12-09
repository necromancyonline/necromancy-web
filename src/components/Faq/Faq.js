import React, { Component } from 'react';
import './Faq.css';

class Faq extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="faq-position">
        <div className="faq-box">
          <div className="faq-content">
            <h1>Wizardry Online Private Server FAQ</h1>
            <ul>
              <li>
                <h3>What is this?</h3>
                <p>
                  This is an effort to make a "private" server from scratch that
                  will restore play-ability to the game Wizardry Online.
                </p>
              </li>
              <li>
                <h3>
                  How can we become eligible to play the game when it is ready?
                </h3>
                <p>
                  The current aim is to make the server available to everyone
                  and anyone. The server is open source and will stay that way.
                  We hope to keep as many people on our server as possible. If
                  you decide to make your own, that's fine but again we would
                  like to keep everyone within our server to keep the
                  player-base as whole as possible.
                </p>
              </li>
              <li>
                <h3>Can I play this game solo?</h3>
                <p>
                  Yes, you can. If you decide that multiplayer isn't for you
                  then you can download the server and host it locally and play
                  that way.
                </p>
              </li>
              <li>
                <h3>Will it cost money to play when the server is hosted?</h3>
                <p>
                  No, it never will if you play on our server (can't say the
                  same about any pop-up servers that decide to ask for money).
                </p>
              </li>
              <li>
                <h3>How can I donate?</h3>
                <p>
                  You can donate at our Patreon, Please note that this is solely
                  for the discord server and there is no way for anyone to get
                  any game benefits from this whatsoever.
                </p>
              </li>
              <li>
                <h3>How can I help?</h3>
                <p>
                  Currently we are trying to make some processes easier for a
                  lot of people to be able to pick up and complete. We are also
                  in need of people with certain skill sets.
                </p>
                <p>
                  The skill sets we are currently looking for are, Writer, Game
                  Masters, C# Developer, Front-end Web Developer, Back-end API
                  Developer, and Database Engineer.
                </p>
              </li>
              <li>
                <h3>How do I apply?</h3>
                <p>
                  You can message any of the Tech Roll people on the Discord
                  Server and they should be able to help you.
                </p>
              </li>
              <li>
                <h3>Where can I find some info on the game client?</h3>
                <p>
                  Here:{' '}
                  <span>
                    <a href="https://github.com/necromancyonline/necromancy-server/wiki">
                      Github Link
                    </a>
                    .
                  </span>{' '}
                  Instructions for set up will also be found there.
                </p>
              </li>
              <li>
                <h3>How do I report a bug?</h3>
                <p>
                  We prefer you to report a bug Here:{' '}
                  <span>
                    <a href="https://github.com/necromancyonline/necromancy-server/issues">
                      Github Link
                    </a>
                    .
                  </span>{' '}
                  (Click on the New Issue button and describe the problem and we
                  will try to get on it as soon as possible).
                </p>
              </li>
              <li>
                <h3>When will this be playable?</h3>
                <p>
                  We are working as much as we can to get this game back to a
                  playable state. There is no real answer for this question
                  seeing as life happens and we all have responsibilities
                  outside of this project. Just know that we are trying our best
                  to get the game back and will continue until we do.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
