import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import './Style.css';
import { push } from 'react-router-redux';
import axios from 'axios';

class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      old_club_name: "",
      new_club_name: "",
      time: "",
      location: ""

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

    axios.post('https://pa-clubs.herokuapp.com/update', {
      username: this.state.username,
      password: this.state.password,
    }).then(result => {
      console.log(result);
      if(result.status == 200) {
        this.props.history.push('/');
      }
    });
  }
  render() {
    return (
      <div>
        <h1>UPDATE ENTRIES</h1>
        <p id="links"><Link to="/"> Back to the homepage </Link></p>
        <div className="signup-form">
          <form className = "input" onSubmit={this.handleSubmit} method="POST" action="https://pa-clubs.herokuapp.com/update">
          <p>Old name: <input type="text" name="old_club_name" onChange={this.handleChange} id="old_club_name"></input></p>
          <p>New name: <input type="text" name="new_club_name" onChange={this.handleChange} id="new_club_name"></input></p>
          <p>New time: <input type="time" name="time" onChange={this.handleChange} id="time"></input></p>
          <p>New location: <input type="text" name="location" onChange={this.handleChange} id="location"></input></p>
          <button>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Update);
// thank the dude on stackOverflow for the WRAP ROUTER...
// here died 3 hours of my time (https://stackoverflow.com/questions/52422332/cannot-read-property-push-of-undefined-in-react)
