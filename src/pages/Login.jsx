import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function Login(props) {
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
                <Form.Text className="text-danger error-msg">
                  We'll never share your email with anyone else.
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Button type="submit" className="btn-signin">
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
