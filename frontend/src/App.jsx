import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './pages/Login';

export default () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>
);
