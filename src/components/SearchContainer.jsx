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
          <div>
            <h2>News Agency</h2>
            <p>News Magazine & Blog Responsive HTML5 Template</p>
          </div>

          <SearchForm />
        </Col>
      </Row>
    </Container>
  );
}

export default SearchContainer;
