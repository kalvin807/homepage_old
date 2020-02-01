import React, { useContext } from 'react';
import ThemeContext from 'contexts/themes/ThemeContext';
import LanguageContext from 'contexts/languages/LanguageContext';

const LanguageButton: React.FC = () => {
  const style = useContext(ThemeContext).theme;
  const swtichLanguage = useContext(LanguageContext).switch;
  const languageText = ['A', '中', 'あ'];

  return (
    <>
      <button
        onClick={(): void => swtichLanguage()}
        style={{
          border: 'none',
          cursor: 'pointer',
          display: 'inline-block',
          color: style.textcolor,
          backgroundColor: 'inherit',
          fontSize: 32
        }}
      >
        {languageText[useContext(LanguageContext).langCode]}
      </button>
    </>
  );
};

export default LanguageButton;
