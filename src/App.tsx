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
        <Route path="/home" component={HomePage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/" component={LoginPage} />
        {/* <Route path="/" component={IntroPage} /> */}
      </Switch>
    </Router>
  );
}
