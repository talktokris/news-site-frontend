import React, { useState } from "react";
import NewsCard from "./NewsCard";
import NewsModel from "./NewsModel";

function NewsContainer({ data, totalResult }) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);

  function handleShow(breakpoint, itemValue) {
    setFullscreen(breakpoint);
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
        <h5> Total {totalResult.length} Results Found.</h5>
      </div>
      <NewsCard data={data} handleShow={handleShow} />
    </div>
  );
}

export default NewsContainer;
