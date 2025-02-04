import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="md" className="fixed-top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand>Aidan DeGooyer</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resume">
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://github.com/aidandegooyer"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <i className="bi bi-box-arrow-up-right"></i>
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/aidandegooyer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <i className="bi bi-box-arrow-up-right"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
