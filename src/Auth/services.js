// @flow
import {
  AsyncStorage,
} from 'react-native';
import axios from 'axios';

export async function getToken() {
  const token = await AsyncStorage.getItem('@token');
  return false;
  // return token;
}

export async function getInvitationCode() {
  const code = await AsyncStorage.getItem('@invitationcode');
  return code;
}

export async function verifyInvitationCode(code) {
  try {
    const res = await axios.get('http://www.mocky.io/v2/5a996cbf2e0000e331553680');
    console.log(res);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
