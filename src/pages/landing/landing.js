import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'parts/navbar';

import './style.scss';

const LandingPage = (props, context) => {

  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="landing-page">
      <Navbar />
      <main style={{ color: "#000000" }}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Calvin!</div>
          <div className="tagline">
            Full Stack Dev | Open-Source Enthusiast | Blogger | Ninja
          </div>
        </div>
      </main>
    </div>
  );
};
LandingPage.contextTypes = {
  theme: PropTypes.any
};
export default LandingPage;