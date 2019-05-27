// Liv

import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './Style.css';
import axios from 'axios';

class Signup extends React.Component {
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
    this.setState({ [event.target.name]: event.target.value }); // relied on this dude https://medium.com/@tmkelly28/handling-multiple-form-inputs-in-react-c5eb83755d15
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    axios.post('http://pa-clubs.herokuapp.com/signup', {
      username: this.state.username,
      password: this.state.password,
    }).then(result => {
      console.log(result);
    });
  }
  render() {
    return (
      <div>
        <h1>SIGN UP</h1>
        <p id="links"><Link to="/"> Back to the homepage </Link></p>
        <div className="signup-form">
          <form className = "input" onSubmit={this.handleSubmit} method="POST" action="http://pa-clubs.herokuapp.com/signup">
          <p>Username: <input type="text" name="username" onChange={this.handleChange} id="username"></input></p>
          <p>Password: <input type="password" name="password" onChange={this.handleChange} id="password"></input></p>
          <button>sign up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
