import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
const buttons = [
  { id: 1, name: "BBC News" },
  { id: 2, name: "ABP News" },
  { id: 3, name: "New Your Times" },
  { id: 4, name: "The Guardian" },
  { id: 5, name: "CNN News" },
  { id: 6, name: "CNBC News" },
];
function SideBar(props) {
  return (
    <ListGroup as="ul">
      {buttons.map((item) => (
        <ListGroup.Item key={item.id} as="li">
          {item.name}
        </ListGroup.Item>
      ))}
      {/* <ListGroup.Item as="li" active>
        Cras justo odio
      </ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li" disabled>
        Morbi leo risus
      </ListGroup.Item>
      <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item> */}
    </ListGroup>
  );
}

export default SideBar;
