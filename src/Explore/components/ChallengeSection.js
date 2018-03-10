// @flow
import React from 'react';
import { View, Text } from 'react-native';

import s from './ChallengeSection.style';
import { sBase } from '../../_utils';

type Props = {
  title: string,
  paddingHorizontal: number,
  spaceBetweenPercent: string,
  challenges: [{}],
};
const ChallengeSection = (props: Props) => (
  <View style={{ paddingHorizontal: props.paddingHorizontal }}>
    <Text style={[sBase.header, s.header]}>
      {props.title}
    </Text>
    <View style={s.wrapper}>
      <View style={s.column}>
        <Text>Yo</Text>
      </View>
      <View style={{ flexBasis: props.spaceBetweenPercent }} />
      <View style={s.column}>
        <Text>Yo</Text>
      </View>
    </View>
  </View>
);

export default ChallengeSection;
