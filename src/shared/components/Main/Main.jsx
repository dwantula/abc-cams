import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutUs from 'screens/AbcCams/AboutUs/AboutUs';
import SkiCams from 'screens/AbcCams/SkiCams/SkiCams';
import Contact from 'screens/AbcCams/Contact/Contact';

import './styles.scss';

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/ski-cams" component={SkiCams} />
        <Route path="/contact" component={Contact} />
        <Route component={() => <h3>Strona nie istnieje</h3>} />
      </Switch>
    </div>
  );
}

export default Main;
