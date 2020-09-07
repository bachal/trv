import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Navbar, Nav, Link } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

//create class for nav
class Navbars extends Component {

  render() {

    return (<div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top " id="navbar-example2">
        <Navbar.Brand href="#about">GARUDA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#home" className="text-white">Home</Nav.Link>
          <Nav.Link href="#vehicles" className="text-white">Vehicles</Nav.Link>
          <Nav.Link href="#about" className="text-white">About</Nav.Link>
          <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>)
  }
}

export default Navbars;