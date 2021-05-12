import React, { useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserContext } from "../auth/UserContext";

function Header() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <header className="App-header">
      <UserContext.Provider value={value}>
        <Router>
          <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand className="bold">React Challenge</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {!user ? (
                  <Nav.Link>
                    <Link to="/components/pages/Home">Home</Link>
                  </Nav.Link>
                ) : (
                  <>
                    <Nav.Link>
                      <Link to="/components/pages/Home">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/components/pages/Profile">Profile</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/components/pages/Dashboard">Dashboard</Link>
                    </Nav.Link>
                  </>
                )}
              </Nav>
              {!user ? (
                <Form inline>
                  <Nav.Link>
                    <Link
                      className="btn btn-outline-success"
                      to="/components/pages/Register"
                    >
                      Sign Up
                    </Link>
                  </Nav.Link>
                  &nbsp; &nbsp;
                  <Nav.Link>
                    <Link
                      className="btn btn-outline-primary"
                      to="/components/pages/Login"
                    >
                      Sign In
                    </Link>
                  </Nav.Link>
                </Form>
              ) : (
                <Form inline>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      setUser(null);
                      window.localStorage.removeItem("token");
                    }}
                  >
                    Sign Out
                  </button>
                </Form>
              )}
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Redirect to="/components/pages/Home" />
            </Route>
            <Route path="/components/pages/Home" component={Home}>
              <Home />
            </Route>
            <Route path="/components/pages/Profile" component={Profile}>
              <Profile />
            </Route>
            <Route path="/components/pages/Dashboard" component={Dashboard}>
              <Dashboard />
            </Route>
            <Route path="/components/pages/Login" component={Login}>
              <Login />
            </Route>
            <Route path="/components/pages/Register" component={Register}>
              <Register />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </header>
  );
}

export default Header;
