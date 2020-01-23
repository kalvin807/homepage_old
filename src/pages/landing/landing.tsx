import React, { useContext } from 'react';
import ContactIcons from 'components/contacticons';
import ThemeContext from 'contexts/themes/ThemeContext';
import NextPage from 'components/nextPage';
import './style.scss';

const LandingPage: React.FC = () => {
  const style = useContext(ThemeContext).theme;
  return (
    <div className="landing-page">
      <main style={{ color: style.textcolor }}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello! I'm Calvin</div>
          <div className="tagline">
            HKU Student | Computer Science Year 3 | Boardgame fan
          </div>
          <ContactIcons />
        </div>
      </main>
      <NextPage pageSelector=".about-page" />
    </div>
  );
};
export default LandingPage;
