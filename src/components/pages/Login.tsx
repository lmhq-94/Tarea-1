import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Form, Button } from "react-bootstrap";
import { UserContext } from "../../auth/UserContext";

function Login() {
  //const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [request, setRequest] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
  }

  useEffect(() => {
    if (request) {
      var flag = false;
      var storage = JSON.parse(window.localStorage.getItem("users")!);
      var credentials = [email, password];
      if (storage) {
        for (var i in storage) {
          if (storage[i][0] === email && storage[i][1] === password) {
            flag = true;
          }
        }
        if (flag) {
          window.localStorage.setItem("token", JSON.stringify(credentials));
          //setUser(credentials);
        } else {
          alert("The credentials provided are not registered!");
        }
      }
      setRequest(false);
    }
  }, [request]);

  return (
    <section className="login-section">
      <div className="container">
        <div className="row">
          <div className="login-container col-sm-10">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4 mt-1 semibold underline">
                  Sign in
                </h4>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      autoFocus
                      type="email"
                      value={email}
                      placeholder="Enter email"
                      size="lg"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      placeholder="Enter password"
                      size="lg"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <br />
                  <Button
                    type="submit"
                    variant="primary"
                    block
                    disabled={!validateForm() || request}
                    onClick={() => setRequest(true)}
                  >
                    Login
                  </Button>
                  <br />
                  <Nav.Link className="padding0">
                    <Link
                      className="btn btn-outline-success btn-block"
                      to="/components/pages/Register"
                    >
                      Create an Account
                    </Link>
                  </Nav.Link>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
