import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Account(props) {
  return (
    <div className="container-fluid">
      <Container fluid>
        <Row>
          <Col sm={3}>Account</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Account;
