import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './Style.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var uname = event.target.username;
    var pword = event.target.password;
    console.log(uname + " " + pword);
    this.setState({
      username: uname,
      password: pword
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log(event.target);

    fetch('http://pa-clubs.herokuapp.com/login', {
      method: 'POST',
      body: data,
    });
  }
  render() {
    return (
      <div>
        <h1>LOGIN</h1>
        <p id="links"><Link to="/"> Back to the homepage </Link></p>
        <div className="signup-form">
          <form className = "input" onSubmit={this.handleSubmit} method="POST" action="http://pa-clubs.herokuapp.com/login">
          <p>Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} id="username"></input></p>
          <p>Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="password"></input></p>
          <button>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
