import React, { useContext } from 'react';
import ThemeContext from 'contexts/themes/ThemeContext';
import { toElement as scrollToElement } from 'tool/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

interface NextPageProps {
  pageSelector: string;
}

const NextPage: React.FC<NextPageProps> = props => {
  const scrollToNext = (): void => {
    const { pageSelector } = props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  };
  const style = useContext(ThemeContext).theme;
  return (
    <div className="scroll-to-next" onClick={(): void => scrollToNext()}>
      <div className="arrow bounce" style={{ color: style.textcolor }}>
        <div className="scroll-text">Go to Next</div>
        <FontAwesomeIcon icon="angle-down" />
      </div>
    </div>
  );
};

export default NextPage;
