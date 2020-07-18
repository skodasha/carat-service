import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import Catalog from './pages/Catalog';
import ToolInfo from './pages/ToolInfo';
import About from './pages/AboutInfo';

function App() {
  return (
    <Router>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/catalog' exact component={Catalog}/>
                <Route path='/info' exact component={ToolInfo}/>
                <Route path='/about' exact component={About}/>
            </Switch>   
        </Router>

  );
}

export default App;
