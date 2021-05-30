import React from 'react';
import Mapper from './components/MapComponent';
import Form from './components/FormSubmit';
import Header from './components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Payment from './components/PayButton';
import About from './components/About';
import Help from './components/Help';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Header />
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/help" component={Help}></Route>
            {/* Within the home switch display the map and form components */}
            <Route path="/">
              <Row>
                <Col sm>
                  <Mapper />
                </Col>
                <Col sm>
                  <Form />
                </Col>
              </Row>
              <br />
              <Payment />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
