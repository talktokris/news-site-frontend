import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

import Stack from "react-bootstrap/Stack";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  function buttonDisable() {
    return query.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <Row className="justify-content-md-center">
      <Col xs lg="9">
        <InputGroup className="mb-3">
          <Form.Control
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Keyword .. "
          />
          <Button
            variant="success"
            type="submit"
            disabled={!buttonDisable()}
            onClick={handleSubmit}
            id="button-addon2"
          >
            Search
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default SearchForm;
