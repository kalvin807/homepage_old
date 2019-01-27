import React, { Component } from 'react';
import Landing from 'pages/landing';
import About from 'pages/about'
class App extends Component {
  render() {
    return (
      <div className="landing-page">
      <Landing/>
      <About/>
      </div>
      );
  }
}

export default App;
