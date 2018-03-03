// @flow
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../_utils/Colors';
import s from './Button.style';

type Props = {
  text: string,
  onPress: () => void,
}

const Button = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={s.button}
    >
      <LinearGradient
        colors={[Colors.buttonLeft, Colors.buttonRight]}
        style={s.gradient}
        start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
      >
        <Text style={s.text}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
