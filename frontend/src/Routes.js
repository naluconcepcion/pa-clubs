import React from 'react'
import './Style.css';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

var LandingPage = require('./LandingPage.jsx').default;
var NotFound = require('./NotFound.jsx').default;
var Login = require('./Login.jsx').default;
var Database = require('./Database.jsx').default;
var Signup = require('./Signup.jsx').default;

function Routes(props) {
  return(
    <BrowserRouter>
    <Switch>

    <Route exact={true} path='/' render={() => (
        <LandingPage/>
    )}/>

    <Route exact={true} path='/login' render={() => (
        <Login/>
    )}/>

    <Route exact={true} path='/database' render={() => (
        <Database/>
    )}/>

    <Route exact={true} path='/signup' render={() => (
        <Signup/>
    )}/>
    <Route path='*' render={() => (
      <NotFound/>
    )} />

    </Switch>
  </BrowserRouter>
  )
}
export default Routes;
