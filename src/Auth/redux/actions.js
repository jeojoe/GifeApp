import * as types from '../../_constants/actionTypes';

export function test() {
  return {
    type: types.TEXT_ACTION,
  };
}

export function setIsLoggedIn(isLoggedIn) {
  return {
    type: types.SET_IS_LOGGEDIN,
    isLoggedIn,
  };
}

export function setIsInvited(isInvited) {
  return {
    type: types.SET_IS_INVITED,
    isInvited,
  };
}
