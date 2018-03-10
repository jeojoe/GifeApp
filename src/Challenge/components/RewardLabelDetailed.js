// @flow
import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../../_utils';
import s from './RewardLabelDetailed.style';
import sReward from './RewardLabel.style';

type Props = {
  label: string,
  sponsorName: string,
  sponsorImageUrl: string,
};
const RewardLabelDetailed = (props: Props) => {
  return (
    <LinearGradient
      colors={[Colors.rewardBgLeft, Colors.rewardBgRight]}
      start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
      style={[s.wrapper]}
    >
      {/* Header */}
      <View style={s.headerWrapper}>
        <View style={[sReward.iconWrapper, s.iconWrapper]}>
          <Icon name="gift" color="#fff" size={20} />
        </View>
        <Text
          style={[sReward.text, s.headerText]}
          numberOfLines={1}
        >
          รางวัลเมื่อทำภารกิจสำเร็จ
        </Text>
      </View>

      {/* Label */}
      <Text style={s.label}>ที่พักในโรงแรม HQO 1 คืน ฟรี!</Text>
    </LinearGradient>
  );
};

export default RewardLabelDetailed;
