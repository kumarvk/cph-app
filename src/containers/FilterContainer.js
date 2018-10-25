import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { filterFlights } from '../actions/action';
import timeOptions from "../options.json";
import moment from "moment";

class FilterContainer extends Component {
  state = {
    dropdownOpen: false,
    text: '',
    time: 'Time',
    date: moment(),
    focused: null
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleChange = (e) => {
    switch(e.target.name) {
      case 'text':
        this.setState({
          text: e.target.value
        });
        return;
      case 'time':
        this.setState({
          time: e.target.innerText
        });
        return;
      default:
        return;
    }
  }

  handleDateChange = (date) => {
    this.setState({
      date: date
    });
  }

  onFormSubmit = async (e) => {
    e.preventDefault();
    const {text, time, date} = this.state;
    const {type} = this.props;
    await this.props.filterFlights({filters: {text, time, date}, type});
  }

  render() {
    return(
      <Form className="align-center" onSubmit={this.onFormSubmit} inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" name="text" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <DatePicker
            selected={this.state.date}
            className="form-control"
            minDate={moment()}
            dateFormat="DD-MM-YYYY"
            onChange={this.handleDateChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {this.state.time}
            </DropdownToggle>
            <DropdownMenu className="select-height">
              {timeOptions.timeFilter.map(time => (
                <DropdownItem key={time} name="time" onClick={this.handleChange}>{time}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Button>Search</Button>
        </FormGroup>
      </Form>
    )
  }
}

const mapDispatchToProps = {
  filterFlights
};

const mapStateToProps = (state) => {
  return {
    flights: state.flightDetails.flights,
    type: state.flightDetails.type
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);