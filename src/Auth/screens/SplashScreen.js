// @flow
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

const SplashScreen = () => (
  <View style={s.container}>
    <Text>Splashh!!</Text>
  </View>
);

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default SplashScreen;
