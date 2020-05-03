import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

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
                <div className="mb-3">
                    <h1>LAT:{this.state.latitude} x LNG:{this.state.longitude}</h1>
                    <p>enter lat</p>
                    <input type="number" step="0.0001" name="latitude" onChange={this.handleChange}/>
                    <p>enter lng</p>
                    <input type="number" step="0.0001" name="longitude" onChange={this.handleChange}/>
                    <input type="submit"/>
                </div>
            </Form>
        );
    }
}

export default FormSubmit;