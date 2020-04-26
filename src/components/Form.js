import React, { Component } from 'react';


class Form extends Component {
    constructor() {
        super();
        this.state = {
            latitude: '',
            longtiude: '',
        };
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { latitude, longtiude } = this.state;

        // not showing data
        alert(`The data submitted: \n
                latitude: ${latitude} \n
                longtitude: ${longtiude}`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="latitude">Enter Latitude</label>
                <input id="latitude" type="text" value={this.props.latitude} onChange={this.props.handleChange}/>

                <label htmlFor="Longtiude">Enter Longtiude</label>
                <input id="Longtiude" type="text"value={this.props.longtiude} onChange={this.props.handleChange}/>

                <button>Send</button>
            </form>
        );
    }
}

export default Form;