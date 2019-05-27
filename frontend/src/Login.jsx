import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './Style.css';

function Login() {
  return (
    <div>
      <h1>LOGIN</h1>
      <p id="links"><Link to="/"> Back to the homepage </Link></p>
      <body>
      <div className="signup-form">
        <form className = "input" action="http://localhost:8888/login" method="post">
        <p>Username: <input type="text" name="username" id="username"></input></p>
        <p>Password: <input type="password" name="password" id="password"></input></p>
        <input type="submit" value="submit"></input>
        </form>
      </div>
      </body>
    </div>
  );
}

export default Login;
