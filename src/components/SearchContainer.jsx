import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchForm from "./SearchForm";

function SearchContainer({ onSearch }) {
  return (
    <Container className="search_container">
      <SearchForm onSearch={onSearch} />
    </Container>
  );
}

export default SearchContainer;
