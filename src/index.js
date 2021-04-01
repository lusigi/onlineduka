import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <Router>
      <App />
    </Router>
  </StateProvider>,

  document.getElementById("root")
);
