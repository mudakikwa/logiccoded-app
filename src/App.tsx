import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/index';
import SignUpPage from './pages/signup/index';
import './App.global.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/" component={SignUpPage} />
      </Switch>
    </Router>
  );
}
