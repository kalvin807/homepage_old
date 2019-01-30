import React from 'react';
import Item from 'components/projectsItem';
import itemList from './itemslist';
import Consumer from 'components/themeSwitcher';
import './style.scss';

const Projects = () => {
  return (
    <Consumer>
    {(theme) => (
    <div className="projects-page" >
      <div className="content-grid">
        <h1 style={{ color: theme.textcolor }}>Projects</h1>
        <div className="projects-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: ${'rgba(145,225,242, 0.5)'};
                color: ${theme.textcolor};
              }
              .portfolio-item a {
                color: ${theme.textcolor};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${theme.textcolor};
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
    )
    }
    </Consumer>
  );
};


export default Projects;