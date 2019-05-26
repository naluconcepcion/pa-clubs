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
    fetch("http://localhost:8888/database").then(
      (result) => {
        console.log("state set successfully!")
        console.log(result)
        this.setState({
          isLoaded: true,
          items: result
        });
        console.log("state" + this.state)
      },
      (error) => {
        console.log("state setting failed. a tragedy.");
        this.setState({
          isLoaded: false,
          error
        });
        console.log(this.state)
      }
    )
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
        <p> items: {JSON.stringify(items)} </p>
      </div>
      );
    }
  }
}

export default Database;
