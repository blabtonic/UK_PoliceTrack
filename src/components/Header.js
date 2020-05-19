import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import HomePage from './HomePage';
import Mapper from "./MapComponent";

class Header extends Component {
	render() {
		return (
			<Router>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand>DataTrack</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/violent-crime" eventKey="disabled" disabled>
							Violent Crimes
						</Nav.Link>
						<Nav.Link href="/search">Search and stop</Nav.Link>
					</Nav>
				</Navbar>
				<Switch>
					<Route path="/">{/* <HomePage></HomePage> */}</Route>
					<Route path="/search">
						{/*Need to make mapper move to search */}
						<Mapper></Mapper>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default Header;
