import React from 'react';
import { Table } from 'reactstrap';

const FlightComponent = (props) =>
  <div className="table-responsive set-td-width">
  <Table striped>
    <thead>
      <tr>
        <th>Time</th>
        <th>Expected</th>
        <th>Airline</th>
        <th>Destination</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {props.flights && props.flights.map(flight => (
        <tr key={flight.id}>
          <td>{props.timeFormat(flight.exact_time)}</td>
          <td>{props.timeFormat(flight.expected_time)}</td>
          <td>{flight.airline}</td>
          <td>{flight.destination}</td>
          <td>{flight.status}</td>
        </tr>
      ))}
    </tbody>
  </Table>
  </div>

export default FlightComponent;