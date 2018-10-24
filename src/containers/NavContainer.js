import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class NavContainer extends Component {
  toggle = (tab) => {
    const filterType = tab === 'departures' ? '/flight-information/departures' : '/flight-information/arrivals';
    window.location.href = filterType;
  }

  render() {
    return(
      <div className="sidebar-left">
      <SideNav
        onSelect={this.toggle}
      >
      <SideNav.Toggle />
        <SideNav.Nav defaultSelected={this.props.type}>
          <NavItem eventKey="departures">
            <NavIcon>
              <i className="fa fa-plane" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Departures
            </NavText>
          </NavItem>
          <NavItem eventKey="arrivals">
            <NavIcon>
              <i className="fa fa-fighter-jet" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Arrivals
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.flightDetails.type
  }
}

export default connect(mapStateToProps, null)(NavContainer);
