import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div className="mx-auto bg-gray-100 text-center space-y-8">
        <h1>Counter with State</h1>
        <div className="flex gap-5 justify-center">
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increase
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Decrease
          </button>
        </div>

        <h2>{this.state.count}</h2>

        <Link className="mt-24 text-xl font-bold" to="/page1">
          Counter with Redux
        </Link>
      </div>
    );
  }
}

export default HomePage;
