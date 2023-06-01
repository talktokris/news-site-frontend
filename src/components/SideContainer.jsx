import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "../common/SideBar";

function SideContainer(props) {
  const newsList = [
    { id: 1, name: "BBC News" },
    { id: 2, name: "ABP News" },
    { id: 3, name: "New Your Times" },
    { id: 4, name: "The Guardian" },
    { id: 5, name: "CNN News" },
    { id: 6, name: "CNBC News" },
  ];

  const catList = [
    { id: 1, name: "Travel" },
    { id: 2, name: "Health" },
    { id: 3, name: "Science" },
    { id: 4, name: "Food" },
    { id: 5, name: "Life Style" },
    { id: 6, name: "Movies" },
  ];
  return (
    <Container className="">
      <Row>
        <Col>
          <SideBar title="News Sources" listData={newsList} />
          <SideBar title="News Category" listData={catList} />
        </Col>
      </Row>
    </Container>
  );
}

export default SideContainer;
