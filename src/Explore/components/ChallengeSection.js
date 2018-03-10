// @flow
import React from 'react';
import { View, Text } from 'react-native';

import { ChallengeCard } from '../../Challenge';
import s from './ChallengeSection.style';
import { sBase } from '../../_utils';

type Props = {
  title: string,
  paddingHorizontal: number,
  spaceBetweenPercent: string,
  challenges: Array<{
    challenge_name: string,
    challenge_picture: string,
    challenge_end_date: string,
    challenge_location_label: string,
    challenge_total_rating: number,
  }>,
};
const ChallengeSection = (props: Props) => (
  <View style={{ paddingHorizontal: props.paddingHorizontal }}>
    <Text style={[sBase.header, s.header]}>
      <Text style={sBase.headerFront}>ภารกิจ</Text>
      {' '}
      {props.title}
    </Text>
    <View style={s.wrapper}>
      <View style={[s.column, { marginRight: props.spaceBetweenPercent }]}>
        <ChallengeCard
          title={props.challenges[0].challenge_name}
          picture={props.challenges[0].challenge_picture}
          endDate={props.challenges[0].challenge_end_date}
          locationLabel={props.challenges[0].challenge_location_label}
          rating={props.challenges[0].challenge_total_rating}
        />
      </View>
      <View style={[s.column, { marginLeft: props.spaceBetweenPercent }]}>
        <ChallengeCard
          title={props.challenges[1].challenge_name}
          picture={props.challenges[1].challenge_picture}
          endDate={props.challenges[1].challenge_end_date}
          locationLabel={props.challenges[1].challenge_location_label}
          rating={props.challenges[1].challenge_total_rating}
        />
      </View>
    </View>
  </View>
);

export default ChallengeSection;
