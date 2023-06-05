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
