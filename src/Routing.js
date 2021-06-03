import React from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

function Closures() {
  return <div>Closures JS</div>;
}

function Hostings() {
  return <div>HostingsJs</div>;
}

function Grid() {
  return (
    <div className="grid-container">
      <div className="item1">header</div>
      <div className="item2">menu</div>
      <div className="item3">Aside</div>
      <div className="item4">footer</div>
    </div>
  );
}

export default function Routes(props) {
  return (
    <Router>
      <div>
        <ul className="links">
          <li className="links">
            <Link to="/closure">Closure</Link>
          </li>
          <li>
            <Link to="/hosting">Hoisting</Link>
          </li>
          <li>
            <Link to="/grid">Css Grid</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route
          path="/closure"
          exact
          render={(props) => <Closures {...props} />}
        />
        <Route
          path="/hosting"
          exact
          render={(props) => <Hostings {...props} />}
        />
        <Route path="/grid" exact render={(props) => <Grid {...props} />} />
      </Switch>
    </Router>
  );
}
