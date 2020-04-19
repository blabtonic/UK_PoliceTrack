import React, { Component } from 'react';
import axios from 'axios';

class ListApi extends Component {
    state = {
        street_stops: [],
    };

    async componentDidMount() {
        // the params need to be dynamic
        axios.get('https://data.police.uk/api/stops-street?lat=51.507&lng=-0.0612&date=2019-08')
            .then(res => {
                const street_stops = res.data;
                this.setState({street_stops});
            }).catch(err => {
                console.log(err);
            });
    };

    render() {
        //location object needs to be map how to do it?
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
                        <hr></hr>
                    </div>
                )}
            </ul>
        )
    }
}

export default ListApi;