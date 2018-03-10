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
          {/* Spotlight */}
          <View style={{ marginBottom: 20 }}>
            <Text style={[sBase.header]}>
              <Text style={sBase.headerFront}>
                ภารกิจ
              </Text>
              {' '}
              <Text>โดดเด่นและแนะนำ</Text>
            </Text>
            <SpotlightCarousel />
          </View>

          {/* Sections */}
          <Text style={[sBase.header]}>
            <Text style={sBase.headerFront}>
              ภารกิจ
            </Text>
            {' '}
            <Text>อาหาร</Text>
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
