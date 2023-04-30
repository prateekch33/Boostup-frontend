import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Boostup Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/" style={{ color: "#000" }}>
                Home
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/login" style={{ color: "#000" }}>
                Admin
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
