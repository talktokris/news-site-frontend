import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import no_images from "../no_image.jpg";
import { Link } from "react-router-dom";

function NewsModel({ show, fullscreen, item, onClose }) {
  // const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];

  function setImages(path) {
    if (path == "") return no_images;
    return path;
  }

  /*
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState();


  function handleShow(breakpoint, title) {
    setFullscreen(breakpoint);
    //console.log(breakpoint);
    setShow(true);
    setTitle(title);
  }
  */

  return (
    <>
      <Modal
        show={show}
        onHide={() => onClose(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {item.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={setImages(item.image)} fluid />
          <p>{item.content}</p>
          <p className="news-details_footer">
            <strong>Author :</strong> {item.authorName}
            <br />
            <strong>Source :</strong> {item.source}
            <br />
            <strong>Category :</strong> {item.categoryName}
            <br />
            <strong>Link :</strong>
            <Link to={{ pathname: item.link }} target="_blank">
              {item.link}
            </Link>
            <br />
            <strong>Date :</strong> {item.date_human}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewsModel;
