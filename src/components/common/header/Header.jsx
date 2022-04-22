import React from "react";
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form, Container, Offcanvas } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './Header.css';

const Header = () => <main>
        <Navbar bg="transparent" className="desktop" expand="lg" fixed="top">
          <div className="offcanvas-header">  
            <button className="btn-close float-end"></button>
        </div>
          <Navbar.Brand as={Link} to="/" exact><img src="16.png" alt="brand-logo" width={'150px'} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/swapdata" ><li>Swap Data Capture</li></NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/custom-data" ><li>Custom Data Capture</li></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/solution" >
                Solution
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" >
                Pricing
              </Nav.Link>
              <Nav.Link as={Link} to="/about" >About</Nav.Link>          
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success" as={Link} to="/contact">Get Started</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar>
      <Container className="mobile">
      <Navbar bg="transparent"  fixed="top" collapseOnSelect expand="false" >
           <Navbar.Brand as={Link} to="/" exact><img src="16.png" alt="brand-logo" width={'150px'} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><img src="logo-new.png" alt="brand-logo" width={'250px'} /></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/swapdata" eventKey="1" ><li>Swap Data Capture</li></NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/custom-data" eventKey="2" ><li>Custom Data Capture</li></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/solution" eventKey="3" >
                Solution
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing" eventKey="4">
                Pricing
              </Nav.Link>
              <Nav.Link as={Link} to="/about" eventKey="5">About</Nav.Link>          
            </Nav>
            <Form className="d-flex">
              <Nav.Link className="outline-success" as={Link} to="/contact" eventKey="6">Get Started</Nav.Link>
            </Form>
            </Offcanvas.Body>
       </Navbar.Offcanvas>
      </Navbar>
      </Container>
</main>

export default Header;