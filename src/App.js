import React, { useState, useEffect } from "react";
import { SpinnerRoundOutlined } from "spinners-react";
//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./common/NavBar";
import Home from "./pages/Home";
import Footer from "./common/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import auth from "./services/authService";
import Logout from "./components/Logout";
import Loader from "./pages/Loader";

function App() {
  const [user, setUser] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    restoreUser();
  }, []);

  const restoreUser = async () => {
    const user = await auth.getCurrentUser();
    if (user) setUser(user);

    //console.log(user);
  };
  function loaderRun(value) {
    setShowLoader(value);
  }

  return (
    <>
      {showLoader && <Loader />}
      <NavBar user={user} />
      <main className="container-fluid">
        <Routes>
          <Route path="/home" element={<Home loaderRun={loaderRun} />} />
          <Route path="/login" element={<Login loaderRun={loaderRun} />} />
          <Route
            path="/register"
            element={<Register loaderRun={loaderRun} />}
          />
          <Route
            path="/account"
            element={<Account user={user} loaderRun={loaderRun} />}
          />
          <Route path="/logout" element={<Logout loaderRun={loaderRun} />} />
          <Route path="/" element={<Navigate to="home" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
