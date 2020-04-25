import React, { Component } from 'react';
import axios from 'axios';

class ListApi extends Component {
    state = {
        street_stops: [],
    };

    async componentDidMount() {
        let location_data = 'https://data.police.uk/api/stops-street?lat=51.507&lng=-0.0612&date=2019-08';
        const requestOne = axios.get(location_data);
        
        //let longitude = {street_stops.location['longitude']};
        //let latitude = {street_stops.location['latitude']};

        // the params need to be dynamic
        axios.get('https://data.police.uk/api/stops-street?lat=51.507&lng=-0.074681&date=2019-08')
            .then(res => {
                const street_stops = res.data;
                this.setState({street_stops});
            }).catch(err => {
                console.log(err);
            });
        axios.all([requestOne])
            .then(
                axios.spread((...res) => {
                    const responseOne = res[0];
                    console.log(responseOne);
                })
            );
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