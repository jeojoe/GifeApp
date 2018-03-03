// @flow
import React, { Component } from 'react';
import { Text, Modal, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux';

import authBg1 from '../../_assets/auth-bg-1.png';
import authBg2 from '../../_assets/auth-bg-2.png';
import authBg3 from '../../_assets/auth-bg-3.png';
import { Button } from '../../Components';
import logoWhiteTrans from '../../_assets/logo-white-trans.png';
import { setIsInvited } from '../redux/actions';
import InvitationScreen from './InvitationScreen';
import { startLoading, endLoading } from '../../_utils/globalActions';
import s from './LoginScreen.style';

type Props = {
  startLoading: () => void,
  endLoading: () => void,
  invitationCode: string | null,
};
type State = {
  ran: number,
};

class LoginScreen extends Component<Props, State> {
  state = {
    ran: Math.random(),
  }
  _login = () => {
    this.props.startLoading();
    setTimeout(() => this.props.endLoading(), 1000);
  }

  render() {
    const { invitationCode } = this.props;

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
        <Modal
          visible={!invitationCode} animationType="fade"
          onRequestClose={() => console.log('close')}
        >
          <InvitationScreen />
        </Modal>
        <Image
          source={logoWhiteTrans}
          style={s.logo}
          resizeMode="contain"
        />
        <Text style={[s.text, { marginBottom: 70 }]}>
          ไปเที่ยวแล้วได้รางวัล!
        </Text>
        <Button
          text="ดำเนินการต่อด้วย Facebook"
          onPress={this._login}
          bgColor="white"
        />
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    invitationCode: state.invitationCode,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setIsInvited: bool => dispatch(setIsInvited(bool)),
    startLoading: () => dispatch(startLoading()),
    endLoading: () => dispatch(endLoading()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
