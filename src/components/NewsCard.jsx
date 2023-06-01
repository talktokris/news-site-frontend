import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

function minText(text, count) {
  return text.slice(0, count) + (text.length > count ? "..." : "");
}

function NewsCard({ data }) {
  console.log(data);
  return (
    <Row>
      {data.map((item) => (
        <Card className="news-card" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            className="img-center-cropped"
            src={item.image}
          />
          <Card.Body className="news-card-body">
            <Card.Title className="news-card-body-title">
              {item.title}
            </Card.Title>
            <Card.Text className="news-card-body-text">
              {minText(item.content, 110)}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="newsCard">
            <small className="text-muted mt-left">3 mins ago</small>
            <small className="text-muted mt-right">Krishna Jha</small>
          </Card.Footer>
        </Card>
      ))}
    </Row>
  );
}

export default NewsCard;
