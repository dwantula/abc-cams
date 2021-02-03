import React from 'react';

import Navigation from 'shared/components/Navigation/Navigation';

import './styles.scss';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <p className="logo__text">ABC</p>
        <div className="logo__icon" />
      </div>
      <div className="row">
        <span>C</span>
        <span>A</span>
        <span>M</span>
        <span>S</span>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
