// @flow
import React, { Component } from 'react';
import { Text, Modal, ImageBackground, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk'; // eslint-disable-line

import { authBg1, authBg2, authBg3, logoWhiteTrans } from '../../_assets';
import { alertMessages } from '../../_constants';
import { withGlobalActions } from '../../_hoc';
import { AuthActions, InvitationScreen, AuthServices } from '../../Auth';
import { Button } from '../../Components';
import s from './LoginScreen.style';


type Props = {
  startLoading: () => void,
  endLoading: () => void,
  setIsLoggedIn: (bool: boolean) => void,
  invitationCode: string | null,
};
type State = {
  ran: number,
};

class LoginScreen extends Component<Props, State> {
  state = {
    ran: Math.random(),
  }

  _login = async () => {
    try {
      const res = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
      if (!res.isCancelled) {
        this.props.startLoading();
        AccessToken.getCurrentAccessToken()
          .then(async (data) => {
            if (data && data.accessToken) {
              try {
                await AuthServices.loginOAuth({
                  type: 'facebook',
                  accessToken: data.accessToken.toString(),
                  uid: data.userID.toString(),
                });
                this._loginSuccess('facebook');
              } catch (err) {
                console.log(err);
              }
            }
          })
          .catch(err => console.log(err))
          .finally(() => this.props.endLoading());
      }
    } catch (err) {
      console.log(err);
      Alert.alert(alertMessages.NETWORK_ERR);
    }

    // setTimeout(() => this.props.endLoading(), 1000);
  }

  _loginSuccess = (type: string) => {
    if (type === 'facebook') {
      console.log('fbbb');
    }
    this.props.setIsLoggedIn(true);
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
    setIsInvited: bool => dispatch(AuthActions.setIsInvited(bool)),
    setIsLoggedIn: bool => dispatch(AuthActions.setIsLoggedIn(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withGlobalActions(LoginScreen));
