import * as types from '../_constants/actionTypes';

export function startLoading() {
  return {
    type: types.START_LOADING,
    isLoading: true,
  };
}

export function endLoading() {
  return {
    type: types.END_LOADING,
    isLoading: false,
  };
}
