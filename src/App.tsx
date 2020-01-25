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
import { Languages } from 'contexts/languages/languages';
import LanguageContext from 'contexts/languages/LanguageContext';

library.add(fab, faSun, faMoon, faAngleDown, faAngleDoubleUp);

const App = (): ReactElement => {
  const [style, setStyle] = useState(themes.day);
  const [lang, setLang] = useState(Languages.ENGLISH);
  const switchLang = (selection: Languages): void => setLang(selection);
  const toggleStyle = (): void =>
    setStyle((style: Theme) =>
      style === themes.day ? themes.night : themes.day
    );

  return (
    <div className="landing-page">
      <LanguageContext.Provider value={{ language: lang, switch: switchLang }}>
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
