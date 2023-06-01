//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./common/NavBar";
import Home from "./pages/Home";
import Footer from "./common/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <NavBar />
      <main className="container-fluid">
        <Home />
        {/* 
        <Account />
        <Login />
        <Home /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
