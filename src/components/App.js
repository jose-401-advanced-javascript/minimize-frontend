import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import LoginUser from '../containers/LoginUser';
import SignupUser from '../containers/SignupUser';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={LoginUser} />
        <Route path="/signup" component={SignupUser} />
      </Switch>
    </Router>
  );
}
