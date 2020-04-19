import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class ControlPanel extends Component {
    zoomIn = () => {
        this.setState({
            zoom: Math.max(this.state.zoom + 1, 16)
        });
    }

    zoomOut = () => {
        this.setState({
            zoom: Math.max(this.state.zoom - 1, 1)
        });
    };

    render() {
        return (
            <div className="ControlBoard">
                <Button variant="primary" onClick={this.zoomIn}>Zoom In</Button>
                <Button variant="primary" onClick={this.zoomOut}>Zoom Out</Button>
            </div>
        );
    }
}

export default ControlPanel;