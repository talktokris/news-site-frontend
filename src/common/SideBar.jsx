import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function SideBar({ title, listData }) {
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        {/* <Card.Title>News Sources</Card.Title> */}
        <ListGroup as="ul">
          {listData.map((item) => (
            <ListGroup.Item key={item.id} as="li">
              {item.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default SideBar;
