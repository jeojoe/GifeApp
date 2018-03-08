// @flow
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import s, { cardHeight, cardWidth } from './ChallengeCardJumbo.style';

type Props = {
  title: string,
  picture: string,
};

const ChallengeCardJumbo = (props: Props) => (
  <ImageBackground
    style={s.imageWrapper}
    source={{ uri: props.picture }}
  >
    <Text style={s.title}>
      {props.title}
    </Text>
  </ImageBackground>
);

ChallengeCardJumbo.width = cardWidth;
ChallengeCardJumbo.height = cardHeight;

export default ChallengeCardJumbo;
