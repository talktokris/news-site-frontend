import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "../common/SideBar";

function SideContainer(props) {
  return (
    <Container className="search_container">
      <Row>
        <Col>
          <div className="side-bar-header">
            <h5>News Sources</h5>
          </div>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
}

export default SideContainer;
