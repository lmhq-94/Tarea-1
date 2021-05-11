import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Col, InputGroup } from "react-bootstrap";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [request, setRequest] = useState(false);

  function validateForm() {
    return (
      email.length > 0 &&
      username.length > 0 &&
      firstname.length > 0 &&
      lastname.length > 0 &&
      password.length > 0
    );
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
  }

  useEffect(() => {
    if (request) {
      var list = new Array(1);
      var storage = JSON.parse(window.localStorage.getItem("users")!);
      var user = [email, password, username, firstname, lastname];
      if (storage) {
        var size = storage.length + 1;
        list = new Array(size);
        for (var i in storage) {
          list[i] = storage[i];
          if (storage[i][0] === email) {
            alert("This email address is already being used!");
            setRequest(false);
            return;
          }
        }
        list[size - 1] = user;
      } else {
        list[0] = user;
      }
      window.localStorage.setItem("users", JSON.stringify(list));
      setRequest(false);
    }
  }, [request]);

  return (
    <section className="register-section">
      <div className="container">
        <div className="row">
          <div className="register-container col-sm-10">
            <div className="card">
              <div className="card-body">
                <Link
                  className="float-right btn btn-outline-primary"
                  to="/components/pages/Login"
                >
                  I have an account
                </Link>
                <h4 className="card-title mb-4 mt-1 semibold underline">
                  Register
                </h4>
                <div className="Register">
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
                    <Form.Row>
                      <Col>
                        <Form.Group controlId="username">
                          <Form.Label>Username</Form.Label>
                          <InputGroup>
                            <InputGroup.Prepend>
                              <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                              autoFocus
                              type="name"
                              value={username}
                              placeholder="Enter username"
                              size="lg"
                              required
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col>
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
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Group controlId="firstname">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="name"
                            value={firstname}
                            placeholder="Enter first name"
                            size="lg"
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="lastname">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="name"
                            value={lastname}
                            placeholder="Enter last name"
                            size="lg"
                            required
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <br />
                    <Button
                      type="submit"
                      className="btn btn-danger float-right"
                      block
                      disabled={!validateForm() || request}
                      onClick={() => setRequest(true)}
                    >
                      Register
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
