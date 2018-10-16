import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class NavContainer extends Component {
  toggle = (tab) => {
    const filterType = tab === '1' ? '/departures' : '/arrivals';
    window.location.href = filterType;
  }

  render() {
    return(
      <SideNav
        onSelect={(selected) => this.toggle(selected)}
      >
      <SideNav.Toggle />
        <SideNav.Nav defaultSelected="1">
          <NavItem eventKey="1">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Departures
            </NavText>
          </NavItem>
          <NavItem eventKey="2">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Arrivals
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    )
  }
}

export default NavContainer;