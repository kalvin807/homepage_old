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
              I like <span className="highlight">JavaScript</span> and
              everything web.
            </p>
            <p>
              When my dev senses kick-in I build presumably{' '}
              <span className="highlight"> awesome stuff</span>. I stay close to
              the community and try to keep tabs with the pace at which the web
              is evolving. I also like to{' '}
              <span className="highlight">blog</span> what I learn.
            </p>
            <p>
              I built this site <span className="highlight">from scratch</span>.
              By scratch, I mean <i>absolutely from scratch</i>{' '}
              <span className="highlight">
                without any UI library/framework
              </span>{' '}
              (except React though) and had so much fun along the way.
            </p>
            <p>
              React-Redux, Node.js, Ruby on Rails, Java, Spring Boot, Docker and
              AWS are the main tricks up my sleeve. I am also obsessed with making the web look pretty with SASS/CSS.
            </p>
            <p className="text-emoji" style={{ color: "#FFFFFF" }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default AboutPage;