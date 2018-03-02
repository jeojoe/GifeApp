// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { setIsInvited } from '../redux/actions';
import InvitationScreen from './InvitationScreen';
import { startLoading, endLoading } from '../../_utils/globalActions';

type Props = {
  startLoading: () => void,
  endLoading: () => void,
  invitationCode: string | null,
};

class LoginScreen extends Component<Props> {
  _login = () => {
    this.props.startLoading();
    setTimeout(() => this.props.endLoading(), 1000);
  }

  render() {
    const { invitationCode } = this.props;

    if (!invitationCode) return <InvitationScreen />;

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
