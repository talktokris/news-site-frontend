import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListBar from "../common/ListBar";
import accountService from "../services/accountService";
import SettingForm from "../components/SettingForm";

function Account({ loaderRun, user }) {
  const [newsSources, setNewsSources] = useState([]);
  const [newsCategories, setNewsCategories] = useState([]);
  const [newsAuthors, setNewsAuthers] = useState([]);
  const [userSources, setUserSources] = useState([]);
  const [userCategories, setUserCategories] = useState([]);
  const [userAuthors, setUserAuthors] = useState([]);
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [authorErrors, setAuthorErrors] = useState("");
  const [categoryErrors, setCategoryErrors] = useState("");
  const [sourceErrors, setSourceErrors] = useState("");
  const [fetch, setFetch] = useState(false);
  // console.log(user);

  useEffect(() => {
    setFetch(false);
    fatchData();
  }, [fetch]);

  const fatchData = async () => {
    // loaderRun(true);
    const response = await accountService.getUserSettings();
    // console.log(response);
    if (response != null) {
      setNewsSources(response.fill_settings.sources);
      setNewsCategories(response.fill_settings.categories);
      setNewsAuthers(response.fill_settings.authors);
      setUserSources(response.user_sources);
      setUserCategories(response.user_categories);
      setUserAuthors(response.user_authors);
    }
    // loaderRun(false);
  };

  async function handleSourceSubmit(event) {
    event.preventDefault();
    console.log(source);
    loaderRun(true);
    const data = await accountService.saveUserSetting(source, "source");
    console.log(data);
    loaderRun(false);
    if (data == null) setSourceErrors("Unknown eror");
    else {
      if (data.status == "error") {
        setSourceErrors(data.message);
      }
      if (data.status == "success") {
        setSourceErrors(data.message);
        setFetch(true);
      }
    }

    // console.log(email + "-" + password);
  }

  async function handleCategorySubmit(event) {
    event.preventDefault();

    loaderRun(true);
    const data = await accountService.saveUserSetting(category, "category");
    // console.log(data.status);
    // console.log(data);
    loaderRun(false);
    if (data == null) setCategoryErrors("Unknown eror");
    else {
      if (data.status == "error") {
        setCategoryErrors(data.message);
      }
      if (data.status == "success") {
        setCategoryErrors(data.message);
        setFetch(true);
      }
    }

    //  console.log(data);
    // console.log(email + "-" + password);
  }

  async function handleAuthorSubmit(event) {
    event.preventDefault();

    loaderRun(true);
    const data = await accountService.saveUserSetting(author, "author");
    //  console.log(data.status);
    loaderRun(false);
    if (data == null) setAuthorErrors("Unknown eror");
    else {
      if (data.status == "error") {
        setAuthorErrors(data.message);
      }
      if (data.status == "success") {
        setAuthorErrors(data.message);
        setFetch(true);
      }
    }

    //  console.log(data);
    // console.log(email + "-" + password);
  }
  async function sourceDelete(item) {
    console.log(item);
    loaderRun(true);
    const data = await accountService.deleteUserSetting(item.id, "source");
    // console.log(data);
    loaderRun(false);
    if (data == null) setSourceErrors("Unknown eror");
    else {
      if (data.status == "error") {
        setSourceErrors(data.message);
      }
      if (data.status == "success") {
        setSourceErrors(data.message);
        setFetch(true);
      }
    }

    //  console.log(data);
    // console.log(email + "-" + password);
  }
  async function categoryDelete(item) {
    loaderRun(true);
    const data = await accountService.deleteUserSetting(item.id, "category");
    //  console.log(data.status);
    loaderRun(false);
    if (data == null) setCategoryErrors("Unknown eror");
    else {
      if (data.status == "error") {
        setCategoryErrors(data.message);
      }
      if (data.status == "success") {
        setCategoryErrors(data.message);
        setFetch(true);
      }
    }
  }

  async function authorDelete(item) {
    loaderRun(true);
    const data = await accountService.deleteUserSetting(item.id, "author");
    //  console.log(data.status);
    loaderRun(false);
    if (data == null) setAuthorErrors("Unknown eror");
    else {
      if (data.status == "error") {
        setAuthorErrors(data.message);
      }
      if (data.status == "success") {
        setAuthorErrors(data.message);
        setFetch(true);
      }
    }

    //  console.log(data);
    // console.log(email + "-" + password);
  }

  return (
    <div className="container-fluid">
      <Container fluid>
        <Row>
          <Col className="accunt-setting">
            <h2>News Settings</h2>
            <p>News feed user preference settings.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <SettingForm
              name="source"
              label="Select Source"
              options={newsSources}
              // buttonDisable={(buttonDisable("e.target.value"))}
              onChange={(e) => setSource(e.target.value)}
              errors={sourceErrors}
              handleSubmit={handleSourceSubmit}
            />

            <ListBar
              data={userSources}
              onDelete={sourceDelete}
              title="News Source Preference"
            />
          </Col>

          <Col>
            <SettingForm
              name="source"
              label="Select Category"
              options={newsCategories}
              // buttonDisable={(buttonDisable("e.target.value"))}
              errors={categoryErrors}
              handleSubmit={handleCategorySubmit}
              onChange={(e) => setCategory(e.target.value)}
            />
            <ListBar
              data={userCategories}
              onDelete={categoryDelete}
              title="News Category Preference"
            />
          </Col>

          <Col>
            <SettingForm
              name="author"
              label="Select Author"
              options={newsAuthors}
              onChange={(e) => setAuthor(e.target.value)}
              // buttonDisable={(buttonDisable("e.target.value"))}
              errors={authorErrors}
              handleSubmit={handleAuthorSubmit}
            />
            <ListBar
              data={userAuthors}
              onDelete={authorDelete}
              title="Author Preference"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Account;
