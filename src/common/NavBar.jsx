import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, Link } from "react-router-dom";

//import logo from "./logo.png";
import logo from "../logo.png";

function NavBar({ user }) {
  const { name, email } = user;
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="header">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/home")}>
          <img src={logo} className="brand-logo" alt="Click News" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-end"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button
              variant="outline-success btn-login"
              onClick={() => navigate("/home", { replace: true })}
            >
              Home
            </Button>
          </Nav>
          {!user ? (
            <>
              <Button
                variant="outline-success btn-login"
                onClick={() => navigate("/login", { replace: true })}
              >
                Login
              </Button>
              <Button
                variant="outline-success btn-register"
                onClick={() => navigate("/register", { replace: true })}
              >
                Register
              </Button>
            </>
          ) : (
            <NavDropdown
              title={name}
              className="btn-account"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item
                onClick={() => navigate("/account", { replace: true })}
              >
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => navigate("/logout", { replace: true })}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
