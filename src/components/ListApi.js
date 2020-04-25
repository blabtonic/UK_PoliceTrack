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
        axios.get('https://data.police.uk/api/stops-street?lat=51.507&lng=-0.0612&date=2019-08')
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
                        <h5>Gender:</h5>
                        <p>{street_stops.gender}</p>
                        <h5>Ethnicity:</h5>
                        <p>{street_stops.self_defined_ethnicity}</p>
                        <h5>Age Range:</h5>
                        <p>{street_stops.age_range}</p>
                        <h5>Outcome:</h5>
                        <p>{street_stops.outcome}</p>
                        <h5>Location:</h5>
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