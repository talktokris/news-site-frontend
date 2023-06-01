import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListBar from "../common/ListBar";

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

const authList = [
  { id: 1, name: "Krishna Jha" },
  { id: 2, name: "Arati Thakur" },
  { id: 3, name: "Aachal Thakur" },
  { id: 4, name: "Shivansh Thakur" },
  { id: 5, name: "Murari Kumar Jha" },
  { id: 6, name: "Shitaram Jha" },
  { id: 7, name: "Anita Devi Jha" },
  { id: 7, name: "Raj Kishor Jha" },
  { id: 7, name: "Shail Kumari Devi" },
];

function Account(props) {
  return (
    <div className="container-fluid">
      <Container fluid>
        <Row>
          <Col className="accunt-setting">
            <h2>News Settings</h2>
            <p>News feed user preference settings.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <ListBar data={newsList} title="News Source Preference" />
          </Col>

          <Col>
            <ListBar data={catList} title="News Cateory Preference" />
          </Col>

          <Col>
            <ListBar data={authList} title="Author Preference" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Account;
