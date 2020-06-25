import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';

function App() {

  return (
    <Router>
    <Switch>
      <Route path='/carat-service' exact component={Main}/>
    </Switch>
  </Router>

  );
}

export default App;
