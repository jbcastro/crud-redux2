import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import postReducer from "./reducers/postReducer";

const store = createStore(postReducer);

const butt = [
  {
    editing: "false",
    id: "Wed Jan 16 2019 13:30:28 GMT-0800 (Pacific Standard Time)",
    message: "things",
    title: "stuff"
  }
];
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
