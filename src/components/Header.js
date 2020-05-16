import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
	render () {
  	return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">DataTrack</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#violent" eventKey="disabled" disabled>Violent Crimes</Nav.Link>
					<Nav.Link href="#search">Search and stop</Nav.Link>
				</Nav>
			</Navbar>
    );
    }
}


export default Header;