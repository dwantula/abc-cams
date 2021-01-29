import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from 'shared/components/Navigation/Navigation';
import AboutAs from 'screens/AbcCams/AboutAs/AboutAs';
import SkiCams from 'screens/AbcCams/SkiCams/SkiCams';
import Contact from 'screens/AbcCams/Contact/Contact';

import './styles.scss';

function AbcCams() {
  return (
    <div>
      <div>Logo firmy</div>
      <Navigation />
      <main className="main">
        <Switch>
          <Route path="/" exact component={AboutAs} />
          <Route path="/skiCams" component={SkiCams} />
          <Route path="/contact" component={Contact} />
          <Route component={() => <h3>Strona nie istnieje</h3>} />
        </Switch>
      </main>
      <footer className="footer">Powered by ABC</footer>
    </div>
  );
}

export default AbcCams;
