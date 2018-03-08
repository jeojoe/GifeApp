// @flow
import React from 'react';
import { View, Text } from 'react-native';
import s from './LocationLabel.style';

type Props = {
  label: string,
  color?: string,
  size?: number,
};
const LocationLabel = (props: Props) => (
  <View style={s.wrapper}>
    <Text
      style={[s.label, {
        color: props.color,
        fontSize: props.size,
      }]}
    >
      {props.label}
    </Text>
  </View>
);

LocationLabel.defaultProps = {
  color: '#fff',
  size: 12,
};

export default LocationLabel;
