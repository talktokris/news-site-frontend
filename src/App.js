import React, { useState, useEffect } from "react";
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

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    restoreUser();
  }, []);

  const restoreUser = async () => {
    const user = await auth.getCurrentUser();
    if (user) setUser(user);
  };

  return (
    <>
      <NavBar user={user} />
      <main className="container-fluid">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Navigate to="home" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
