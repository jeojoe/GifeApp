// @flow
import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import s from './TimeLeftLabel.style';

type Props = {
  endDate: string,
};

export default (props: Props) => {
  const timeLeft = moment(props.endDate).fromNow();
  return (
    <View style={s.wrapper}>
      <Text style={s.text}>{timeLeft}</Text>
    </View>
  );
};

