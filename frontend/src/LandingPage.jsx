// Liv 
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
      <div id = "content" >
        <header>
          <Typing loop={true}>
            <h2>PaClubs</h2>
            <Typing.Reset count={1} delay={5000} />
          </Typing>
        </header>
      <div id = "links">
          <div className="link-homepage">
            <a href="https://github.com/naluconcepcion/pa-clubs"> On GitHub </a>
          </div>
          <div className="link-homepage">
            <Link to="/signup"> Sign up </Link>
          </div>
          <div className="link-homepage">
            <Link to="/login"> Login </Link>
          </div>
          <div className="link-homepage">
            <Link to="/database"> Clubs List </Link>
          </div>
        </div>
        <div id ="information">
        <p> Some information about why we took on this project here. </p>
        </div>
      </div>
      <footer>
        <p>A project made with ♥ at Phillips Academy; by Nalu Concecion & Liv Märtens.</p>
      </footer>
    </body>
    </html>
  );
}

export default Info;
