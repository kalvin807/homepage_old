import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../tool/scroll';
import ThemeSwitchButton from '../themeSwitcher/themeSwitchButton';
import ThemesContext from 'contexts/themes/themesContext';
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

  static contextType = ThemesContext;
  render() {
    const theme = this.context;
    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky
      ? { backgroundColor: theme.theme.navAlpha, color: '#FFFFFF' }
      : { backgroundColor: 'rgba(0,0,0,0.0)', color: '#FFFFFF' };
    return (
      <nav
        className={stickyClass}
        ref={elem => {
          this.nav = elem;
        }}
        style={stickyStyles}
      >
        <style jsx="true">
          {`
            .menu__item:hover {
              border-bottom: 2px solid ${'#FFFFFF'};
            }
          `}
        </style>
        <div className="theme-icon bounce-xy">
          <ThemeSwitchButton />
        </div>
        <div className="menu">
          <div
            className="menu__item active"
            onClick={() => this.scrollToPage('.landing-page')}
          >
            Home
          </div>
          <div
            className="menu__item"
            onClick={() => this.scrollToPage('.about-page')}
          >
            About
          </div>
          <div
            className="menu__item"
            onClick={() => this.scrollToPage('.projects-page')}
          >
            Projects
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
