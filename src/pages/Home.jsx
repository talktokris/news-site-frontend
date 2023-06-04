import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchContainer from "../components/SearchContainer";
import SideContainer from "../components/SideContainer";
import NewsContainer from "../components/NewsContainer";
// import { DataNewsSet } from "../data.js";
import Pagination from "../components/Pagination";

import { paginate } from "../utils/paginate";
import newsService from "../services/newsService";

function Home({ loaderRun }) {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsSources, setNewsSources] = useState([]);
  const [newsCategories, setNewsCategories] = useState([]);
  const [newsDates, setNewsDates] = useState([]);
  const [newsAuthors, setNewsAuthers] = useState([]);
  const [currentSource, setCurrentSource] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState([]);
  const [currentDate, setCurrentDate] = useState([]);
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
    loaderRun(true);
    const response = await newsService.getNews();
    setData(response.newsData);
    setNewsSources(response.filterSettings.sources);
    setNewsCategories(response.filterSettings.categories);
    setNewsDates(response.filterDates);
    setNewsAuthers(response.filterSettings.authors);
    loaderRun(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // console.log(page);
  };

  async function onSearch(query) {
    loaderRun(true);
    //  const response = await newsService.getNews();
    //console.log(event);
    const response = await newsService.searchNews(query);
    // console.log(response);

    setData(response.newsData);
    setNewsSources(response.filterSettings.sources);
    setNewsCategories(response.filterSettings.categories);
    setNewsDates(response.filterDates);
    setNewsAuthers(response.filterSettings.authors);

    // setData(limit);
    // console.log(limit);
    loaderRun(false);
  }

  function onSourceFilter(value) {
    setCurrentSource(value);
  }

  function onCategoryFilter(value) {
    setCurrentCategory(value);
  }

  function onAuthorFilter(value) {
    setCurrentAuthor(value);
  }

  function onDateFilter(value) {
    setCurrentDate(value);
  }
  function getPageData() {
    let filtered = data;
    // console.log(data);
    if (currentSource != "")
      filtered = data.filter((n) => n.source === currentSource);
    if (currentCategory != "")
      filtered = filtered.filter((n) => n.categoryName === currentCategory);
    if (currentAuthor != "")
      filtered = filtered.filter((n) => n.authorName === currentAuthor);

    if (currentDate != "")
      filtered = filtered.filter((n) => n.date_human === currentDate);

    return filtered;
  }

  const filteded = getPageData();
  const newNewsData = paginate(filteded, currentPage, pageSize);
  return (
    <div className="container-fluid">
      <Container fluid>
        <Row>
          <Col sm={3}>
            <SideContainer
              authors={newsAuthors}
              sources={newsSources}
              categories={newsCategories}
              dates={newsDates}
              onSourceFilter={onSourceFilter}
              onCategoryFilter={onCategoryFilter}
              onAuthorFilter={onAuthorFilter}
              onDateFilter={onDateFilter}
            />
          </Col>
          <Col sm={9}>
            <SearchContainer onSearch={onSearch} />
            <NewsContainer data={newNewsData} />
            <Col className="pagging-container">
              <Pagination
                itemsCount={data.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
