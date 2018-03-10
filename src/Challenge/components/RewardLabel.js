// @flow
import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../../_utils';
import s from './RewardLabel.style';

type Props = {
  label: string,
  size: 'jumbo' | 'normal',
}
const RewardLabel = (props: Props) => {
  let height = 45;
  let size = 16;
  if (props.size === 'jumbo') {
    height = 45; size = 16;
  }

  return (
    <LinearGradient
      colors={[Colors.rewardBgLeft, Colors.rewardBgRight]}
      start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
      style={[s.wrapper, { height }]}
    >
      <View style={s.iconWrapper}>
        <Icon name="gift" color="#fff" size={size + 4} />
      </View>
      <Text
        style={[s.text, { fontSize: size }]}
        numberOfLines={1}
      >
        {props.label}
      </Text>
    </LinearGradient>
  );
};

export default RewardLabel;
