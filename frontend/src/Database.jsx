import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './Style.css';

class Database extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      err: null,
      items: [] // fetch as an array
    };
  }
  componentDidMount() {
    fetch("http://localhost:8888/database").
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
      return <div>Loading...</div>;
    } else {
      return (
      <div className="render-events">
      <p><Link to="/"> Back to the homepage </Link></p>
        <h1> Currently Existing Andover Clubs </h1>
        <div className="club-entries">
        {items.map(
          items =>
          <div className="entry">
            <h2 className = "name"> {items.club_name} </h2>
            <p className = "student-leader"> <b>Club Leader(s)</b>: {items.student_leader} </p>
            <p className = "meeting-time"> <b>Meeting Time</b>: {items.time} </p>
            <p className = "location"> <b>Meeting Location</b>: {items.location} </p>
            <p className = "advisor"> <b>Club Advisor</b>: {items.advisor} </p>
            <p className = "description"> <b>Club Description</b>: {items.description} </p>
          </div>)}
        </div>
      </div>
      );
    }
  }
}

export default Database;
