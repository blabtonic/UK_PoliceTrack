import React, { Component } from 'react';
import { Button, Container, Col, Form, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Loader from './Loader';
import Pagination from './Pagination';

function formatDate(date) {
  //the state data needs to be formatted to yyyy-MM
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }

  return [year, month].join('-');
}

class FormSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      street_stops: [],
      startDate: new Date(),
      isSubmitted: false,
      lists: [],
      listsPerPage: 0,
      currentPage: 1,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // send this
    let Latitude = this.state.latitude;
    let Longtiude = this.state.longitude;
    let startDate = formatDate(this.state.startDate);

    // params are the state variables
    axios
      .get(
        `https://data.police.uk/api/stops-street?lat=${Latitude}&lng=${Longtiude}&date=${startDate}`
      )
      .then((res) => {
        const street_stops = res.data;
        this.setState({ street_stops });
        console.log(street_stops);

        this.setState({ loading: true }); // get state from Loader component
        this.setState({ isSubmitted: true });
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        this.setState({ isSubmitted: false });
      });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };

  handleChangeDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleChange = (event) => {
    // THIS GETS THE INPUT NAME ATTRIBUTE FIELD!!
    let lat = event.target.name; // input name
    let lng = event.target.value; // value of the name attribute
    this.setState({ [lat]: lng }); // [name]: value
  };

  render() {
    const { listsPerPage } = this.state;
    const paginate = (pageNum) => this.setState({ currentPage: pageNum });
    return (
      <div>
        <Pagination
          listsPerPage={listsPerPage}
          paginate={paginate}
          totalList={this.state.street_stops.length}
        />
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formLatitude">
                <Form.Label>Enter Lat</Form.Label>
                <Form.Control
                  type="number"
                  step="0.0001"
                  name="latitude"
                  placeholder="Enter Latitude"
                  onChange={this.handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formLongitude">
                <Form.Label>Enter Lng</Form.Label>
                <Form.Control
                  type="number"
                  step="0.0001"
                  name="longitude"
                  placeholder="Enter Longitude"
                  onChange={this.handleChange}
                ></Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Group as={Col} controlId="formDate">
              <Form.Label>Enter Date</Form.Label>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChangeDate}
                name="startDate"
                dateFormat="yyyy-MM" //The output of the startDate state
                showMonthYearPicker
              />
            </Form.Group>
            {
              this.state.loading ? <Loader /> : null // do nothing when loading:false
            }
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {this.state.isSubmitted && (
            <ul>
              {this.state.street_stops.map((street_stops) => (
                <ListGroup>
                  <ListGroup.Item>
                    <h4>Gender:</h4>
                    {street_stops.gender}
                    <h4>Ethnicity:</h4>
                    {street_stops.self_defined_ethnicity}
                    <h4>Age Range:</h4>
                    {street_stops.age_range}
                    <h4>Outcome:</h4>
                    {street_stops.outcome}
                    <h4>Object of Search:</h4>
                    {street_stops.object_of_search}
                    <h4>Location:</h4>
                    <strong>Street:</strong> {street_stops.location.street['name']}
                    <br />
                    <strong>Latitude:</strong> {street_stops.location['latitude']}
                    <br />
                    <strong>Longitude:</strong> {street_stops.location['longitude']}
                  </ListGroup.Item>
                </ListGroup>
              ))}
            </ul>
          )}
        </Container>
      </div>
    );
  }
}

export default FormSubmit;
