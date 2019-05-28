import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import './Style.css';
import { push } from 'react-router-redux';
import axios from 'axios';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      club_name : "",
      time : "",
      location: ""
    };
  };

ComponentDidMount(){
    fetch("http://pa-clubs.herokuapp.com/club_leaders")
    .then(response => response.json())
    .then(data => this.setState({
      club_name : data.club_name,
      time : data.time,
      location : data.location
    }))
}


  render() {
    return (
      <div>
        <h1>DASHBOARD</h1>
        <p id="links"><Link to="/"> Back to the homepage </Link></p>

      </div>
    );
  }
}

export default withRouter(Dashboard);
// thank the dude on stackOverflow for the WRAP ROUTER...
// here died 3 hours of my time (https://stackoverflow.com/questions/52422332/cannot-read-property-push-of-undefined-in-react)
