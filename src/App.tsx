import React, { useState, ReactElement } from 'react';
import Landing from 'pages/landing';
import About from 'pages/about';
import Projects from 'pages/projects';
import Background from 'components/background';
import Navbar from 'components/navbar';
import { themes } from 'contexts/themes/themes';
import ThemeContext from 'contexts/themes/ThemeContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faSun,
  faMoon,
  faAngleDown,
  faAngleDoubleUp
} from '@fortawesome/free-solid-svg-icons';
import { Theme } from 'models/theme.model';

library.add(fab, faSun, faMoon, faAngleDown, faAngleDoubleUp);

const App = (): ReactElement => {
  const [style, setStyle] = useState(themes.day);
  const toggleStyle = (): void =>
    setStyle((style: Theme) =>
      style === themes.day ? themes.night : themes.day
    );

  return (
    <div className="landing-page">
      <ThemeContext.Provider value={{ theme: style, toggle: toggleStyle }}>
        <Background />
        <Navbar />
        <Landing />
        <About />
        <Projects />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
