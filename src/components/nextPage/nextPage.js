import React, { Component } from 'react';
import ThemesContext from 'contexts/themes/themesContext';
import { toElement as scrollToElement } from 'tool/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss';


class NextPage extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }
  static contextType = ThemesContext;
  render() {
    const state = this.context;
    return (
      <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
        <div className="arrow bounce" style={{color: state.theme.textcolor}}>
          <div className="scroll-text">Go to Next</div>
            <FontAwesomeIcon icon="angle-down"/>
        </div>
      </div>
    );
  }
}


export default NextPage;