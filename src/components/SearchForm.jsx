import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

function SearchForm(props) {
  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto" placeholder="Add your item here..." />
      <Button variant="secondary">Submit</Button>
    </Stack>
  );
}

export default SearchForm;
