// @flow
import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import SpotlightCarousel from '../components/SpotlightCarousel';
import ChallengeSection from '../components/ChallengeSection';
import { GifeStatusBar } from '../../Components';
import s from './ExploreTabScreen.style';
import { sBase } from '../../_utils';

// dummy
import { getSections } from '../../dummyData';

type Props = {
  navigation: Object,
};
export default class ExploreTabScreen extends Component<Props> {
  static navigationOptions = {
    header: null,
  }

  _renderSections = () => {
    return getSections().map(section => (
      <ChallengeSection
        key={section.id}
        title={section.title}
        paddingHorizontal={20}
        spaceBetweenPercent="5%"
        challenges={section.challenges}
      />
    ));
  }

  render() {
    return (
      <SafeAreaView style={[sBase.wrapper, { paddingHorizontal: 0 }]}>
        <GifeStatusBar white />
        <ScrollView>
          {/* space <==> */}
          <View style={{ height: 20 }} />

          {/* Spotlight */}
          <Text style={[sBase.header]}>
            <Text style={sBase.headerFront}>
              ภารกิจ
            </Text>
            {' '}
            <Text>โดดเด่นและแนะนำ</Text>
          </Text>
          <SpotlightCarousel />

          {/* Sections */}
          {this._renderSections()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
