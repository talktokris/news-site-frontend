import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

import Stack from "react-bootstrap/Stack";

function SearchForm(props) {
  return (
    <Row className="justify-content-md-center">
      <Col xs lg="9">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="success" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default SearchForm;
