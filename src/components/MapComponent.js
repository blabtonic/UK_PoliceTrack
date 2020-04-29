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
    /* lat, long, zoom level */
    London: [[51.5071, -0.0612], 12],
    Birmingham:[[52.4788, -1.8966], 12],
    Glasgow:[[55.8590, -4.2624], 11],
    Liverpool:[[53.4095, -2.9903], 11],
    Manchester:[[53.4821, -2.2413], 12],
    Leeds:[[53.7993, -1.5498], 12],
    Edinburgh:[[55.9557, -3.1970, 12]],
    Cardiff:[[51.4805, -3.1981], 13],
};

const lat2tile = (lat, zoom) => (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom);
const lng2tile = (lon, zoom) => (lon + 180) / 360 * Math.pow(2, zoom);

class Mapper extends Component {
    constructor (props){
        super(props)

        this.state = {
            center: [51.507, -0.0622],
            zoom: 5,
            animate: true,
            animating: false,
            provider: 'osm',
            metaWheelZoom: true,
        }
    };

    zoomIn = () => {
        this.setState({
            zoom: Math.min(this.state.zoom + 1, 20)
        });
    };

    zoomOut = () => {
        this.setState({
            zoom: Math.max(this.state.zoom - 1, 1)
        });
    };

    handleBoundsChange = ({center , zoom, bounds, initial }) => {
        if (initial) {
            console.log('Retrieved initial bounds: ', bounds);
        }
        this.setState({center, zoom})
    }

    handleClick = ({ event, latLng, pixel }) => { 
        console.log('Map clicked', latLng, pixel);       
    }

    handleAnimationStart = () => {
        this.setState({ animating: true });
    };

    handleAnimationStop = () => {
        this.setState({ animating: false });
    };

    handleMarkerClick = ({event, payload, anchor}) => {
        console.log(`Marker #${payload} clicked at: `, anchor);
    };

    render() {
        //used to set the actual state for the components under here 
        const { center, zoom, provider, animating, animate } = this.state;
        let mapLatitude = Math.round(center[0] * 10000) / 10000;
        let mapLongitude = Math.round(center[1] * 10000) / 10000;
        /**
         * mapLatitude = {Math.round(center[0] * 10000) / 10000}
         * mapLongitude = {Math.round(center[1] * 10000) / 10000}
         */
        return(
            <div className="MapBoard">
                <Map center={center}
                provider={providers[provider]}  
                onBoundsChanged={this.handleBoundsChange}
                onAnimationStart={this.handleAnimationStart} 
                onAnimationStop={this.handleAnimationStop} 
                animate={animate} 
                zoom={zoom} width={700} height={500} 
                zoomOnMouseWheel={true}>

                {Object.keys(markers).map(key => (
                    <Marker key={key} anchor={markers[key][0]} payload={key}></Marker>
                ))}
                </Map>
                <Button variant="primary" onClick={this.zoomIn}>+</Button>
                <Button variant="primary"onClick={this.zoomOut}>-</Button>
                {/* active lat and long might make better*/}
                <div>
                    {mapLatitude} ({lat2tile(center[0], zoom)});
                    {' x '}
                    {mapLongitude} ({lng2tile(center[1], zoom)});
                    {'zoom: '}
                    {Math.round(zoom * 100) / 100}
                    {' - '}
                    {animating ? 'animating' : 'stopped'}
                </div>  
            </div>
        );
    }
}

export default Mapper;