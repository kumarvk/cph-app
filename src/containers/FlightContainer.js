import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadFlights } from '../actions/action';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import FlightComponent from '../components/FlightComponent';
import options from "../options.json"

class FlightContainer extends Component {
  constructor(props) {
    super(props);
    const type = (this.props.match.path === "/departures") || (this.props.match.path === '/') ? 'departures' : 'arrivals'
    this.props.loadFlights(type);
  }

  timeFormat = (value) => {
    const date = new Date(value);
    return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
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
      <div className='App'>
        <h2>Flight Information</h2>
        <FlightComponent {...this.props}
          timeFormat={this.timeFormat}
          filterTimeSelect={this.filterTimeSelect}
          filterTime={this.filterTime}/>
      </div>
    )
  }
}

const mapDispatchToProps = {
  loadFlights
};

const mapStateToProps = (state) => {
  return {
    flights: state.flightDetails.flights
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightContainer);