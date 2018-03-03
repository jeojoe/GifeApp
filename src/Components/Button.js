// @flow
import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../_utils/Colors';
import s from './Button.style';

type Props = {
  text: string,
  bgColor?: 'white',
  height?: number,
  onPress: () => void,
}

const Button = (props: Props) => {
  let leftColor = Colors.buttonLeft;
  let rightColor = Colors.buttonRight;
  let textColor = '#fff';

  if (props.bgColor === 'white') {
    leftColor = '#fff'; rightColor = '#fff'; textColor = Colors.main;
  }

  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[
        s.button,
        props.height && { height: props.height }
      ]}
    >
      <LinearGradient
        colors={[leftColor, rightColor]}
        style={s.gradient}
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
