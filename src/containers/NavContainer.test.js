import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import NavContainer from './NavContainer';
import reducers from '../reducers'
import { createStore } from 'redux'

it('renders nav container without crashing', () => {
  const store = createStore(reducers)
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><NavContainer /></Provider>, div);
});
