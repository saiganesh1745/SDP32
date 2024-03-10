// SocialMediaIcons.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './icons.css'; // Import the CSS file

const SocialMediaIcons = () => {
  const [iconColors, setIconColors] = useState({
    facebook: '#3b5998',
    twitter: '#1da1f2',
    instagram: '#e4405f',
    linkedin: '#0077b5',
  });

  return (
    <div className="social-icons-container">
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" style={{ color: iconColors.facebook }} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" style={{ color: iconColors.twitter }} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" style={{ color: iconColors.instagram }} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" style={{ color: iconColors.linkedin }} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
