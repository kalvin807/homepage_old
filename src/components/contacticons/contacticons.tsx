import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';

const ContactIcons: React.FC = () => {
  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kalvin807"
        style={{ color: '#FFFFFF' }}
      >
        <FontAwesomeIcon icon={['fab', 'github-square']} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/calvin-leung-689738108/"
        style={{ color: '#FFFFFF' }}
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
    </div>
  );
};

export default ContactIcons;
