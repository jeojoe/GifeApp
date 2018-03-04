import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { actionTypes } from './_constants';
import { AuthReducers } from './Auth';

// Reducers for global use
const globalReducers = {
  isLoading: (state = false, action) => {
    switch (action.type) {
      case actionTypes.START_LOADING: {
        return true;
      }
      case actionTypes.END_LOADING: {
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
  ...AuthReducers,
  ...globalReducers,
});

export default (initialState) => {
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducers, initialState, enhancer);

  return store;
};
