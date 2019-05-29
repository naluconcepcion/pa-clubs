// Liv

import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import './Style.css';
import { push } from 'react-router-redux';
import axios from 'axios';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      err: null,
      items: [] // fetch as an array
    };
  }

  componentDidMount() {
    fetch("http://localhost:8888/users"). // fetch from REMOTE!
    then(result => result.json())
      .then((res) => {
        console.log(res);
        this.setState({
          isLoaded: true,
          items: res
        });
      },
      (error) => {
        this.setState({
          isLoaded: false,
          error
        });
        console.log(this.state)
      })
  }

  render() {
    const { err, isLoaded, items } = this.state;
    if (err) {
      return <div>Error: {err.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
        <p><Link to="/"> Back to the homepage </Link></p>
        <div id="loading">data is loading... thank you for your patience</div>
        </div>
      );
    } else {
      return (
      <div className="render-events">
      <p><Link to="/"> Back to the homepage </Link></p>
        <h1> Current Andover Clubs </h1>
        <p>
        Here is a list of all current clubs at pa; for the sake of privacy and safety,
        club meeting times and locations are hidden.
        </p>
        <div className="club-entries">
        {items.map(
          items =>
          <div className="entry">
            <h2 className = "name"> {items.username} </h2>
            <p className = "student-leader"> <b>Full Name</b>: {items.full_name} </p>
          </div>)}
        </div>
      </div>
      );
    }
  }
}

export default withRouter(Dashboard);
// thank the dude on stackOverflow for the WRAP ROUTER...
// here died 3 hours of my time (https://stackoverflow.com/questions/52422332/cannot-read-property-push-of-undefined-in-react)
