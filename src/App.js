// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native';
import {
  LoginScreen,
  AuthService,
} from './Auth';
import { GifeStatusBar } from './_components';

type Props = {};
type State = {
  isLoggedIn: boolean,
  isInvited: boolean
};

export default class App extends Component<Props, State> {
  state = {
    isLoggedIn: false,
    isInvited: false,
  }

  async componentWillMount() {
    const token = await AuthService.getToken();
    if (token) {
      this.setState({ isLoggedIn: true });
      // SplashScreen.hide();
    } else {
      this.setState({ isLoggedIn: false });
      // SplashScreen.hide();
    }
  }

  setInvited = (isInvited: boolean) => {
    this.setState({ isInvited });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <GifeStatusBar />

        {/* App content */}
        {!isLoggedIn ?
          <LoginScreen
            isInvited={this.state.isInvited}
            setInvited={this.setInvited}
          />
          :
          <Text>lol hey logged in !!!</Text>
        }
      </View>
    )
  }
}
