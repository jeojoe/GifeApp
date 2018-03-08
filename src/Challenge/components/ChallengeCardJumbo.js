// @flow
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import TimeLeftLabel from './TimeLeftLabel';
import s, { cardHeight, cardWidth } from './ChallengeCardJumbo.style';

type Props = {
  title: string,
  picture: string,
  endDate: string,
};

const ChallengeCardJumbo = (props: Props) => (
  <ImageBackground
    style={s.imageWrapper}
    source={{ uri: props.picture }}
  >
    <TimeLeftLabel
      endDate={props.endDate}
    />
    <Text style={s.title}>
      {props.title}
    </Text>
  </ImageBackground>
);

ChallengeCardJumbo.width = cardWidth;
ChallengeCardJumbo.height = cardHeight;

export default ChallengeCardJumbo;
