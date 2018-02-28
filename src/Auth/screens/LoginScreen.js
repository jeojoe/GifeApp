// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import InvitationScreen from './InvitationScreen';

type Props = {
  isInvited: boolean,
};

export default class LoginScreen extends Component<Props> {
  _login() {
    console.log('click login lol');
  }

  render() {
    const { isInvited } = this.props;

    if (!isInvited) return <InvitationScreen />;

    return (
      <View>
        <Text>Login Screen</Text>
        <TouchableOpacity
          onPress={this._login}
        >
          lol
        </TouchableOpacity>
      </View>
    );
  }
}
