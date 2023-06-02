import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import auth from "../services/authService";

export default function Logout() {
  auth.logout();
  window.location.reload();
  //location.reload();
  window.location = "/";
  return (
    <div className="container-fluid login-div">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col sm={4}>
            <Card body className="login-card">
              <div className="login-form-header">
                <h3>User logout successful.</h3>
              </div>
            </Card>
          </Col>
        </Row>
        <div className="clear"></div>
      </Container>
    </div>
  );
}
