import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function SelectListForm({ label, name, options, value = "", ...rest }) {
  const [selectedOption, setSelectedOption] = useState();
  // const [selectedOption, setSelectedOption] = useState(options[0].value);

  function handleChange(value, selectOptionSetter) {
    selectOptionSetter(value);
    // onChange(value);
    // handle other stuff like persisting to store etc
  }
  // const newOptions = [{ id: 0, name: "", label: "All" }, ...options];
  // console.log(newOptions);
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Select {...rest} name={name} aria-label={selectedOption}>
        <option key="0" value="">
          All
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectListForm;
