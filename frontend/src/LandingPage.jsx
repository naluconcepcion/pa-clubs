import React from 'react';
import Typing from 'react-typing-animation';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

function Info(){
  return(
    <html>
    <head>
    <title> PaClubs </title>
    </head>
    <body>
    <div id ="content">
    <header>
      <Typing loop={true}>
        <h2>PaClubs</h2>
        <Typing.Reset count={1} delay={2000} />
      </Typing>
    </header>
    <div id ="links">
    <div className="login grey">
    <a href="https://github.com/naluconcepcion/pa-clubs"> On GitHub </a>
    </div>
    <div className="login grey">
    <Link to="/signup"> Sign up </Link>
    </div>
    <div className="login grey">
    <Link to="/login"> Login </Link>
    </div>
    <div className="login grey">
    <Link to="/database"> Clubs List </Link>
    </div>
    </div>
    <div id ="information">
    </div>
    </div>
    <footer>
    <p>A project created at Phillips Academy by Nalu Concepcion and Liv Märtens</p>
    </footer>
    </body>
    </html>
  );
}

export default Info;
