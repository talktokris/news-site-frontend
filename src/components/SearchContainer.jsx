import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchForm from "./SearchForm";

function SearchContainer(props) {
  return (
    <Container className="search_container">
      <Row>
        <Col>
          <SearchForm />
        </Col>
      </Row>
    </Container>
  );
}

export default SearchContainer;
