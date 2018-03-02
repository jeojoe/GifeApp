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
import configureStore from './configureStore';

type Props = {
  isLoggedIn: boolean,
  setIsLoggedIn: (bool: boolean) => void,
};

class App extends Component<Props> {
  async componentWillMount() {
    const token = await AuthService.getToken();
    if (token) {
      this.props.setIsLoggedIn(true);
      // SplashScreen.hide();
    } else {
      this.props.setIsLoggedIn(false);
      // SplashScreen.hide();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

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
  console.log(AuthActions);
  return {
    setIsLoggedIn: bool => dispatch(AuthActions.setIsLoggedIn(bool)),
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
