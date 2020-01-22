import React, { useContext } from 'react';
import ThemeContext from 'contexts/themes/ThemeContext';

import './style.scss';

const AboutPage: React.SFC = () => {
  const theme = useContext(ThemeContext).theme;
  return (
    <div className="about-page">
      <div className="content-grid">
        <h1 style={{ color: theme.textcolor }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: theme.textcolor }}>
            <p>I like programming and trying out new things.</p>
            <p>
              When I have a new idea pop off from my head, I instantly learn it
              from the web and try to build it. Therefore I am sensitive to the
              current trend of programming and try to keep in pace with the
              rapidly evolving web.
            </p>
            <p>
              I built this web as my first trial on React. In order to create
              this, I studied lots of online resources. Along with this web
              development, I taught my self the basic of javascript and how the
              react works.
            </p>
            <p>
              On the other hand, I also work with C++/C, shell, java, python,
              etc. However, these mainly for my academic work, and I wish I can
              have more chance to use my skills to work on real life problems.
              :D
            </p>
          </div>
        </div>
      </div>
      {/* <NextPage pageSelector=".projects-page" /> */}
    </div>
  );
};

export default AboutPage;
