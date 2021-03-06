// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import s from './LocationLabel.style';

type Props = {
  label: string,
  color?: string,
  size?: number,
  noWrap?: boolean,
};
const LocationLabel = (props: Props) => (
  <View style={[s.wrapper, !props.noWrap && { flex: 1, flexWrap: 'wrap' }]}>
    <Icon
      name="place" color={props.color} size={props.size}
      style={s.icon}
    />
    <Text
      style={[s.label,
        {
          color: props.color,
          fontSize: props.size,
        },
        !props.noWrap && { flex: 1, flexWrap: 'wrap' },
      ]}
    >
      {props.label}
    </Text>
  </View>
);

LocationLabel.defaultProps = {
  color: '#fff',
  size: 12,
  noWrap: false,
};

export default LocationLabel;
