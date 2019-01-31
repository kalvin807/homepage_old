import React, { Component } from 'react';
import Landing from 'pages/landing';
import About from 'pages/about';
import Projects from 'pages/projects';
import Background from 'components/background';
import Navbar from 'components/navbar';
import { day, night } from 'contexts/themes/themes';
import themesContext from 'contexts/themes/themesContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon, faAngleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

library.add(fab , faSun, faMoon, faAngleDown, faAngleDoubleUp);

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === night
            ? day
            : night,
      }));
    };

    this.state = {
      theme: day,
      toggleTheme: this.toggleTheme, 
    };
  }

  render() {
    return (
      <div className="landing-page">
      <themesContext.Provider value={this.state}>
      
            <Background/>
            <Navbar />
            <Landing/>
            <About/>
            <Projects/>
      </themesContext.Provider>
      </div>
      );
  }
}

export default App;
