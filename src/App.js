import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import Catalog from './pages/Catalog';

function App() {
  return (
    <BrowserRouter basename='carat-service'>
    <Switch>
      <Route path='/catalog' exact component={Main}/>
      <Route path='/' component={Catalog}/>
    </Switch>
  </BrowserRouter>

  );
}

export default App;
