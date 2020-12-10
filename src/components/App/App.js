import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// -> IMPORT PAGES <-- \\
import HomePage from '../../pages/HomePage/HomePage';
// -> IMPORT PAGES <-- \\

// -> IMPORT COMPONENTS <-- \\
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// -> IMPORT COMPONENTS <-- \\

class App extends Component {
  componentDidMount() {}

  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="background-site" />
        <div className="App">
          <Header />
          <main>
            <Route exact path="/" component={HomePage} />
            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
