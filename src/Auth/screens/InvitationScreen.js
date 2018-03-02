// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import { Button } from '../../Components';
import Colors from '../../_utils/Colors';
import authBg1 from '../../_assets/auth-bg-1.png';
import authBg2 from '../../_assets/auth-bg-2.png';
import authBg3 from '../../_assets/auth-bg-3.png';
import logoWhiteTrans from '../../_assets/logo-white-trans.png';
import { startLoading, endLoading } from '../../_utils/globalActions';

import s from './InvitationScreen.style';

type Props = {
  startLoading: () => void,
  endLoading: () => void,
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

  _verifyCode = () => {
    this.props.startLoading();
    // setTimeout(() => this.props.endLoading(), 1000);
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
        <View>
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
          />
          <Button
            text="Submit"
            onPress={this._verifyCode}
          />
        </View>
      </ImageBackground>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    startLoading: () => dispatch(startLoading()),
    endLoading: () => dispatch(endLoading()),
  };
}

export default connect(null, mapDispatchToProps)(InvitationScreen);
