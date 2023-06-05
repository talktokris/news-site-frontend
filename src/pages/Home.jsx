import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchContainer from "../components/SearchContainer";
import SideContainer from "../components/SideContainer";
import NewsContainer from "../components/NewsContainer";
import Pagination from "../components/Pagination";

import { paginate } from "../utils/paginate";
import newsService from "../services/newsService";

function Home({ loaderRun, user }) {
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

  useEffect(() => {
    fatchData();
  }, []);

  const fatchData = async () => {
    loaderRun(true);
    const data = await newsService.getNews();
    if (data != null) {
      // console.log(data);
      const { filterDates, filterSettings, newsData } = data;
      // console.log(filterDates);
      if (newsData) {
        setData(newsData);
      }
      if (filterDates) {
        setNewsDates(filterDates);
      }
      if (filterSettings) {
        setNewsSources(filterSettings.sources);
        setNewsCategories(filterSettings.categories);
        setNewsAuthers(filterSettings.authors);
      }
    }
    loaderRun(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  async function onSearch(query) {
    loaderRun(true);

    const result = await newsService.searchNews(query);
    loaderRun(false);
    setData(result);
    // console.log(result);
    if (result.status) {
      setData(result.newsData);
      setNewsSources(result.filterSettings.sources);
      setNewsCategories(result.filterSettings.categories);
      setNewsDates(result.filterDates);
      setNewsAuthers(result.filterSettings.authors);
    }
  }
  function resetPage() {
    setCurrentPage(1);
  }

  function onSourceFilter(value) {
    setCurrentSource(value);
    resetPage();
  }

  function onCategoryFilter(value) {
    setCurrentCategory(value);
    resetPage();
  }

  function onAuthorFilter(value) {
    setCurrentAuthor(value);
    resetPage();
  }

  function onDateFilter(value) {
    setCurrentDate(value);
    resetPage();
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
            <NewsContainer data={newNewsData} totalResult={filteded} />
            <Col className="pagging-container">
              <Pagination
                itemsCount={filteded.length}
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
