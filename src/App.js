import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import Catalog from './pages/Catalog';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path='/' exact component={Main}/>
      <Route path='/#/catalog' component={Catalog}/>
    </Switch>
  </HashRouter>

  );
}

export default App;
