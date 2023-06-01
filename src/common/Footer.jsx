import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer(props) {
  return (
    <Container className="footer" fluid>
      <Row>
        <Col>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Digiloka</span>
            </strong>
            . All Rights Reserved
          </div>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
