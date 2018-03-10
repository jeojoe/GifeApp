// @flow
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import TimeLeftLabel from './TimeLeftLabel';
import RewardLabel from './RewardLabel';
import { LocationLabel, StarRating } from '../../Components';
import s from './ChallengeCard.style';
import sJumbo from './ChallengeCardJumbo.style';
import { sBase, Colors } from '../../_utils';

type Props = {
  title: string,
  picture: string,
  endDate: string,
  locationLabel: string,
  rating: number,
};
const ChallengeCard = (props: Props) => (
  <View style={s.wrapper}>
    <ImageBackground
      source={{ uri: props.picture }}
      style={s.imageWrapper}
    >
      {/* Time left */}
      <View style={s.timeLeft}>
        <TimeLeftLabel
          endDate={props.endDate}
          small
        />
      </View>

      {/* Reward */}
      <RewardLabel
        label="ที่พักในโรงแรม HQO 1 คืน ฟรี!"
        size="normal"
      />
    </ImageBackground>
    {/* Title */}
    <Text style={s.title}>{props.title}</Text>
    {/* Lower Labels */}
    <View style={sJumbo.footerWrapper}>
      <LocationLabel
        label={props.locationLabel}
        color={Colors.textGrey}
      />
      <StarRating
        rating={props.rating}
      />
    </View>
  </View>
);

export default ChallengeCard;
