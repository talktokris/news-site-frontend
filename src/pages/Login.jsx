import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router-dom";
//import httpService from "../services/httpService";

//import Joi from "joi-browser";
//import Form from "../common/Form";

import auth from "../services/authService";
//import axios from "axios";
import { create } from "apisauce";

function Login({ loaderRun }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  function buttonDisable() {
    return email.length > 0 && password.length > 0;
  }

  const validateValues = async (email, password) => {
    let errors = {};
    if (email.length < 15) {
      errors = "Email is too short";

      if (validateEmail(email)) {
      } else {
        errors = email + " is invalid.";
      }
    } else if (password.length < 5) {
      errors = "Password is too short";
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
  /*
  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(inputFields);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);
*/
  async function handleSubmit(event) {
    event.preventDefault();

    validateValues(email, password);

    if (errors === "") {
      loaderRun(true);
      const data = await auth.login(email, password);
      loaderRun(false);

      if (data.success === false) {
        setErrors("Username or Password Incorrect");
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
    <div className="container-fluid login-div">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col sm={4}>
            <Card body className="login-card">
              <div className="login-form-header">
                <h2>Login</h2>
              </div>
              <Form>
                {errors && (
                  <Form.Text className="text-danger error-msg">
                    {errors}
                  </Form.Text>
                )}
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
                  <Button
                    type="submit"
                    disabled={!buttonDisable()}
                    className="btn-signin"
                    onClick={handleSubmit}
                  >
                    Login
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

export default Login;
