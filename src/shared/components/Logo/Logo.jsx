import React from 'react';

import './styles.scss';

function Logo() {
  return (
    <div className="logo">
      <div className="logo__column">
        <p className="logo__text">ABC</p>
        <div className="logo__icon" />
      </div>
      <div className="logo__text-row">
        <span>C</span>
        <span>A</span>
        <span>M</span>
        <span>S</span>
      </div>
    </div>
  );
}

export default Logo;
