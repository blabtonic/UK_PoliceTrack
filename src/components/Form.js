import React, { Component } from 'react';


class Form extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="latitude">Enter Latitude</label>
                <input id="latitude" type="text"/>

                <label htmlFor="Longtiude">Enter Longtiude</label>
                <input id="Longtiude" type="text"/>

                <button>Send</button>
            </form>
        );
    }
}

export default Form;