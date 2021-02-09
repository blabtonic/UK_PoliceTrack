import React from 'react';
import Mapper from './components/MapComponent';
import Form from './components/FormSubmit';
import Header from './components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Payment from './components/PayButton';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Row>
          <Col sm>
            <Mapper />
          </Col>
          <Col sm>
            <Form />
          </Col>
        </Row>
        <br />
        <p>Only Bitcoin Cash(BCH) not Bitcoin(BTC)</p>
        <Payment />
      </Container>
    </div>
  );
}

export default App;
