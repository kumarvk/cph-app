import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PaginationContainer from './PaginationContainer';
import reducers from '../reducers'
import { createStore } from 'redux'

it('renders pagination container without crashing', () => {
  const store = createStore(reducers)
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><PaginationContainer /></Provider>, div);
});
