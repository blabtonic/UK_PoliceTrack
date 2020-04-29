import React, { Component } from 'react';


class Form extends Component {
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
        alert('Got this data: '+ this.state.latitude);
        alert('Got this data too: '+ this.state.longitude);
    };

    handleChange = (event) => {
        // THIS GETS THE INPUT NAME ATTRIBUTE FIELD!!
        let lat = event.target.name; // input name
        let lng = event.target.value; // value of the name attribute
        this.setState({[lat]: lng}); // [name]: value
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>LAT:{this.state.latitude} x LNG:{this.state.longitude}</h1>
                <p>enter lat</p>
                <input type="number" step="0.0001" name="latitude" onChange={this.handleChange}/>
                <p>enter lng</p>
                <input type="number" step="0.0001" name="longitude" onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        );
    }
}

export default Form;