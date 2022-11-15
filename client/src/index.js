import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Context } from "./context";

ReactDOM.render(
  <Context.Provider>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
