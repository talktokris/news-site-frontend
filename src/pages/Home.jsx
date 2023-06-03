import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchContainer from "../components/SearchContainer";
import SideContainer from "../components/SideContainer";
import NewsContainer from "../components/NewsContainer";
import { DataNewsSet } from "../data.js";
import Pagination from "../components/Pagination";

import { paginate } from "../utils/paginate";

function Home(props) {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  /*
  const [allValues, setAllValues] = useState({
    data: "",
    // genres: [],
    pageSize: 10,
    currentPage: 1,
    //selectedGenre: "",
    //sortColumn: { path: "title", order: "asc" },
    //searchQuery: "",
  });
  */
  //setData(5);

  useEffect(() => {
    fatchData();
  }, []);

  const fatchData = async () => {
    setData(DataNewsSet);
  };

  // console.log(data);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // console.log(page);
  };

  const movies = paginate(data, currentPage, pageSize);
  return (
    <div className="container-fluid">
      <Container fluid>
        <Row>
          <Col sm={3}>
            <SideContainer />
          </Col>
          <Col sm={9}>
            <SearchContainer />
            <NewsContainer data={movies} />
            <Pagination
              itemsCount={data.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
