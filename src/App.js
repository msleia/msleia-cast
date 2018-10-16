import React, { Component } from 'react';
import './App.css';
import WebSocket from './WebSocket'

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src="code.png"  height="1%" width="100%"/>
          <WebSocket/>
      </div>
    );
  }
}

export default App;
