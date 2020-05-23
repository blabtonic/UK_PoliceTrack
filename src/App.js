import React from 'react';
import Mapper from './components/MapComponent';
import Form from './components/FormSubmit';
import Header from './components/Header';
import Pagination from './components/Pagination';
import { Container, Row, Col } from 'react-bootstrap';

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
			</Container>
		</div>
	);
}

export default App;
