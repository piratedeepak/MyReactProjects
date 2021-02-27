import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

function Index() {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
