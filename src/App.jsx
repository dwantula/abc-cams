import React from 'react';

import AbcCams from 'screens/AbcCams/AbcCams/AbcCams';

import 'App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AbcCams />
    </BrowserRouter>
  );
}
export default App;
