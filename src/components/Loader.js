import React, { Component } from 'react';
import SquareLoader from 'react-spinners/SquareLoader';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div className="loading-list">
                <SquareLoader
                    size={120}
                    color={"#1b4080"}
                    loading={this.state.loading}
                ></SquareLoader>
            </div>
        );
    }
}

export default Loader;