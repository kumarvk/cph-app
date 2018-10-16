import { LOAD_FLIGHT } from '../actionConstant';

export function loadFlights(filter) {
  return {
    type: LOAD_FLIGHT,
    filter
  }
}
