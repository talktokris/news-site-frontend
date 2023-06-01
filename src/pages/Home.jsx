import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchContainer from "../components/SearchContainer";
import SideContainer from "../components/SideContainer";

function Home(props) {
  return (
    <div className="container-fluid">
      <Container className="container-fluid">
        <Row>
          <Col sm={9}>
            <SearchContainer />
          </Col>
          <Col sm={3}>
            <SideContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
