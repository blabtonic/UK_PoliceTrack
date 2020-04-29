import React, { Component } from 'react';
import axios from 'axios';

class ListApi extends Component {
    state = {
        street_stops: [],
    };

    async componentDidMount() {
        //let longitude = {street_stops.location['longitude']};
        //let latitude = {street_stops.location['latitude']};

        /**
         * temp dynamic params for data
         * this needs to be the submitted form data how to get two components
         * talking to each other?
         * start with month picker component
         * 
         */

        let Latitude = 53.7993; 
        let Longtiude = -1.5498;
        let startDate = '2019-04';
        // https://data.police.uk/api/stops-street?lat=52.629729&lng=-1.131592&date=2018-06
        axios.get(`https://data.police.uk/api/stops-street?lat=${Latitude}&lng=${Longtiude}&date=${startDate}`)
            .then(res => {
                const street_stops = res.data;
                this.setState({street_stops});
            }).catch(err => {
                console.log(err);
            });
    };

    render() {
        return(
            <ul>
                {this.state.street_stops.map(street_stops => 
                    <div>
                        <h4>Gender:</h4>
                        <p>{street_stops.gender}</p>
                        <h4>Ethnicity:</h4>
                        <p>{street_stops.self_defined_ethnicity}</p>
                        <h4>Age Range:</h4>
                        <p>{street_stops.age_range}</p>
                        <h4>Outcome:</h4>
                        <p>{street_stops.outcome}</p>
                        <h4>Location:</h4>
                        <p>Street: {street_stops.location.street['name']}</p>
                        <p>Latitude: {street_stops.location['latitude']}</p>
                        <p>Longtiude: {street_stops.location['longitude']}</p>
                        <hr></hr>
                    </div>
                )}
            </ul>
        )
    }
}

export default ListApi;