import React, { Component } from 'react';
import {Button, Col, Form } from 'react-bootstrap';
import MonthPicker from './MonthPicker';


class FormSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
        };
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // send this 
        let Latitude = this.state.latitude; 
        let Longtiude = this.state.longitude;
        alert('Got this data: '+ Latitude);
        alert('Got this data too: '+ Longtiude);
    };

    handleChange = (event) => {
        // THIS GETS THE INPUT NAME ATTRIBUTE FIELD!!
        let lat = event.target.name; // input name
        let lng = event.target.value; // value of the name attribute
        this.setState({[lat]: lng}); // [name]: value
    };

    render() {
        return (
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
                    <MonthPicker></MonthPicker>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        );
    }
}

export default FormSubmit;