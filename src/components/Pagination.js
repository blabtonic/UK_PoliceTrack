import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

class PaginationTab extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
    this.nextClicked = this.nextClicked.bind(this);
    this.prevClicked = this.prevClicked.bind(this);
  }

  nextClicked(event) {
    this.setState({ value: this.state.value + 1 });
  }

  prevClicked(event) {
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return (
      <Pagination>
        <Pagination.First />
        <Pagination.Prev onClick={this.prevClicked} />
        <Pagination.Item active>{this.state.value}</Pagination.Item>
        <Pagination.Next onClick={this.nextClicked} />
        <Pagination.Last />
      </Pagination>
    );
  }
}

export default PaginationTab;
