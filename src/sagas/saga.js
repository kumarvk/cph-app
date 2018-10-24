import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_FLIGHT,
  LOAD_FLIGHT_SUCCEED,
  LOAD_FLIGHT_FAILED,
  FILTER_FLIGHT,
  FILTER_FLIGHT_SUCCEED,
  FILTER_FLIGHT_FAILED } from '../actionConstant';

import { loadFlights, searchFlights } from '../apis/api';

function* getFlights (action) {
  try {
    const response = yield call(loadFlights, action);
    if(response.statusText === 'OK') {
      yield put({type: LOAD_FLIGHT_SUCCEED, data: response.data});
    }
  } catch (e) {
    yield put({
      type: LOAD_FLIGHT_FAILED,
      visible: true,
      color: 'danger',
      message: 'Something went wrong! Please try again.'
    });
  }
}

function* filterFlight (action) {
  try {
    const response = yield call(searchFlights, action);
    if(response.statusText === 'OK') {
      yield put({type: FILTER_FLIGHT_SUCCEED, data: response.data});
    }
  } catch (e) {
    yield put({
      type: FILTER_FLIGHT_FAILED,
      visible: true,
      color: 'danger',
      message: 'Something went wrong! Please try again.'
    });
  }
}

export const flightSaga = [
  takeLatest(LOAD_FLIGHT, getFlights),
  takeLatest(FILTER_FLIGHT, filterFlight)
]