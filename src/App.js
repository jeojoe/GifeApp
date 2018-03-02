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
import { GifeStatusBar } from './_components';
import configureStore from './configureStore';

type Props = {
  setIsLoggedIn: (bool: boolean) => void,
};
type State = {
  isInvited: boolean
};

class App extends Component<Props, State> {
  state = {
    isInvited: false,
  }

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

  setInvited = (isInvited: boolean) => {
    this.setState({ isInvited });
  }

  render() {
    const { isLoggedIn } = this.props;

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
