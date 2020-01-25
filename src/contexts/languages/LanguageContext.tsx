import React from 'react';
import { Languages } from './languages';

interface Context {
  language: string;
  switch: (select: Languages) => void;
}

const LanguageContext = React.createContext({} as Context);

export default LanguageContext;
