// @flow
import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import SpotlightCarousel from '../components/SpotlightCarousel';
import { GifeStatusBar } from '../../Components';
import s from './ExploreTabScreen.style';
import { sBase } from '../../_utils';

type Props = {
  navigation: Object,
};

export default class ExploreTabScreen extends Component<Props> {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <SafeAreaView style={[sBase.wrapper, { paddingHorizontal: 0 }]}>
        <GifeStatusBar white />
        <ScrollView>
          <Text style={[sBase.header]}>
            <Text style={sBase.headerFront}>
              ภารกิจ
            </Text>
            {' '}
            <Text>โดดเด่นและแนะนำ</Text>
          </Text>
          <SpotlightCarousel />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
