import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Button from 'react-bootstrap/Button';

// need to find out how this works
const providers = {
    osm: (x,y,z) => {
        const s = String.fromCharCode(97 + (x + y + z) % 3);
        return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
    }
};

class Mapper extends Component {
    constructor (props){
        super(props)

        this.state = {
            center: [51.507, -0.0612],
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
        //used to set the actual state for the components under here 
        const { center, zoom, provider } = this.state;
        return(
            <div className="MapBoard">
                <Map provider={providers[provider]} center={center} zoom={zoom} width={900} height={900} zoomOnMouseWheel={true}>
                    <Marker anchor={[51.507, -0.0612]} payload={1} onClick={({ event, anchor, payload }) => {}}></Marker>
                </Map>
                <Button variant="primary" onClick={this.zoomIn}>+</Button>
                <Button variant="primary"onClick={this.zoomOut}>-</Button>
            </div>
        );
    }
}

export default Mapper;