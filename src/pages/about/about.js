import React from 'react';
import './style.scss';

const AboutPage = (props, context) => {

  return (
    <div className="about-page" >
      <div className="content-grid">
        <h1 style={{ color: "#FFFFFF" }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: "#FFFFFF" }}>
            <p>
              I like programming and trying out new things.
            </p>
            <p>
              When I have a new random idea, I will instantly learn it from the web and try to build it. 
              Therefore I stay close to the current trend of programming and try to keep 
              in pace with rapidly evolving web.
            </p>
            <p>
            I built this web as my first trial on React. I referenced a lot of other people work.
            Along with this web creation, I taught my self the basic of javascript and how to react works.
            </p>
            <p>
            On the other hand, I also work with C++/C, bash, java, python, etc. 
            However, these mainly for my acdemic work, and I wish I can have more chance to use my skills to bring more ideas into reality. :D
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default AboutPage;