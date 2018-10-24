import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import FlightContainer from './containers/FlightContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <Route exact path="/flight-information/departures" component={FlightContainer} />
            <Route exact path="/flight-information/arrivals" component={FlightContainer} />
            <Route exact path="/" render={() => (
              <Redirect to="/flight-information/departures"/>
            )}/>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
