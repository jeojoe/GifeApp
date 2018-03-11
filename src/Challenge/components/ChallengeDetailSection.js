// @flow
import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import { PlaceCard } from '../../Place';
import s from './ChallengeDetailSection.style';

type Props = {
  goalDescription: string,
  startDate: Date,
  endDate: Date,
  places: Array<string>,
};
const ChallengeDetailSection = (props: Props) => {
  const timeLeft = moment(props.endDate).fromNow();
  const periodString = `${moment(props.startDate).format()} + ${moment(props.endDate).format()}`;

  return (
    <View style={s.wrapper}>
      <Text style={s.header}>ภารกิจที่ต้องทำ</Text>
      <Text style={s.label}>ไปเที่ยวให้ครบ 5 สถานที่นี้</Text>

      <View style={s.timeLeftWrapper}>
        <View style={s.timeLeft}>
          {/* {timeLeft} */}
          <Text style={s.timeLeftText}>เหลือ 7 วัน</Text>
        </View>
        <View style={s.periodString}>
          {/* {periodString} */}
          <Text>14/03/2018 - 16/03/2018</Text>
        </View>
      </View>

      <View style={s.placeWrapper}>
        <PlaceCard />
      </View>
    </View>
  );
};

export default ChallengeDetailSection;
