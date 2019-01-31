import React, { Component } from 'react';
import ThemesContext from 'contexts/themes/themesContext';
import { toElement as scrollToElement } from 'tool/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss';


class TopPage extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  } 
  static contextType = ThemesContext;
  render() {
    const state = this.context;
    return (
      <div className="scroll-to-top" onClick={(e) => this.scrollToNext()}>
        <div className="arrow bounce" style={{color: state.theme.textcolor}}>
          <div className="scroll-text">Back to Top</div>
            <FontAwesomeIcon icon="angle-double-up"/>
        </div>
      </div>
    );
  }
}


export default TopPage;