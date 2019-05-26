import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './Style.css';

function Login() {
  return (
    <div>
    <p><Link to="/"> Back to the homepage </Link></p>
      <h1>LOGIN</h1>
      <p id="landing-text">
      This should be the landing page for our project's login page.
      If you are a successfully authenticated user, then you would be permitted to
      create new club entries using forms.
      </p>
    </div>
  );
}

export default Login;
