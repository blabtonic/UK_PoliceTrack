import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Button from 'react-bootstrap/Button';

class Mapper extends Component {
    constructor (props){
        super(props)

        this.state = {
            center: [51.429, -2.825],
            zoom:5,
            provider: 'osm',
            metaWheelZoom: true,
        }

    }

    zoomIn = () => {
        this.setState({
            zoom: Math.min(this.state.zoom + 1, 20)
        });
    }

    zoomOut = () => {
        this.setState({
            zoom: Math.max(this.state.zoom - 1, 1)
        });
    }

    handleMarkerClick = ({event, payload, anchor}) => {
        console.log(`Marker #${payload} clicked at: `, anchor);
    }

    render() {
        //used to set the actual state
        const { center, zoom } = this.state;
        return(
            <div className="MapBoard">
                <Map center={center} zoom={zoom} width={900} height={900} zoomOnMouseWheel={true}>
                    <Marker anchor={[51.507, -0.0612]} payload={1} onClick={({ event, anchor, payload }) => {}}></Marker>
                </Map>
                <Button variant="primary" onClick={this.zoomIn}>+</Button>
                <Button variant="primary"onClick={this.zoomOut}>-</Button>
            </div>
        );
    }
}

export default Mapper;