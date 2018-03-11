// @flow
import React from 'react';
import { View, Text, Modal } from 'react-native';
// WTF BUG!!
import withChallengeRedux from '../../_hoc/withChallengeRedux';

type Props = {
  isDoChallengeModalVisible: boolean,
};
const DoChallengeModal = (props: Props) => (
  <Modal
    visible={props.isDoChallengeModalVisible}
    animationType="slide"
    onRequestClose={() => console.log('close')}
  >
    <Text>do challenge modal</Text>
  </Modal>
);

export default withChallengeRedux(DoChallengeModal);
