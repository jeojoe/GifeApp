import React from 'react';
import { Text } from 'react-native';

const ChallengeScreen = () => (
  <Text>challenge screen</Text>
);

ChallengeScreen.navigationOptions = {
  headerBackTitle: 'Back',
  headerTintColor: 'red',
  headerTitle: 'what',
  headerTransparent: true,
};

export default ChallengeScreen;
