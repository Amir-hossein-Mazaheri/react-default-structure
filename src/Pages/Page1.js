import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { INCREASE, DECREASE } from "../Store/entities/YOUR_REDUCER_NAME";

class Page1 extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <div className="mx-auto bg-gray-100 text-center space-y-8">
        <h1>Counter with State</h1>
        <div className="flex gap-5 justify-center">
          <button onClick={() => this.props.INCREASE()}>Increase</button>
          <button onClick={() => this.props.DECREASE()}>Decrease</button>
        </div>

        <h2>{this.props.count}</h2>

        <Link className="mt-24 text-xl font-bold" to="/">
          Counter with State
        </Link>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    count: store.entities.YOUR_REDUCER_NAME.count,
  };
};

export default connect(mapStoreToProps, { INCREASE, DECREASE })(Page1);
