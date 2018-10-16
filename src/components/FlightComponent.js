import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

const FlightComponent = (props) =>
  <ReactTable
    data={props.flights}
    showPagination={false}
    pageSize={100}
    defaultPageSize={15}
    className="-striped -highlight page-layout"
    filterable
    columns={[
      {
        Header: "Time",
        accessor: "exact_time",
        Cell: ({ value }) => props.timeFormat(value),
        filterMethod: (filter, row) => props.filterTime(filter, row),
        Filter: ({ filter, onChange }) => props.filterTimeSelect(filter, onChange),
      },
      {
        Header: "Airline",
        accessor: "airline",
        filterMethod: (filter, row) => {
          const id = filter.pivotId || filter.id
          return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true
        }
      },
      {
        Header: "Destination",
        accessor: "destination",
        filterMethod: (filter, row) => {
          const id = filter.pivotId || filter.id
          return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true
        }
      },
      {
        Header: "Status",
        accessor: "status",
        filterMethod: (filter, row) => {
          const id = filter.pivotId || filter.id
          return (row[id] !== undefined) && (row[id] !== null) ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : false
        }
      }
    ]}
  />

export default FlightComponent;