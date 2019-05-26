import React from 'react';
import './App.css';

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
        <h1> Clubs </h1>
        <p>
        {items.map(
          items =>
          <div className="club-entries">
            <h2 className = "id">  {items.id} </h2>
            <h2 className = "name"> {items.club_name} </h2>
            <p className = "student-leader"> {items.student_leader} </p>
            <p className = "meeting-time"> {items.time} </p>
            <p className = "location"> {items.location} </p>
            <p className = "advisor"> {items.advisor} </p>
            <p className = "description"> {items.description} </p>
          </div>)}
          </p>
      </div>
      );
    }
  }
}

export default Database;
