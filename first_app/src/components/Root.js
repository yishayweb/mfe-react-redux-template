import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from './App';
import Navbar from '@bit/yishayweb.react-micro.navbar';

const Root = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          App Not Found
        </Route>
        <Route path="/about">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

export default Root;