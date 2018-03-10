import React from 'react';
import { Text, ScrollView } from 'react-native';

const ChallengeScreen = () => (
  <ScrollView>
    <Text>challenge screen</Text>
    <Text>challenge screen</Text><Text>challenge screen</Text><Text>challenge screen</Text><Text>challenge screen</Text><Text>challenge screen</Text><Text>challenge screen</Text><Text>challenge screen</Text>
  </ScrollView>
);

ChallengeScreen.navigationOptions = {
  headerBackTitle: 'Back',
  headerTintColor: 'red',
  headerTitle: 'what',
  headerTransparent: true,
};

export default ChallengeScreen;
