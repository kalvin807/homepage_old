import React, { useContext } from 'react';
import ContactIcons from 'components/contacticons';
import ThemeContext from 'contexts/themes/ThemeContext';
import LanguageContext from 'contexts/languages/LanguageContext';
import NextPage from 'components/nextPage';
import './style.scss';

const LandingPage: React.FC = () => {
  const style = useContext(ThemeContext).theme;
  const language = useContext(LanguageContext).langCode;
  const languageTexts = [
    {
      greeting: `Hello! I'm Calvin!`,
      tagline:
        'Year 3 Computer Science Student | Programmer Geek | Boardgame fan'
    },
    {
      greeting: 'Hi!我係Calvin!',
      tagline: '電腦科學三年級生 | 業餘Programmer | 桌遊愛好者'
    },
    {
      greeting: 'こんにちは！カルバンです。',
      tagline: 'コンピュータ科学三年生 | ギーク | ボードゲームファン'
    }
  ];
  const displayText = languageTexts[language];

  return (
    <div className="landing-page">
      <main style={{ color: style.textcolor }}>
        <div className="intro-wrapper">
          <div className="intro-name">{displayText.greeting}</div>
          <div className="tagline">{displayText.tagline}</div>
          <ContactIcons />
        </div>
      </main>
      <NextPage pageSelector=".about-page" />
    </div>
  );
};
export default LandingPage;
