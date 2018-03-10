// @flow
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import TimeLeftLabel from './TimeLeftLabel';
import { LocationLabel } from '../../Components';
import s, { cardHeight, cardWidth } from './ChallengeCardJumbo.style';
import { Colors } from '../../_utils';

type Props = {
  title: string,
  picture: string,
  endDate: string,
  locationLabel: string,
};

const ChallengeCardJumbo = (props: Props) => (
  <ImageBackground
    style={s.imageWrapper}
    source={{ uri: props.picture }}
  >
    {/* Time */}
    <View style={s.timeLeft}>
      <TimeLeftLabel
        endDate={props.endDate}
      />
    </View>

    {/* Header */}
    <View style={s.flexSpace}>
      <LinearGradient
        colors={['transparent', '#000']}
        start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}
        style={s.headerWrapper}
      >
        {/* Title */}
        <Text style={s.title} numberOfLines={3}>
          {props.title}
        </Text>
        {/* Location + Star */}
        <View style={s.footerWrapper}>
          <LocationLabel
            label={props.locationLabel}
          />
        </View>
      </LinearGradient>
    </View>

    {/* Reward */}
    <LinearGradient
      colors={[Colors.rewardBgLeft, Colors.rewardBgRight]}
      start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
      style={s.rewardWrapper}
    >
      <View style={s.rewardIconWrapper}>
        <Icon name="gift" color="#fff" size={20} />
      </View>
      <Text style={s.rewardText} numberOfLines={1}>ที่พักในโรงแรม HQO 1 คืน ฟรี!</Text>
    </LinearGradient>
  </ImageBackground>
);

ChallengeCardJumbo.width = cardWidth;
ChallengeCardJumbo.height = cardHeight;

export default ChallengeCardJumbo;
