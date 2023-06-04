import React, { useState } from "react";
import NewsCard from "./NewsCard";
import NewsModel from "./NewsModel";

function NewsContainer({ data }) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);

  function handleShow(breakpoint, itemValue) {
    setFullscreen(breakpoint);
    console.log(item);
    setShow(true);
    setItem(itemValue);
  }
  function onClose(value) {
    setShow(value);
  }
  return (
    <div>
      <NewsModel
        onClick={handleShow}
        show={show}
        fullscreen={fullscreen}
        item={item}
        onClose={onClose}
      />
      <div>
        <h5> Total {data.length} Results Found.</h5>
      </div>
      <NewsCard data={data} handleShow={handleShow} />
    </div>
  );
}

export default NewsContainer;
