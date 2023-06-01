import React from "react";
import NewsCard from "./NewsCard";

function NewsContainer({ data }) {
  return (
    <div>
      <NewsCard data={data} />
    </div>
  );
}

export default NewsContainer;
