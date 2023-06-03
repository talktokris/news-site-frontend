import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function SelectList({ label, name, options, value = "", onChange }) {
  const [selectedOption, setSelectedOption] = useState();
  // const [selectedOption, setSelectedOption] = useState(options[0].value);

  function handleChange(value, selectOptionSetter) {
    selectOptionSetter(value);
    onChange(value);
    // handle other stuff like persisting to store etc
  }
  const newOptions = [{ id: 0, name: "", label: "All " + label }, ...options];
  // console.log(newOptions);
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Select
        name={name}
        aria-label={selectedOption}
        onChange={(e) => handleChange(e.target.value, setSelectedOption)}
      >
        {newOptions.map((option) => (
          <option key={option.id} value={option.name}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectList;
