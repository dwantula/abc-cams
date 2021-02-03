import React from 'react';

import Navigation from 'shared/components/Navigation/Navigation';
import Logo from '../Logo/Logo';

import './styles.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__positon">
        <Logo />
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
