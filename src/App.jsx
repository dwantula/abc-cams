import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Navigation from 'shared/components/Navigation/Navigation';
import AboutUs from 'screens/AbcCams/AboutUs/AboutUs';
import SkiCams from 'screens/AbcCams/SkiCams/SkiCams';
import Contact from 'screens/AbcCams/Contact/Contact';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <header>
        {' '}
        <div>Logo firmy</div>
        <Navigation />
      </header>
      <main className="main">
        <Switch>
          <Route path="/" exact component={AboutUs} />
          <Route path="/ski-cams" component={SkiCams} />
          <Route path="/contact" component={Contact} />
          <Route component={() => <h3>Strona nie istnieje</h3>} />
        </Switch>
      </main>
      <footer className="footer">Powered by ABC</footer>
    </BrowserRouter>
  );
}
export default App;
