import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { create } from 'domain';

export const initStore = (initialState = {}) =>
  createStore(reducer, initialState, applyMiddleware(thunk));