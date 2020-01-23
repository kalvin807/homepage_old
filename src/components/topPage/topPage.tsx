import React, { useContext } from 'react';
import ThemeContext from 'contexts/themes/ThemeContext';
import { toElement as scrollToElement } from 'tool/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

interface TopPageProps {
  pageSelector: string;
}

const TopPage: React.FC<TopPageProps> = props => {
  const scrollToNext = (): void => {
    const { pageSelector } = props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  };
  const style = useContext(ThemeContext).theme;
  return (
    <div className="scroll-to-top" onClick={(): void => scrollToNext()}>
      <div className="arrow bounce" style={{ color: style.textcolor }}>
        <div className="scroll-text">Back to Top</div>
        <FontAwesomeIcon icon="angle-double-up" />
      </div>
    </div>
  );
};

export default TopPage;
