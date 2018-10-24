import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { filterFlights } from '../actions/action';

class PaginationContainer extends Component {
  state = {
    activePage: 1,
    firstPaginationNumber: 1,
    pageSize: 5,
    maxPaginationNumbers: 5
  }

  data = (page) => {
    const {type, filters} = this.props;
    return {type, page, filters}
  };

  getNumberOfPages = () => {
    const auxPages = this.props.totalCount / this.state.pageSize;
    let pages = parseInt(auxPages, 10);
    pages += pages !== auxPages ? 1 : 0;
    return pages;
  }

  paginationItems = () => {
    let items = [];
    this.lastPaginationNumber = this.getLastPaginationNumber();
    items.push(this.firstOrLastPagItem("First", 1));
    items.push(this.nextOrPreviousPagItem("Previous", 1, 'l'));
    for (var i = this.state.firstPaginationNumber; i <= this.lastPaginationNumber; i++) {
      items.push(this.numberedPagItem(i));
    }
    items.push(this.nextOrPreviousPagItem("Next", this.pages, 'r'));
    items.push(this.firstOrLastPagItem("Last", this.pages));
    return items;
  }

  getLastPaginationNumber = () => {
    const minNumberPages = Math.min(this.pages, this.state.maxPaginationNumbers);
    return this.state.firstPaginationNumber + minNumberPages - 1;
  }

  numberedPagItem = (i) => {
    return (
      <PaginationItem key={i} id={`pagebutton${i}`} active={this.state.activePage === i} onClick={this.handleClick}>
        <PaginationLink style={{ minWidth: '43.5px' }}>
          {i}
        </PaginationLink>
      </PaginationItem>
    )
  }

  nextOrPreviousPagItem = (name, page, direction) => {
    return (
      <PaginationItem key={name} disabled={this.state.activePage === page} onClick={(e) => this.handleSelectNextOrPrevious(direction)}>
        <PaginationLink>
          {name}
        </PaginationLink>
      </PaginationItem>
    )
  }

  firstOrLastPagItem = (name, page) => {
    let event = {
      currentTarget: {
        getAttribute: () => `pagebutton${page}`
      }
    }
    return (
      <PaginationItem key={name} disabled={this.state.activePage === page} onClick={() => this.handleClick(event)}>
        <PaginationLink>
          {name}
        </PaginationLink>
      </PaginationItem>
    )
  }

  handleClick = (event) => {
    const newActivePage = parseInt(event.currentTarget.getAttribute("id").split("pagebutton").pop(), 10);
    this.setState({
        activePage: newActivePage
    })
    this.props.filterFlights(this.data(newActivePage));
    this.handlePaginationNumber(newActivePage);
  }

  handleSelectNextOrPrevious = (direction) => {
    const activePage = this.state.activePage;
    if ((direction === 'r' && activePage === this.pages) || (direction === 'l' && activePage === 1))
        return;

    const newActivePage = direction === 'r' ? activePage + 1 : activePage - 1;
    this.setState({
        activePage: newActivePage
    })
    this.props.filterFlights(this.data(newActivePage));
    this.handlePaginationNumber(newActivePage);
  }

  handlePaginationNumber = (activePage) => {
    const distance = Math.floor(this.state.maxPaginationNumbers / 2);
    const newFPNumber = activePage - distance;
    const newLPNumber = activePage + distance;
    if (newFPNumber <= 1) {
      if (this.state.firstPaginationNumber !== 1) {
        this.setState({
          firstPaginationNumber: 1
        })
      }
    } else if (newLPNumber <= this.pages) {
      this.setState({
        firstPaginationNumber: newFPNumber
      })
    } else if (newLPNumber >= this.pages) {
      this.setState({
        firstPaginationNumber: this.pages - this.state.maxPaginationNumbers + 1
      })
    }
  }

  render() {
    this.pages = this.getNumberOfPages();
    return (
      <div className="align-center">
        <Pagination>
          {this.paginationItems()}
        </Pagination>
      </div>
    )
  }
}

const mapDispatchToProps = {
  filterFlights
};

const mapStateToProps = (state) => {
  return {
    totalCount: state.flightDetails.totalCount,
    filters: state.flightDetails.filters,
    type: state.flightDetails.type,
    currentPage: state.flightDetails.currentPage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);