import React from 'react';
import ThemesContext from 'contexts/themes/themesContext';
import { night } from 'contexts/themes/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ThemeSwitchButton() {
  return (
    <ThemesContext.Consumer>

      {({theme, toggleTheme}) => (
        theme === night?
        <div className="theme-icons animate-icons">
        <FontAwesomeIcon
          onClick={toggleTheme}
          style={{color: theme.textcolor}}
          icon= 'moon' 
          >
          Toggle Theme
        </FontAwesomeIcon></div>:
        <div className="theme-icons animate-icons">    
        <FontAwesomeIcon
          onClick={toggleTheme}
          style={{color: theme.textcolor}}
          icon= 'sun' 
          >
          Toggle Theme
        </FontAwesomeIcon></div>
      )}

    </ThemesContext.Consumer>
  );
}

export default ThemeSwitchButton;