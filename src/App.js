import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import NavContainer from './containers/NavContainer';
import FlightContainer from './containers/FlightContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavContainer />
        <Router>
          <div>
            <Route exact path="/" component={FlightContainer} />
            <Route path="/departures" component={FlightContainer} />
            <Route path="/arrivals" component={FlightContainer} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
