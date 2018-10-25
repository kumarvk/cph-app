import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FilterContainer from './FilterContainer';
import reducers from '../reducers'
import { createStore } from 'redux'

it('renders filter container without crashing', () => {
  const store = createStore(reducers)
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><FilterContainer /></Provider>, div);
});
