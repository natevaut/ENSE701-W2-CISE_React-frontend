import React, { Component } from 'react';

interface State { count: number; }

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 1 };
  }

  makeIncrementer = (amt: number) => () => {
    this.setState((prevState: State) => ({
      count: prevState.count + amt
    }));
  }
  increment = this.makeIncrementer(1);
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>
          Increment count
        </button>
      </div>
    )
  }
}