import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadFlights } from '../actions/action';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import FlightComponent from '../components/FlightComponent';
import PaginationContainer from './PaginationContainer';
import FilterContainer from './FilterContainer';
import NavContainer from './NavContainer';
import NotifyContainer from './NotifyContainer';
import options from "../options.json"

class FlightContainer extends Component {
  async componentDidMount() {
    this.type = (this.props.match.path === "/flight-information/departures") || (this.props.match.path === '/') ? 'departures' : 'arrivals';
    if (this.type && this.props.location.search === "") {
      await this.props.loadFlights({type: this.type, page: 0, filters: this.props.filters});
    }
  }


  timeFormat = (value) => {
    if (!value) {
      return "";
    }
    const date = new Date(value);
    return ("0" + date.getUTCHours()).slice(-2) + ":" + ("0" + date.getUTCMinutes()).slice(-2);
  }

  filterTime = (filter, row) => {
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined && filter.value !== 'Select all' ? String(filter.value) === this.timeFormat(row[id]) : true
  }

  filterTimeSelect = (filter, onChange) => {
    return (
      <select className="w-100" name="country" onChange={event => onChange(event.target.value)} value={filter ? filter.value : 'All'}>
        {options.timeFilter.map((to) => {
          return <option key={to} value={to}>{to}</option>;
        })}
      </select>)
  }

  render() {
    return(
      <Fragment>
        <NavContainer />
        <div className='App'>
          <NotifyContainer />
          <h2>Flight Information</h2>
          <FilterContainer />
          <FlightComponent {...this.props}
            timeFormat={this.timeFormat}
            filterTimeSelect={this.filterTimeSelect}
            filterTime={this.filterTime}/>
          <PaginationContainer />
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  loadFlights
};

const mapStateToProps = (state) => {
  return {
    flights: state.flightDetails.flights,
    filters: state.flightDetails.filters
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightContainer);