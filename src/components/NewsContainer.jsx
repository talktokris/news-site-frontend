import React from "react";
import NewsCard from "./NewsCard";

function NewsContainer({ data }) {
  return (
    <div>
      <div>
        <h5> Total {data.length} Results Found.</h5>
      </div>
      <NewsCard data={data} />
    </div>
  );
}

export default NewsContainer;
