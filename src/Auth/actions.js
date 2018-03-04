import { AsyncStorage } from 'react-native';
import { actionTypes } from '../_constants';

export function test() {
  return {
    type: actionTypes.TEXT_ACTION,
  };
}

export function setIsLoggedIn(isLoggedIn) {
  return {
    type: actionTypes.SET_IS_LOGGEDIN,
    isLoggedIn,
  };
}

export function setInvitationCode(code) {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem('@invitationcode', code);
      dispatch({
        type: actionTypes.SET_INVITATION_CODE,
        code,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
