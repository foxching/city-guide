import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import InfoContextProvider from "./components/context";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <InfoContextProvider>
    <Router>
      <App />
    </Router>
  </InfoContextProvider>,
  rootElement
);
