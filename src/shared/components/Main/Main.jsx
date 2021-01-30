import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutUs from 'screens/AbcCams/AboutUs/AboutUs';
import Cams from 'screens/AbcCams/Cams/Cams';
import Contact from 'screens/AbcCams/Contact/Contact';

import './styles.scss';

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/cams" component={Cams} />
        <Route path="/contact" component={Contact} />
        <Route component={() => <h3>Strona nie istnieje</h3>} />
      </Switch>
    </div>
  );
}

export default Main;
