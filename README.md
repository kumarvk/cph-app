# cph-app
- Show Copenhagen Airport's flights data and also apply filter for searching flights.

## How to set up the project?
* Created react application `npx create-react-app cph-app`

## Dependencies
* Used `@trendmicro/react-sidenav` for side navbar.
* Used `axios` for thired party api calling.
* Used `react-router-dom` for routing.
* Used `reactstrap` for UI creation.
* Used `redux-saga` for middelware.

## Application understanding
* Here we create a react application.
* Show departures and arrival flights details into tabular form.
* Need to add text filter which is apply on those fields.
  `destination` OR `airline` OR `status` OR `flight_no`
* Need to add pagination.

## Solution
* Just create a react repo.
* Added routing
  `/flight-information/departures` and `/flight-information/arrivals`
* Show flights data into tabular for through reactstrap table component.
* Added pagination through reactstrap pagination component but reactstrap pagination does not provide more option into pagination then customized this pagination.
* Created custom time picker.
* Added text, time and date filter.

## Installation

* Take clone of the repo:`git clone https://github.com/kumarvk/cph-app.git`

* Then `yarn install`

* Run `yarn start`

* Run test cases `yarn test`
