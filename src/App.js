// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native';

import {
  SplashScreen,
  LoginScreen,
  AuthService,
} from './Auth';

type Props = {};

type State = {
  isLoggedIn: boolean,
  isTokenFetched: boolean,
  isInvited: boolean
};

export default class App extends Component<Props, State> {
  state = {
    isTokenFetched: false,
    isLoggedIn: false,
    isInvited: false,
  }

  async componentWillMount() {
    const token = await AuthService.getToken();
    if (token) {
      this.setState({ isTokenFetched: true, isLoggedIn: true });
    } else {
      this.setState({ isTokenFetched: true, isLoggedIn: false });
    }
  }

  setInvited = (isInvited: boolean) => {
    this.setState({ isInvited });
  }

  render() {
    const { isTokenFetched, isLoggedIn } = this.state;

    if (!isTokenFetched) return <SplashScreen />;

    if (!isLoggedIn) {
      return (
        <LoginScreen
          isInvited={this.state.isInvited}
          setInvited={this.setInvited}
        />
      );
    }

    return <Text>lol hey logged in !!!</Text>;
  }
}