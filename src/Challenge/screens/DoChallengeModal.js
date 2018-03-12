// @flow
import React from 'react';
import { View, Text, Modal, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// WTF BUG!!
import withChallengeRedux from '../../_hoc/withChallengeRedux';
import { Colors } from '../../_utils';
import { ChallengeCardJumbo } from '../../Challenge';
import { Button } from '../../Components';

import s from './DoChallengeModal.style';

type Props = {
  isDoChallengeModalVisible: boolean,
  title: string,
  picture: string,
  endDate: string,
  locationLabel: string,
  rating: number,
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
      style={[s.gradientBg]}
    >
      <ScrollView style={{ flex: 1 }} contentContainerStyle={s.wrapper}>
        <Text style={s.header}>LET&apos;S GIFE !</Text>
        <Text style={s.subHeader}>ไปทำภารกิจนี้กัน!</Text>
        <View style={{ marginBottom: 20 }}>
          <ChallengeCardJumbo
            title={props.title}
            picture={props.picture}
            endDate={props.endDate}
            locationLabel={props.locationLabel}
            rating={props.rating}
            disabled
          />
        </View>
        <Button
          text="ไปหน้าทำภารกิจ"
          bgColor="white"
          style={{ marginBottom: 10 }}
        />
        <Button
          text="เลือกภารกิจอื่นต่อ"
          bgColor="pink"
          style={{ marginBottom: 10, borderColor: '#fff', borderWidth: 1 }}
        />
      </ScrollView>
    </LinearGradient>
  </Modal>
);

export default withChallengeRedux(DoChallengeModal);
