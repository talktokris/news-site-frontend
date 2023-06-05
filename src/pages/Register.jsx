import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import auth from "../services/authService";

function Register({ loaderRun }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [errors, setErrors] = useState("");
  function buttonDisable() {
    return (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      repassword.length > 0
    );
  }

  const validateValues = async (name, email, password, repassword) => {
    let errors = {};
    if (name.length < 5) {
      errors = "Email is too short";
    } else if (email.length < 15) {
      errors = "Email is too short";
      if (validateEmail(email)) {
      } else {
        errors = "Email address is invalid.";
      }
    } else if (password.length < 5) {
      errors = "Password is too short";
    } else if (repassword.length < 5) {
      errors = "Confirm Password is too short";
    } else if (password != repassword) {
      errors = "Confirm password does not match";
    } else {
      errors = "";
    }
    setErrors(errors);
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  async function handleSubmit(event) {
    event.preventDefault();
    validateValues(name, email, password, repassword);

    if (errors === "") {
      loaderRun(true);
      const data = await auth.register(name, email, password, repassword);
      loaderRun(false);
      if (data.success === false) {
        setErrors("Form validation error");
      }
      if (data.success === true) {
        window.location.reload();
        window.location = "/";
      }
      //  console.log(data);
      // console.log(email + "-" + password);
    }
  }
  return (
    <div className="container-fluid register-div">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col sm={4}>
            <Card body className="login-card">
              <div className="login-form-header">
                <h2>Register</h2>
              </div>
              <Form>
                {errors && (
                  <Form.Text className="text-danger error-msg">
                    {errors}
                  </Form.Text>
                )}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    autoFocus
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                    placeholder="Confirm Password"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Button
                    type="submit"
                    disabled={!buttonDisable()}
                    className="btn-signin"
                    onClick={handleSubmit}
                  >
                    Register
                  </Button>
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
        <div className="clear"></div>
      </Container>
    </div>
  );
}

export default Register;
