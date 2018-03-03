// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ImageBackground, Image, TextInput } from 'react-native';
import { Button } from '../../Components';
import Colors from '../../_utils/Colors';
import authBg1 from '../../_assets/auth-bg-1.png';
import authBg2 from '../../_assets/auth-bg-2.png';
import authBg3 from '../../_assets/auth-bg-3.png';
import logoWhiteTrans from '../../_assets/logo-white-trans.png';
import withGlobalActions from '../../_hoc/withGlobalActions';
import { verifyInvitationCode } from '../services';
import { setInvitationCode } from '../redux/actions';

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

    const success = await verifyInvitationCode(this.state.code);
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

function mapDispatchToProps(dispatch) {
  return {
    setInvitationCode: code => dispatch(setInvitationCode(code)),
  };
}

export default connect(null, mapDispatchToProps)(withGlobalActions(InvitationScreen));
