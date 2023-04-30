import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [filled, setFilled] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 0) {
          localStorage.setItem("authToken", data.auth_token);
          navigate("/admin");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [filled]);
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => setFilled(1)}>
        Submit
      </Button>
    </Form>
  );
}

export default Login;
