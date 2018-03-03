// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect, Provider } from 'react-redux';
import {
  LoginScreen,
  AuthActions,
  AuthService,
} from './Auth';
import { GifeStatusBar, SpinnerOverlay } from './Components';
import configureStore from './Store';

type Props = {
  isLoggedIn: boolean,
  setIsLoggedIn: (bool: boolean) => void,
  setInvitationCode: (bool: boolean) => void,
};
type State = {
  fetchingToken: boolean,
};

class App extends Component<Props, State> {
  state = {
    fetchingToken: true,
  }
  async componentWillMount() {
    const token = await AuthService.getToken();
    const code = await AuthService.getInvitationCode();

    if (code) this.props.setInvitationCode(code);
    if (token) {
      this.props.setIsLoggedIn(true);
      // SplashScreen.hide();
    } else {
      this.props.setIsLoggedIn(false);
      // SplashScreen.hide();
    }

    this.setState({ fetchingToken: false });
  }

  render() {
    const { fetchingToken } = this.state;
    const { isLoggedIn } = this.props;

    if (fetchingToken) return null;

    return (
      <View style={{ flex: 1 }}>
        <GifeStatusBar />
        <SpinnerOverlay />

        {/* App content */}
        {!isLoggedIn ?
          <LoginScreen />
          :
          <Text>lol hey logged in !!!</Text>
        }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setIsLoggedIn: bool => dispatch(AuthActions.setIsLoggedIn(bool)),
    setInvitationCode: code => dispatch(AuthActions.setInvitationCode(code)),
  };
}

const HydratedApp = connect(mapStateToProps, mapDispatchToProps)(App);

// Connect to Provider
const store = configureStore({});

export default () => (
  <Provider store={store}>
    <HydratedApp />
  </Provider>
);
