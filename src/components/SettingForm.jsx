import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import SelectListForm from "../common/SelectListForm";

import Stack from "react-bootstrap/Stack";

function SettingForm({ name, label, options, handleSubmit, errors, ...rest }) {
  return (
    <Row
      style={{
        border: "1px solid rgb(212, 212, 212)",
        padding: 20,
        borderRadius: 10,
        margin: 10,
      }}
    >
      {errors && (
        <Form.Text className="text-warning error-msg">{errors}</Form.Text>
      )}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <SelectListForm name={name} label={label} options={options} {...rest} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Button
          variant="success"
          type="submit"
          onClick={handleSubmit}
          id="button-addon2"
        >
          Save
        </Button>
      </Form.Group>
    </Row>
  );
}

export default SettingForm;
