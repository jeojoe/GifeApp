// @flow
import React from 'react';
import { View, Text, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// WTF BUG!!
import withChallengeRedux from '../../_hoc/withChallengeRedux';
import { Colors } from '../../_utils';

import s from './DoChallengeModal.style';

type Props = {
  isDoChallengeModalVisible: boolean,
};
const DoChallengeModal = (props: Props) => (
  <Modal
    visible={props.isDoChallengeModalVisible}
    animationType="slide"
    onRequestClose={() => console.log('close')}
    transparent
  >
    <LinearGradient
      colors={[Colors.mainGradientTopLeft, Colors.mainGradientBottomRight]}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
      style={[s.wrapper]}
    >
      <Text>Hi</Text>
    </LinearGradient>
  </Modal>
);

export default withChallengeRedux(DoChallengeModal);
