// @flow
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Colors } from '../../_utils_';

const SplashScreen = () => (
  <View style={s.container} />
);

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },
});

export default SplashScreen;
