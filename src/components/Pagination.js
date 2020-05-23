import React, { Component } from 'react';

class PaginationTab extends Component {
	// Unable to load state from here onto Form submit

	render() {
		const { listsPerPage, paginate, totalLists } = this.props;
		const pageNumbers = [];

		for (
			let number = 1;
			number <= Math.ceil(totalLists / listsPerPage);
			number++
		) {
			pageNumbers.push(number);
		}
		return (
			<nav>
				<ul className="pagination justify-content-center">
					<li className="page-item">
						<a className="page-link" href="#">
							Previous
						</a>
					</li>
					{pageNumbers.map((num) => (
						<li className="page-item" key={num}>
							<a onClick={() => paginate(num)} className="page-link" href="#">
								{num}
							</a>
						</li>
					))}
					<li className="page-item">
						<a className="page-link" href="#">
							Next
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default PaginationTab;
