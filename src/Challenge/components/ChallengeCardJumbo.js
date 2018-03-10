// @flow
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
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
          <StarRating
            rating={props.rating}
          />
        </View>
      </LinearGradient>
    </View>

    {/* Reward */}
    <RewardLabel
      label="hey"
      size="jumbo"
    />

  </ImageBackground>
);

ChallengeCardJumbo.width = cardWidth;
ChallengeCardJumbo.height = cardHeight;

export default ChallengeCardJumbo;
