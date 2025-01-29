import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function StickyNavbar() {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar navbar-dark">
      <div className="container-fluid"> 
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default StickyNavbar;