// Nalu

import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import './Style.css';
import { push } from 'react-router-redux';
import axios from 'axios';

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
    this.setState({ [event.target.name]: event.target.value }); // relied on this dude https://medium.com/@tmkelly28/handling-multiple-form-inputs-in-react-c5eb83755d15
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    axios.post('https://pa-clubs.herokuapp.com/login', {
      username: this.state.username,
      password: this.state.password,
    }).then(result => {
      console.log(result);
      if(result.status == 200) {
        this.props.history.push('/dashboard'); // if successfully logged in, render the form pushing page
      }
      else {
        this.props.history.push('/failed'); // if failed, render form failed page
      }
    });
  }
  render() {
    return (
      <div id="signup">
      <p id="links"><Link to="/"> Back to the homepage </Link></p>
        <h1>LOGIN</h1>
        <div className="signup-form">
          <form className = "input" onSubmit={this.handleSubmit} method="POST" action="https://pa-clubs.herokuapp.com/login">
          <p>Username: <input type="text" name="username" onChange={this.handleChange} id="username"></input></p>
          <p>Password: <input type="password" name="password" onChange={this.handleChange} id="password"></input></p>
          <button>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
// thank the dude on stackOverflow for the WRAP ROUTER...
// here died 3 hours of my time (https://stackoverflow.com/questions/52422332/cannot-read-property-push-of-undefined-in-react)
