import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";
import ProtectedRoute from "./ProtectedRoute";
import AuthProvider from "../auth/AuthProvider";
import useAuth from "../auth/useAuth";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";



function Header() {
  const [isAuth, setIsAuth] = useState(false);
  const auth = useAuth();
  const handleLogin = () => {
    auth?.signIn(() => {
      //push to login page
    });
  };

  return (
    <header className="App-header">
      <AuthProvider>
        <Router>
          <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand className="bold">React Challenge</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/components/pages/Home">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/components/pages/Dashboard">Dashboard</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/components/pages/Profile">Profile</Link>
                </Nav.Link>
              </Nav>
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
                {/* <div>User {JSON.stringify(auth?.username)}</div> */}
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Redirect to="/components/pages/Home" />
            </Route>
            <Route path="/components/pages/Home" component={Home}>
              <Home />
            </Route>
            <ProtectedRoute
              path="/components/pages/Dashboard"
              component={Dashboard}
              isAuth={isAuth}
            />
            <ProtectedRoute
              path="/components/pages/Profile"
              component={Profile}
              isAuth={isAuth}
            />
            <Route path="/components/pages/Login" component={Login}>
              <Login />
            </Route>
            <Route path="/components/pages/Register" component={Register}>
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </header>
  );
}

export default Header;
