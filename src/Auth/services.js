import { AsyncStorage } from 'react-native';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

import axios from 'axios';
import { API } from '../_utils';
import { alertMessages } from '../_constants';

export function resetTokenAndCode() {
  deleteToken();
  deleteInvitationCode();
}

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

export async function deleteToken() {
  try {
    await AsyncStorage.removeItem('@token');
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

export async function deleteInvitationCode() {
  try {
    await AsyncStorage.removeItem('@invitationcode');
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function verifyInvitationCode(code) {
  try {
    const res = await API.get(`api/auth/invitation?code=${code}`);
    console.log(res);
    return true;
  } catch (err) {
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
          alert(alertMessages.NETWORK_ERR);
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
