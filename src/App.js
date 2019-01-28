import React, { Component } from 'react';
import Landing from 'pages/landing';
import About from 'pages/about';
import Projects from 'pages/projects';
import Background from 'parts/background';


class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <Background/>
        <Landing/>
        <About/>
        <Projects/>
      </div>
      );
  }
}

export default App;
