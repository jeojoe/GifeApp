// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

type Props = {};
type State = {
  code: string,
};

export default class InvitationScreen extends Component<Props, State> {
  state = {
    code: 'lol',
  }

  render() {
    return (
      <View>
        <Text>invitation screen : {this.state.code}</Text>
      </View>
    );
  }
}
