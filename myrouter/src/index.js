import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import User from "./User";
import Visit from "./Visit";
import Notfound from "./Notfound";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/visit">Visit</Link>
        </li>
      </ul>
    </div>

    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/user" component={User} />
      <Route path="/visit" component={Visit} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{routing}</React.StrictMode>,
  document.getElementById("root")
);
