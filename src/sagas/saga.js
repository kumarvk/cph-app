import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_FLIGHT,
  LOAD_FLIGHT_SUCCEED } from '../actionConstant';

import { loadFlights } from '../apis/api';

function* getFlights (action) {
  const response = yield call(loadFlights, action);
  if(response.statusText === 'OK') {
    yield put({type: LOAD_FLIGHT_SUCCEED, flights: response.data});
  }
}

export const flightSaga = [
  takeLatest(LOAD_FLIGHT, getFlights),
]