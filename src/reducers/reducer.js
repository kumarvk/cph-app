import {
  LOAD_FLIGHT_SUCCEED
} from '../actionConstant';

const initialState = {
  flights: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOAD_FLIGHT_SUCCEED:
      return {
        ...state,
        flights: action.flights
      }
    default:
      return state;
  }
}