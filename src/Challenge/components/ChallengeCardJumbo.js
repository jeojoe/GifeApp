// @flow
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import TimeLeftLabel from './TimeLeftLabel';
import RewardLabel from './RewardLabel';
import { LocationLabel, StarRating } from '../../Components';
import s, { cardHeight, cardWidth } from './ChallengeCardJumbo.style';

type Props = {
  title: string,
  picture: string,
  endDate: string,
  locationLabel: string,
  rating: number,
  navigation: Object,
};

const ChallengeCardJumbo = (props: Props) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => props.navigation.navigate('Challenge')}
  >
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
          style={s.headerGradientWrapper}
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
            <StarRating
              rating={props.rating}
            />
          </View>
        </LinearGradient>
      </View>

      {/* Reward */}
      <RewardLabel
        label="ที่พักในโรงแรม HQO 1 คืน ฟรี!"
        size="jumbo"
      />

    </ImageBackground>
  </TouchableOpacity>
);

ChallengeCardJumbo.width = cardWidth;
ChallengeCardJumbo.height = cardHeight;

export default withNavigation(ChallengeCardJumbo);
