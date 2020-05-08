import React, { Component } from 'react';
import { Button, Col, Form, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Loader from './Loader';

function formatDate(date) {
    //the state data needs to be formatted to yyyy-MM
    var d = new Date(date),
        month = '' + (d.getMonth() +1),
        year = d.getFullYear();
    
    if (month.length < 2){
        month = '0' + month;
    }

    return [year, month].join('-');
};

class FormSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
            street_stops: [],
            startDate: new Date(),
            isSubmitted: false,
        };
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // send this 
        let Latitude = this.state.latitude; 
        let Longtiude = this.state.longitude;
        let startDate = formatDate(this.state.startDate);
        
        // params are the state variables
        axios.get(`https://data.police.uk/api/stops-street?lat=${Latitude}&lng=${Longtiude}&date=${startDate}`)
            .then(res => {
                const street_stops = res.data;
                this.setState({street_stops});
                console.log(street_stops);
            }).catch(err => {
                console.log(err);
            });
        
        this.setState({isSubmitted: true})
    };

    handleChangeDate = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleChange = (event) => {
        // THIS GETS THE INPUT NAME ATTRIBUTE FIELD!!
        let lat = event.target.name; // input name
        let lng = event.target.value; // value of the name attribute
        this.setState({[lat]: lng}); // [name]: value
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h1>LAT:{this.state.latitude} x LNG:{this.state.longitude}</h1>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formLatitude">
                            <Form.Label>Enter Lat</Form.Label>
                            <Form.Control type="number" step="0.0001" name="latitude" placeholder="Enter Latitude" onChange={this.handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formLongitude">
                            <Form.Label>Enter Lng</Form.Label>
                            <Form.Control type="number" step="0.0001" name="longitude" placeholder="Enter Longitude" onChange={this.handleChange}></Form.Control>
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
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
                {this.state.isSubmitted &&
                    <ul>
                        <Loader/>
                        {this.state.street_stops.map(street_stops => 
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
                                    <h4>Location:</h4>
                                    <strong>Street:</strong> {street_stops.location.street['name']}<br/>
                                    <strong>Latitude:</strong> {street_stops.location['latitude']}<br/>
                                    <strong>Longitude:</strong> {street_stops.location['longitude']}
                                </ListGroup.Item>
                            </ListGroup>
                        )}
                    </ul>
                }
            </div>
        );
    }
}

export default FormSubmit;