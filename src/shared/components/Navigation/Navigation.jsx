import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__link">
          <NavLink className="navigation__link-text" to="/" exact>
            ABOUT AS
          </NavLink>
        </li>
        <li className="navigation__link">
          <NavLink className="navigation__link-text" to="/skicams">
            SkICAMS
          </NavLink>
        </li>
        <li className="navigation__link">
          <NavLink className="navigation__link-text" to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
