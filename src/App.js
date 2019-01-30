import React, { Component } from 'react';
import Landing from 'pages/landing';
import About from 'pages/about';
import Projects from 'pages/projects';
import Background from 'components/background';
import { ThemeSwitcher } from 'components/themeSwitcher/themeSwitcher';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fab);

class App extends Component {

  render() {
    return (
      <div className="landing-page">
          <ThemeSwitcher>
            <Background/>
            <Landing/>
            <About/>
            <Projects/>
          </ThemeSwitcher>
      </div>
      );
  }
}

export default App;
