import React from 'react'
import './App.css';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

var LandingPage = require('./LandingPage.jsx').default;
var NotFound = require('./NotFound.jsx').default;
var Login = require('./Login.jsx').default;
var Database = require('./Database.jsx').default;

/* storage for old code that i haven't written backend to yet -- Nalu

<Route exact={true} path='/users/:username' render={(props) => (
  <User username={props}/>
)} />

<Route exact={true} path='/' render={() => (
    <Info/>
)}/>
*/

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

    <Route path='*' render={() => (
      <NotFound/>
    )} />

    </Switch>
  </BrowserRouter>
  )
}
export default Routes;
