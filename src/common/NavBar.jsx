import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//import logo from "./logo.png";
import logo from "../logo.png";

function NavBar() {
  return (
    <Navbar expand="lg" className="header">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} className="brand-logo" alt="Click News" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Button variant="outline-success btn-login">Login</Button>
          <Button variant="outline-success btn-register">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
