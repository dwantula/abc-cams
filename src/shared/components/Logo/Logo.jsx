import React from 'react';

import './styles.scss';

function Logo() {
  return (
    <div className="logo">
      <div className="logo__abc-row">
        <p className="logo__abc-text">ABC</p>
        <div className="logo__icon"></div>
      </div>
      <div className="logo__cams-row">
        <span>C</span>
        <span>A</span>
        <span>M</span>
        <span>S</span>
      </div>
    </div>
  );
}

export default Logo;
