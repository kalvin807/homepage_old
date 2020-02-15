import React from 'react';
import './style.scss';

export interface ItemProps {
  render: JSX.Element;
}

const Item: React.FC<ItemProps> = props => {
  if (props.render) return props.render;
  else
    return (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Template</div>

        <div className="portfolio-item__desc">PlaceHolder</div>
        <div className="portfolio-item__icon">
          <i className="fab fa-js" />
          <i className="fab fa-react" />
          <i className="fab fa-html5" />
        </div>
        <div className="portfolio-item__links" />
      </div>
    );
};

export default Item;
