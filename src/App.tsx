import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";
import "./assets/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages/Dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/pages/Profile">Profile</Link>
              </li>
              <li>
                <Link to="/pages/Login">Login</Link>
              </li>
              <li>
                <Link to="/pages/Register">Register</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route exact path="/pages/Home"/>
              <Route path="/pages/Dashboard">
                <Dashboard />
              </Route>
              <Route path="/pages/Profile">
                <Profile />
              </Route>
              <Route path="/pages/Login">
                <Login />
              </Route>
              <Route path="/pages/Register">
                <Register />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
