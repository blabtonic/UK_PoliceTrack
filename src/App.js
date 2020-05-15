import React from 'react';
import Mapper from './components/MapComponent';
import Form from './components/FormSubmit';
import { Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">DataTrack</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#violent" eventKey="disabled" disabled>Violent Crimes</Nav.Link>
        <Nav.Link href="#search">Search and stop</Nav.Link>
      </Nav>
    </Navbar>
    <br/>
    <Mapper></Mapper>
    <br/>
    <Form></Form>
    </div>
  );
}

export default App;
