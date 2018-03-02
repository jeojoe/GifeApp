import { AsyncStorage } from 'react-native';
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

export function setInvitationCode(code) {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem('@invitationcode', code);
      dispatch({
        type: types.SET_INVITATION_CODE,
        code,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
