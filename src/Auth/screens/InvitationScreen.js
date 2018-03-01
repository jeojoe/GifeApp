// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
} from 'react-native';
import authBg1 from '../../_assets_/auth-bg-1.png';
import authBg2 from '../../_assets_/auth-bg-2.png';
import authBg3 from '../../_assets_/auth-bg-3.png';

type Props = {};
type State = {
  code: string,
};

export default class InvitationScreen extends Component<Props, State> {
  state = {
    code: 'lol',
  }

  render() {
    let bg = '';
    const ran = Math.random();
    if (ran < 0.33) {
      bg = authBg1;
    } else if (ran > 0.66) {
      bg = authBg2;
    } else {
      bg = authBg3;
    }

    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={bg}
        resizeMode="cover"
      >
        <Text>invitation screen : {this.state.code}</Text>
      </ImageBackground>
    );
  }
}
