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

const markers = {
    London: [[51.5071, -0.0612], 15],
    Birmingham:[[52.4788, -1.8966], 12],
    Glasgow:[[55.8590, -4.2624], 11],
    Liverpool:[[53.4095, -2.9903], 11],
    Manchester:[[53.4821, -2.2413], 12],
    Leeds:[[53.7993, -1.5498], 12],
    Belfast:[[54.5979, -5.9372], 11],
    Cardiff:[[51.4805, -3.1981], 13],
  }

class Mapper extends Component {
    constructor (props){
        super(props)

        this.state = {
            center: [51.507, -0.0612],
            zoom: 5,
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
                    {Object.keys(markers).map(key => (
                        <Marker key={key} anchor={markers[key][0]} payload={key}></Marker>
                    ))}
                    {/* <Marker anchor={[51.507, -0.0612]} payload={1} onClick={({ event, anchor, payload }) => {}}></Marker> */}
                </Map>
                <Button variant="primary" onClick={this.zoomIn}>+</Button>
                <Button variant="primary"onClick={this.zoomOut}>-</Button>
            </div>
        );
    }
}

export default Mapper;