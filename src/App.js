import React, { Component } from 'react';
import './App.css';
import Controller from './Controller'
// import ChromeCast from './ChromeCast';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src="abc_banner.jpg"  height="1%" width="100%"/>
          {/* <WebSocket/> */}
          {/* <ChromeCast /> */}
          <Controller />
      </div>
    );
  }
}

export default App;
