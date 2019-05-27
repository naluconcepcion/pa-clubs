import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './Style.css';

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // event.preventDefault();
    const data = new FormData(event.target);

    fetch('http://localhost:8888/login', {
      method: 'POST',
      body: data
    });
  }
  render() {
    return (
      <div>
        <h1>LOGIN</h1>
        <p id="links"><Link to="/"> Back to the homepage </Link></p>
        <div className="signup-form">
          <form className = "input" onSubmit = {this.handleSubmit} method="POST">
          <p>Username: <input type="text" name="username" id="username"></input></p>
          <p>Password: <input type="password" name="password" id="password"></input></p>
          <button onClick={this.handleSubmit}>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
