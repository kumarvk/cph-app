import { LOAD_FLIGHT, FILTER_FLIGHT, DISMISS_NOTIFICATION } from '../actionConstant';

export function loadFlights(data) {
  return {
    type: LOAD_FLIGHT,
    data
  }
}

export function filterFlights(data) {
  return {
    type: FILTER_FLIGHT,
    data
  }
}

export function dismissNotification() {
  return {
    type: DISMISS_NOTIFICATION
  }
}
