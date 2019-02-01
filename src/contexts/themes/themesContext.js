import React from 'react';
import { night } from './themes';

export default React.createContext({
  theme: night,
  toggleTheme: () => {}
});
