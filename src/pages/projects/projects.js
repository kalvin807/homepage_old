import React from 'react';
// import PortfolioItem from '@components/PortfolioItem';
import Items from './items';

import './style.scss';

const Projects = () => {
  return (
    <div className="portfolio-page" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="content-grid">
        <h1 style={{ color: "#FFFFFF" }}>Portfolio</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: ${"#FFFFFF"};
                color: ${"#FFFFFF"};
              }
              .portfolio-item a {
                color: ${"#FFFFFF"};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${"#FFFFFF"};
              }
            `}
          </style>
          {/* <PortfolioItem /> */}
          {Items.map((item, i) => (
            <Items render={item.render} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects;