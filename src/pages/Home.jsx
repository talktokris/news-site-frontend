import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchContainer from "../components/SearchContainer";
import SideContainer from "../components/SideContainer";
import NewsContainer from "../components/NewsContainer";
import { DataNewsSet } from "../data.js";
function Home(props) {
  //console.log(DataNewsSet);
  return (
    <div className="container-fluid">
      <Container fluid>
        <Row>
          <Col sm={9}>
            <SearchContainer />
            <NewsContainer data={DataNewsSet} />
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
