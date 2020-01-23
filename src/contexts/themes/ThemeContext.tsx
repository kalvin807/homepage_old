import React from 'react';
import { Theme } from 'models/theme.model';

interface Context {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = React.createContext({} as Context);

export default ThemeContext;
