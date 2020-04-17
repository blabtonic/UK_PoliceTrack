import React, { Component } from 'react';
import axios from 'axios';

class ListApi extends Component {
    state = {
        forces: [],
    };

    componentDidMount(){
        axios.get('https://data.police.uk/api/forces')
            .then(res => {
                const forces = res.data;
                this.setState({ forces });
            });
    };

    render(){
        return(
            <ul>
                {this.state.forces.map(forces => <li>{forces.name}</li>)}
            </ul>
        )
    }
}

export default ListApi;