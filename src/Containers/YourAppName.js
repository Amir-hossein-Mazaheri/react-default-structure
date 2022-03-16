import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "../Store/configStore";
import App from "./App";

class YourAppName extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default YourAppName;
