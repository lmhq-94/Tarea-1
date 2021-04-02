import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && firstname.length > 0 && lastname.length > 0 && password.length > 0;
  }

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }

  return (
    <div className="Register">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={username}
            size="lg"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group  controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="name"
            value={firstname}
            size="lg"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group  controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="name"
            value={lastname}
            size="lg"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group  controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            size="lg"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" size="lg" block disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
