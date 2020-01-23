import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeContext from 'contexts/themes/ThemeContext';

const ThemeSwitchButton: React.FC = () => {
  const style = useContext(ThemeContext).theme;
  const toggleStyle = useContext(ThemeContext).toggle;

  const iconName = style.name === 'day' ? 'sun' : 'moon';
  return (
    <>
      <FontAwesomeIcon
        onClick={(): void => toggleStyle()}
        style={{ color: style.textcolor }}
        icon={iconName}
      />
    </>
  );
};

export default ThemeSwitchButton;
