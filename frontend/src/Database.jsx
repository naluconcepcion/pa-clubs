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
    fetch("https://localhost:8888/database").then(
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
    const { err, isLaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
      <div className="render-events">
        <h1> Calendar Events </h1>
        <p> items: {items[0]} </p>
      </div>
      );
    }
  }
}

export default Database;
