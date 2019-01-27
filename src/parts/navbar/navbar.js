import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../tool/scroll';

import './style.scss';



class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {

    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky
      ? { backgroundColor: '#rgba(0,0,0,.5)', color: '#000000' }
      : { backgroundColor: '#rgba(0,0,0,.5)', color: '#000000' };
    return (
      <nav
        className={stickyClass}
        ref={(elem) => {
          this.nav = elem;
        }}
        style={stickyStyles}
      >
        <style jsx="true">
          {`
            .menu__item:hover {
              border-bottom: 2px solid ${'#000000'};
            }
          `}
        </style>
        <div className="menu">
          <div
            className="menu__item active"
            onClick={() => this.scrollToPage('.about-page')}
          >
            About
          </div>
          <div
            className="menu__item"
            onClick={() => this.scrollToPage('.portfolio-page')}
          >
            Portfolio
          </div>
        </div>
      </nav>
    );
  }
}


export default Navbar;