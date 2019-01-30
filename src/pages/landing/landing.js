import React from 'react';
import Navbar from 'components/navbar';
import ContactIcons from 'components/contacticons';
import {ThemeContext} from 'components/themeSwitcher/themeSwitcher';
import './style.scss';



const LandingPage = (props) => {
  return (
    <ThemeContext.Consumer>
      {(toggletheme) => (
    <div className="landing-page">
      <Navbar />
      <main style={{ color: toggletheme.textcolor }}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Calvin!</div>
          <div className="tagline">
            HKU Student | Computer Science Year 2 | Boardgame fan
          </div>
          <ContactIcons/>
        </div>
      </main>
    </div>
      )}
    </ThemeContext.Consumer>
  );
};
export default LandingPage;