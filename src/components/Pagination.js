import React, { Component } from 'react';

class PaginationTab extends Component {
  // Unable to load state from here onto Form submit

  render() {
    const { listsPerPage, paginate, totalLists, nextPage, prevPage } = this.props;
    const pageNumbers = [];

    for (let number = 1; number <= Math.ceil(totalLists / listsPerPage); number++) {
      pageNumbers.push(number);
    }
    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" href="#" onClick={() => prevPage()}>
              Previous
            </button>
          </li>
          {pageNumbers.map((num) => (
            <li className="page-item" key={num}>
              <button onClick={() => paginate(num)} className="page-link" href="#">
                {num}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link" href="#" onClick={() => nextPage()}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default PaginationTab;
