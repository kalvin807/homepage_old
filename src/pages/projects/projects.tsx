import React, { useContext } from 'react';
import Item from 'components/projectsItem';
import itemList from './itemslist';
import TopPage from 'components/topPage';
import ThemeContext from 'contexts/themes/ThemeContext';
import './style.scss';

const Projects: React.FC = () => {
  const style = useContext(ThemeContext).theme;
  return (
    <div className="projects-page">
      <div className="content-grid">
        <h1 style={{ color: style.textcolor }}>Projects</h1>
        <div className="projects-wrapper">
          <style>
            {`
              .portfolio-item {
                background-color: ${style.itembgcolor};
                color: ${style.textcolor};
              }
              .portfolio-item a {
                color: ${style.textcolor};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${style.textcolor};
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
  );
};

export default Projects;
