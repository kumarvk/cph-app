import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import NotifyContainer from './NotifyContainer';
import reducers from '../reducers'
import { createStore } from 'redux'

it('renders notify container without crashing', () => {
  const store = createStore(reducers)
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><NotifyContainer /></Provider>, div);
});
