import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

class PaginationTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 1,
    };
    this.nextClicked = this.nextClicked.bind(this);
    this.prevClicked = this.prevClicked.bind(this);
  }

  nextClicked(event) {
    this.setState({ list: this.state.list + 1 });
  }

  prevClicked(event) {
    this.setState({ list: this.state.list - 1 });
  }

  render() {
    let items = [];
    // the array length needs to be street_stops.length
    for (let number = 1; number <= 4; number++) {
      items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
    }
    return (
      <Pagination>
        <Pagination.First />
        <Pagination.Prev onClick={this.prevClicked} />
        <Pagination>{items}</Pagination>
        <Pagination.Next onClick={this.nextClicked} />
        <Pagination.Last />
      </Pagination>
    );
  }
}

export default PaginationTab;
