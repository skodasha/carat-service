import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import Catalog from './pages/Catalog';
import ToolInfo from './pages/ToolInfo';
import About from './pages/AboutInfo';

const routes = [
  {
    path: "/carat-service",
    component: Main
  },
  {
    path: "/catalog",
    component: Catalog,
  },
  {
    path: "/info",
    component: ToolInfo,
  },
  {
    path: "/about",
    component: About,
  }
];

function App() {
  return (
    <Router>
    <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
  </Router>

  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;
