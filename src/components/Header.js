import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>DataTrack</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/violent-crime" eventKey="disabled" disabled>
            Violent Crimes
          </Nav.Link>
          <Nav.Link href="/search">Search and stop</Nav.Link>
          <Nav.Link href="/help">Help</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
