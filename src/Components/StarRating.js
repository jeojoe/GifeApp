// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../_utils';
import s from './StarRating.style';

type Props = {
  rating: number,
  color?: string,
  size?: number,
};
const StarRating = (props: Props) => (
  <View style={s.wrapper}>
    <Icon
      name="star" size={props.size} color={props.color}
      style={s.icon}
    />
    <Text style={[s.rating, { color: props.color, fontSize: props.size }]}>
      {Number(props.rating).toFixed(1)}
    </Text>
  </View>
);

StarRating.defaultProps = {
  color: Colors.rating,
  size: 12,
};

export default StarRating;
