import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SelectList from "../common/SelectList";

function SideContainer({
  sources,
  categories,
  authors,
  dates,
  onSourceFilter,
  onCategoryFilter,
  onAuthorFilter,
  onDateFilter,
}) {
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
    <Container>
      <Row>
        <Col>
          <Card className="search-filter-card">
            <Card.Header>News Filters</Card.Header>
            <Form className="filter-form-group">
              <SelectList
                name="source"
                label="News Sources"
                options={sources}
                onChange={onSourceFilter}
              />

              <SelectList
                name="category"
                label="News Category"
                options={categories}
                onChange={onCategoryFilter}
              />

              <SelectList
                name="author"
                label="News Author"
                options={authors}
                onChange={onAuthorFilter}
              />

              <SelectList
                name="date"
                label="News Date"
                options={dates}
                onChange={onDateFilter}
              />

              {/* <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>News Date</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group> */}

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Button type="submit" className="btn-signin">
                  Reset Filter
                </Button>
              </Form.Group>
            </Form>
          </Card>

          {/* <SideBar title="News Sources" listData={newsList} />
          <SideBar title="News Category" listData={catList} /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default SideContainer;
