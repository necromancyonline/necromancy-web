import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Footer.css';

class Footer extends Component {
  componentDidMount() {}

  render() {
    return (
      <footer className="footer-box">
        <div className="header-blur" />
        <div className="App-footer"></div>
      </footer>
    );
  }
}

export default connect()(Footer);
