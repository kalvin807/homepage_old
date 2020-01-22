import React from 'react';
import Item from 'components/projectsItem';
import itemList from './itemslist';
import TopPage from 'components/topPage';
import ThemeContext from 'contexts/themes/ThemeContext';
import './style.scss';

const Projects = () => {
  return (
    <ThemeContext.Consumer>
      {state => (
        <div className="projects-page">
          <div className="content-grid">
            <h1 style={{ color: state.theme.textcolor }}>Projects</h1>
            <div className="projects-wrapper">
              <style jsx="true">
                {`
                  .portfolio-item {
                    background-color: ${state.theme.itembgcolor};
                    color: ${state.theme.textcolor};
                  }
                  .portfolio-item a {
                    color: ${state.theme.textcolor};
                  }
                  .portfolio-item__links a:hover {
                    border-bottom: 2px solid ${state.theme.textcolor};
                  }
                `}
              </style>
              {/* <PortfolioItem /> */}
              {itemList.map((item, i) => (
                <Item render={item.render} key={i} />
              ))}
            </div>
          </div>
          <TopPage pageSelector=".landing-page" />
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Projects;
