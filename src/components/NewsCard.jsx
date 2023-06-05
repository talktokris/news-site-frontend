import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import no_images from "../no_image.jpg";

function minText(text, count) {
  return text.slice(0, count) + (text.length > count ? "..." : "");
}

function setImages(path) {
  if (path == "") return no_images;
  return path;
}

function NewsCard({ data, handleShow }) {
  return (
    <Row className="news-results">
      {data.map((item) => (
        <Card
          key={item.id + item.link}
          className="news-card"
          style={{ width: "20rem" }}
        >
          <Card.Img
            variant="top"
            className="img-center-cropped"
            src={setImages(item.image)}
          />
          <Card.Body className="news-card-body">
            <Card.Title className="news-card-body-title">
              {item.title}
            </Card.Title>
            <Card.Text className="news-card-body-text">
              {minText(item.content, 120)}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="newsCard">
            <small className="text-muted mt-left">{item.source}</small>
            <small className="text-muted mt-right">{item.date_human}</small>
          </Card.Footer>
          <Card.Footer className="newsCard">
            <small className="text-muted mt-right"> {item.authorName}</small>
          </Card.Footer>
          <Button
            className="btn-signin"
            onClick={() => handleShow("lg-down", item)}
          >
            Read More
          </Button>
        </Card>
      ))}
    </Row>
  );
}

export default NewsCard;
