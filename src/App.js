import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import Catalog from './pages/Catalog';

function App() {

  return (
    <Router>
    <Switch>
      <Route path='/carat-service' exact component={Main}/>
      <Route path='/carat-service/catalog' exact component={Catalog}/>
    </Switch>
  </Router>

  );
}

export default App;
