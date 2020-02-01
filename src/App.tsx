import React, { useState, ReactElement } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faSun,
  faMoon,
  faAngleDown,
  faAngleDoubleUp
} from '@fortawesome/free-solid-svg-icons';

import Landing from 'pages/landing';
import About from 'pages/about';
import Projects from 'pages/projects';
import Background from 'components/background';
import Navbar from 'components/navbar';
import { Theme } from 'models/theme.model';
import { themes } from 'contexts/themes/themes';
import ThemeContext from 'contexts/themes/ThemeContext';
import LanguageContext from 'contexts/languages/LanguageContext';

library.add(fab, faSun, faMoon, faAngleDown, faAngleDoubleUp);

const App = (): ReactElement => {
  const [style, setStyle] = useState(themes.day);
  const [lang, setLang] = useState(0);
  const switchLang = (): void => setLang((lang + 1) % 3);
  const toggleStyle = (): void =>
    setStyle((style: Theme) =>
      style === themes.day ? themes.night : themes.day
    );

  return (
    <div className="landing-page">
      <LanguageContext.Provider value={{ langCode: lang, switch: switchLang }}>
        <ThemeContext.Provider value={{ theme: style, toggle: toggleStyle }}>
          <Background />
          <Navbar />
          <Landing />
          <About />
          <Projects />
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
