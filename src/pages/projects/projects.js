import React from 'react';
import Item from 'components/projectsItem';
import itemList from './itemslist';

import './style.scss';

const Projects = () => {
  return (
    <div className="project" >
      <div className="content-grid">
        <h1 style={{ color: "#FFFFFF" }}>Portfolio</h1>
        <div className="projects-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
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
          {itemList.map((item, i) => (
            <Item render={item.render} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects;