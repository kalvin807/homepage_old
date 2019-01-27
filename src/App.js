import React, { Component } from 'react';
import Landing from 'pages/landing';
import About from 'pages/about';
import Background from 'parts/background'

class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <Background/>
        <Landing/>
        <About/>
      </div>
      );
  }
}

export default App;
