import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home/index';
import SignUpPage from './pages/signup/index';
import LoginPage from './pages/login/index';
import IntroPage from './pages/intro/index';

import './App.global.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        {/* <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={SignUpPage} /> */}
        {/* <Route path="/" component={IntroPage} /> */}
      </Switch>
    </Router>
  );
}
