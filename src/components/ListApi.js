import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class ListApi extends Component {
    state = {
        street_stops: [],
    };

    async componentDidMount() {
        //let longitude = {street_stops.location['longitude']};
        //let latitude = {street_stops.location['latitude']};

        /**
         * await api.get(`https://api.twitch.tv/helix/streams?game_id${location.state.gameID}`);
         * (`https://data.police.uk/api/stops-street?lat=${Latitude}&lng=${Longtiude}&date=2019-06`)
         */
        // temp dynamic params for data
        let Latitude = 53.7993; 
        let Longtiude = -1.5498;
        // the params need to be dynamic
        axios.get(`https://data.police.uk/api/stops-street?lat=${Latitude}&lng=${Longtiude}&date=2019-06`)
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