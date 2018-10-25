import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FlightContainer from './FlightContainer';
import reducers from '../reducers'
import { createStore } from 'redux'

it('renders flight container without crashing', () => {
  const store = createStore(reducers)
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><FlightContainer /></Provider>, div);
});
