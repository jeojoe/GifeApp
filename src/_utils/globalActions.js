import { actionTypes } from '../_constants';

export function startLoading() {
  console.log('start loading!!');
  return {
    type: actionTypes.START_LOADING,
    isLoading: true,
  };
}

export function endLoading() {
  return {
    type: actionTypes.END_LOADING,
    isLoading: false,
  };
}
