import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import Catalog from './pages/Catalog';

function App() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
    <Switch>
      <Route path='/' exact component={Main}/>
      <Route path='/catalog' component={Catalog}/>
    </Switch>
  </BrowserRouter>

  );
}

export default App;
