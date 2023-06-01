import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

function ListBar({ data, title }) {
  console.log(data);
  return (
    <>
      <h4 className="account-box-title">{title}</h4>
      <ListGroup as="ol" numbered>
        {data.map((item) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.name}</div>
            </div>
            <Form.Check
              // prettier-ignore
              type="switch"
              id="custom-switch"
              label=""
              className="account-switch"
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default ListBar;
