import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker'

class Mapper extends Component {
    constructor (props){
        super(props)

        this.state = {
            center: [51.507, -0.0612],
            zoom:14,
            provider: 'osm',
            metaWheelZoom: true,
        }

    }

    handleMarkerClick = ({event, payload, anchor}) => {
        console.log(`Marker #${payload} clicked at: `, anchor);
    }

    render() {
        return(
            <Map center={this.center} zoom={this.zoom} width={900} height={900} metaWheelZoom={this.metaWheelZoom}>
                
            </Map>
        );
    }
}

export default Mapper;