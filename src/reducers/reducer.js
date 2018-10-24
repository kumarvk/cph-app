import {
  LOAD_FLIGHT_SUCCEED,
  LOAD_FLIGHT_FAILED,
  LOAD_FLIGHT,
  FILTER_FLIGHT,
  FILTER_FLIGHT_SUCCEED,
  FILTER_FLIGHT_FAILED,
  DISMISS_NOTIFICATION
} from '../actionConstant';

const initialState = {
  flights: [],
  totalCount: 0,
  type: null,
  filters: {},
  currentPage: 0,
  notification: {visible: false, color: "info", message: ""}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOAD_FLIGHT:
      return {
        ...state,
        error: false,
        type: action.data.type,
        currentPage: action.data.currentPage
      }
    case LOAD_FLIGHT_SUCCEED:
    case FILTER_FLIGHT_SUCCEED:
    console.log(action.data.total_count);
      return {
        ...state,
        error: false,
        flights: action.data.flights,
        totalCount: action.data.total_count
      }
    case FILTER_FLIGHT:
      return {
        ...state,
        error: false,
        type: action.data.type,
        currentPage: action.data.currentPage,
        filters: action.data.filters
      }
    case DISMISS_NOTIFICATION:
      return {
        ...state,
        notification: {
          ...state.notification,
          visible: false,
          color: '',
          message: ''
        }
      }
    case FILTER_FLIGHT_FAILED:
    case LOAD_FLIGHT_FAILED:
      return {
        ...state,
        notification: {
          ...state.notification,
          visible: action.visible,
          color: action.color,
          message: action.message
        }
      }
    default:
      return state;
  }
}