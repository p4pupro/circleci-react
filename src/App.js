import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            p4pupro
          </p>
          <a
            className="App-link"
            href="https://github.com/p4pupro"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </header>
      </div>
    );
  }
}

export default App;
