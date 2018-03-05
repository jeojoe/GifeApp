// @flow
import React, { Component } from 'react';
import { Text, ImageBackground, Image, TextInput } from 'react-native';

import { authBg1, authBg2, authBg3, logoWhiteTrans } from '../../_assets';
import { withGlobalActions, withAuthRedux } from '../../_hoc';
import { Colors } from '../../_utils';
import { AuthServices } from '../../Auth';
import { Button } from '../../Components';

import s from './InvitationScreen.style';

type Props = {
  startLoading: () => void,
  endLoading: () => void,
  setInvitationCode: (code: string) => void,
};
type State = {
  code: string,
  ran: number,
};

class InvitationScreen extends Component<Props, State> {
  state = {
    code: '',
    ran: Math.random(),
  }

  _verifyCode = async () => {
    this.props.startLoading();

    const success = await AuthServices.verifyInvitationCode(this.state.code);
    if (success) {
      this.props.setInvitationCode(this.state.code);
    } else {
      // !! Dummy
      this.props.setInvitationCode(this.state.code);
    }

    this.props.endLoading();
  }

  render() {
    let bg = '';
    if (this.state.ran < 0.33) {
      bg = authBg1;
    } else if (this.state.ran > 0.66) {
      bg = authBg2;
    } else {
      bg = authBg3;
    }

    return (
      <ImageBackground
        style={s.wrapper}
        source={bg}
        resizeMode="cover"
      >
        <Image
          source={logoWhiteTrans}
          style={s.logo}
          resizeMode="contain"
        />
        <Text style={s.text}>
          Welcome to our beta testing. Insert invitation code and have fun traveling with GIFE!
        </Text>
        <TextInput
          style={s.input}
          value={this.state.code}
          onChangeText={code => this.setState({ code })}
          placeholder="Invitation Code"
          placeholderTextColor={Colors.textOnLightPink}
          keyboardType="numeric"
          returnKeyType="done"
          underlineColorAndroid="transparent"
          maxLength={6}
        />
        <Button
          text="Submit"
          onPress={this._verifyCode}
        />
      </ImageBackground>
    );
  }
}

export default withAuthRedux(withGlobalActions(InvitationScreen));
