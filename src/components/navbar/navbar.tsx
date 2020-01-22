import React, {
  useState,
  useEffect,
  createRef,
  RefObject,
  useContext
} from 'react';
import { toElement as scrollToElement } from '../../tool/scroll';
import ThemeSwitchButton from '../themeSwitcher/themeSwitchButton';
import ThemeContext from 'contexts/themes/ThemeContext';
import './style.scss';

const Navbar: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const navRef: RefObject<HTMLElement> = createRef();
  const style = useContext(ThemeContext);
  const handleScroll = (): void => {
    if (window.pageYOffset > navRef.current?.offsetTop!) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  const scrollToPage = (pageSelection: string): void => {
    const nextPage = document.querySelector(pageSelection);
    scrollToElement(nextPage);
  };
  const stickyClass = sticky ? 'sticky' : '';
  const stickyStyles = sticky
    ? { backgroundColor: style.theme.navAlpha, color: '#FFFFFF' }
    : { backgroundColor: 'rgba(0,0,0,0.0)', color: '#FFFFFF' };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={stickyClass} ref={navRef} style={stickyStyles}>
      <style>
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
          onClick={(): void => scrollToPage('.landing-page')}
        >
          Home
        </div>
        <div
          className="menu__item"
          onClick={(): void => scrollToPage('.about-page')}
        >
          About
        </div>
        <div
          className="menu__item"
          onClick={(): void => scrollToPage('.projects-page')}
        >
          Projects
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
