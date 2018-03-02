// @flow
import {
  AsyncStorage,
} from 'react-native';

export async function getToken() {
  const token = await AsyncStorage.getItem('@token');
  return false;
  // return token;
}

export async function getInvitationCode() {
  const code = await AsyncStorage.getItem('@invitationcode');
  return code;
}
