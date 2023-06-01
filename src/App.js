//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./common/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <main className="container-fluid">
        <Home />
      </main>
    </>
  );
}

export default App;
