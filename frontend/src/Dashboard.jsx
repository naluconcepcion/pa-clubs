// Nalu

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
    fetch("https://pa-clubs.herokuapp.com/users"). // fetch from REMOTE!
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
        <h1> a quick note </h1>
        <p>
        In the future, this page will display more personalized information, such as your level of credential access
        or the clubs which you are the leader of. Presently, we have not set these two features because
        we have not set the backend of our site to determine which users are club leaders.
        </p>
        <h1> other existing users </h1>
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
