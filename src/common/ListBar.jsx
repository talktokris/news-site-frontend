import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ListBar({ data, title, onDelete }) {
  // console.log(data);
  return (
    <>
      <h4 className="account-box-title">{title}</h4>
      <ListGroup as="ol" numbered>
        {data.map((item) => (
          <ListGroup.Item
            as="li"
            key={item.id + item.name}
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.label}</div>
            </div>

            <Button variant="danger" onClick={() => onDelete(item)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default ListBar;
