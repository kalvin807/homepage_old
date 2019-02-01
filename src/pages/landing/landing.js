import React from 'react';
import ContactIcons from 'components/contacticons';
import ThemesContext from 'contexts/themes/themesContext';
import NextPage from 'components/nextPage';
import './style.scss';

const LandingPage = () => {
  return (
    <ThemesContext.Consumer>
      {state => (
        <div className="landing-page">
          <main style={{ color: state.theme.textcolor }}>
            <div className="intro-wrapper">
              <div className="intro-name">Hello! I'm Calvin</div>
              <div className="tagline">
                HKU Student | Computer Science Year 2 | Boardgame fan
              </div>
              <ContactIcons />
            </div>
          </main>
          <NextPage pageSelector=".about-page" />
        </div>
      )}
    </ThemesContext.Consumer>
  );
};
export default LandingPage;
