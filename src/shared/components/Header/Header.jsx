import React from 'react';

import Navigation from 'shared/components/Navigation/Navigation';

import './styles.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__logo-text">ABC</div>
        <div className="header__icon" />
      </div>
      <span className="header__text">CAMS</span>
      <Navigation />
    </div>
  );
}

export default Header;
