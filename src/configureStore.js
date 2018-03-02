import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import * as authReducers from './Auth/redux/reducers';

const middlewares = [thunk, logger];
const reducers = combineReducers({
  ...authReducers,
});

export default (initialState) => {
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducers, initialState, enhancer);
  return store;
};
