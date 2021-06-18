import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import HomePage from './pages/home/index';
import SignUpPage from './pages/signup/index';
import LoginPage from './pages/login/index';
import IntroPage from './pages/intro/index';
import Frame from './components/frame';
import ErrorPanel from './components/errorPanel';

import './App.global.scss';

export default function App() {
  const { shutDown } = useSelector((state) => state.panelData);
  return (
    <Router>
      <Frame />
      {shutDown && <ErrorPanel />}
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
