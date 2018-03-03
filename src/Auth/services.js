import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import * as API from '../_utils/apiCaller';
import { NETWORK_ERR } from '../_constants/alertMessages';

export async function getToken() {
  const token = await AsyncStorage.getItem('@token');
  return token;
}

export async function setToken(token) {
  try {
    await AsyncStorage.setItem('@token', token);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
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

export function loginOAuth({ type, accessToken, uid, email }) {
  return new Promise((resolve, reject) => {
    const infoRequest = new GraphRequest(
      '/me?fields=email',
      { accessToken },
      (err, data) => {
        if (err) {
          alert(NETWORK_ERR);
          reject(err);
        }

        if (data && data.email) {
          // const res = await API.mock();
          setToken('dummytoken');
          resolve();
        }
      },
    );

    new GraphRequestManager().addRequest(infoRequest).start();
  });
}
