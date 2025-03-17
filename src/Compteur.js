import React, { Component } from 'react';

class Compteur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // When the component mounts, start the interval
  componentDidMount() {
    console.log("Compteur: componentDidMount - Starting counter");
    this.interval = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  // When the component updates, log the new count
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Compteur: componentDidUpdate - Count updated to ${this.state.count}`);
    }
  }

  // When the component unmounts, clear the interval
  componentWillUnmount() {
    console.log("Compteur: componentWillUnmount - Clearing interval");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>Compteur: {this.state.count}</h2>
      </div>
    );
  }
}

export default Compteur;
