import { Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => (
  <main>
    <Navbar bg="transparent" className="desktop" expand="lg" fixed="top">
      <div className="offcanvas-header">
        <button className="btn-close float-end"></button>
      </div>
      <Navbar.Brand as={Link} to="/" >
        <img src="logo-black.png" alt="brand-logo" width={"150px"} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/startcampaign">
            Start
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Button variant="outline-success" as={Link} to="/">
            Connect Wallet
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    <Container className="mobile">
      <Navbar bg="transparent" fixed="top" collapseOnSelect expand="false">
        <Navbar.Brand as={Link} to="/">
          <img src="logo-black.png" alt="brand-logo" width={"150px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src="logo-black.png" alt="brand-logo" width={"250px"} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/startcampaign" eventKey="3">
                Start
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" eventKey="4">
                Team
              </Nav.Link>
              <Nav.Link as={Link} to="/about" eventKey="5">
                About Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Nav.Link
                className="outline-success"
                as={Link}
                to="/"
                eventKey="6"
              >
                Connect Wallet
              </Nav.Link>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </Container>
  </main>
);
export default Header;
