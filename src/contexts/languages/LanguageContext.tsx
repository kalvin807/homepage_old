import React from 'react';

interface Context {
  langCode: number;
  switch: () => void;
}

const LanguageContext = React.createContext({} as Context);

export default LanguageContext;
