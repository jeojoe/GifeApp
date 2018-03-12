// @flow
import React from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Colors } from '../_utils';
import s from './Button.style';

type Props = {
  text: string,
  bgColor?: 'white' | 'pink',
  height?: number,
  style?: StyleObj,
  onPress: () => void,
}

const Button = (props: Props) => {
  let leftColor = Colors.buttonLeft;
  let rightColor = Colors.buttonRight;
  let textColor = '#fff';

  if (props.bgColor === 'white') {
    leftColor = '#fff'; rightColor = '#fff'; textColor = Colors.main;
  } else if (props.bgColor === 'pink') {
    leftColor = Colors.main; rightColor = Colors.main; textColor = '#fff';
  }

  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={props.height && { height: props.height }}
    >
      <LinearGradient
        colors={[leftColor, rightColor]}
        style={[s.wrapper, props.style]}
        start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
      >
        <Text style={[s.text, { color: textColor }]}>
          {props.text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

Button.defaltProps = {
  height: 40,
};

export default Button;
