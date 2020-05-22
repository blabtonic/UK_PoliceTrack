import React, { Component } from "react";
import { Pagination } from "react-bootstrap/Pagination";

let active = 3;
let items = [];

for (let number = 1; number <= 8; number++) {
	items.push(
		<Pagination.Item key={number} active={number === active}>
			{number}
		</Pagination.Item>
	);
}

class PaginationTab extends Component {
	render() {
		return (
			<div>
				<Pagination>{items}</Pagination>
			</div>
		);
	}
}

export default PaginationTab;
