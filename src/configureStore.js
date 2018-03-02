import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as types from './_constants/actionTypes';

import * as authReducers from './Auth/redux/reducers';

// Reducers for global use
const globalReducers = {
  isLoading: (state = false, action) => {
    switch (action.type) {
      case types.START_LOADING: {
        return true;
      }
      case types.END_LOADING: {
        return false;
      }
      default: {
        return state;
      }
    }
  },
};

const middlewares = [thunk, logger];
const reducers = combineReducers({
  ...authReducers,
  ...globalReducers,
});

export default (initialState) => {
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducers, initialState, enhancer);

  return store;
};
