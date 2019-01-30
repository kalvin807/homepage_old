import React from 'react';
import { ThemeContext } from './themeSwitcher';

function ThemeSwitchButton(){
    return (
        <ThemeContext.Consumer>
          {({theme, toggleTheme}) => (
            <button
              onClick={toggleTheme}
              style={{color: theme.textcolor}}>
              Toggle Theme
            </button>
          )}
        </ThemeContext.Consumer>
      );
}

export default ThemeSwitchButton;