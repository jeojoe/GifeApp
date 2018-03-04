// @flow
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Colors } from '../../_utils';

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
