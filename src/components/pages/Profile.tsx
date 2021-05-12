import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { UserContext } from "../../auth/UserContext";

function Profile() {
  //const {auth, setAuth} = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return (
      username.length > 0 &&
      firstname.length > 0 &&
      lastname.length > 0 &&
      password.length > 0
    );
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
  }

  return (
    <section className="register-section">
      <div className="container">
        <div className="row">
          <div className="register-container col-sm-10">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4 mt-1 semibold underline">
                  Profile
                </h4>
                <div className="Register">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        autoFocus
                        type="email"
                        value={username}
                        placeholder="Enter email"
                        size="lg"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="username">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        autoFocus
                        type="name"
                        value={username}
                        placeholder="Enter username"
                        size="lg"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        placeholder="Enter password"
                        size="lg"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="firstname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="name"
                        value={firstname}
                        placeholder="Enter first name"
                        size="lg"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="lastname">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="name"
                        value={lastname}
                        placeholder="Enter last name"
                        size="lg"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Form.Group>
                    <br />
                    <Button
                      type="submit"
                      className="btn btn-success float-right"
                      block
                      disabled={!validateForm()}
                    >
                      Save
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

export default Profile;
