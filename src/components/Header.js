import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Help from './Help';

class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>DataTrack</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Nav.Link href="/violent-crime" eventKey="disabled" disabled>
              Violent Crimes
            </Nav.Link>
            <Nav.Link href="/search">Search and stop</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav>
        </Navbar>
        <Route path="/help" component={Help} />
        <Route path="/About" component={About} />
      </Router>
    );
  }
}

export default Header;
