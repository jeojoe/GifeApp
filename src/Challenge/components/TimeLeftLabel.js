// @flow
import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import s from './TimeLeftLabel.style';

type Props = {
  endDate: string,
  small?: boolean,
};

const TimeLeftLabel = (props: Props) => {
  const timeLeft = moment(props.endDate).fromNow();
  return (
    <View
      style={s.wrapper}
    >
      <Text style={[s.text, props.small && { fontSize: 9 }]}>
        {timeLeft}
      </Text>
    </View>
  );
};

TimeLeftLabel.defaultProps = {
  small: false,
};

export default TimeLeftLabel;
