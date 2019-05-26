import React from 'react'
import './App.css';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

var Info = require('./Info.jsx').default;
var User = require('./User.jsx').default;
var NotFound = require('./NotFound.jsx').default;
var Login = require('./Login.jsx').default;
var Database = require('./Database.jsx').default;

function Routes(props) {
  return(
    <BrowserRouter>
    <Switch>

    <Route exact={true} path='/login' render={() => (
        <Login/>
    )}/>

    <Route exact={true} path='/' render={() => (
        <Info/>
    )}/>

    <Route exact={true} path='/database' render={() => (
        <Database/>
    )}/>

    <Route exact={true} path='/users/:username' render={(props) => (
      <User username={props}/>
    )} />

    <Route path='*' render={() => (
      <NotFound/>
    )} />

    </Switch>
  </BrowserRouter>
  )
}
export default Routes;
