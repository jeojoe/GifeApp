import React, { Component } from 'react';
import { Dimensions, Image, ListView, Text, View, StatusBar } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import { Colors } from '../../_utils';
import TimeLeftLabel from '../components/TimeLeftLabel';
import RewardLabelDetailed from '../components/RewardLabelDetailed';
import ChallengeDetailSection from '../components/ChallengeDetailSection';
import { LocationLabel, StarRating, GifeStatusBar } from '../../Components';
import s, { PARALLAX_HEADER_HEIGHT, STICKY_HEADER_HEIGHT } from './ChallengeScreen.style';
// Dummy
import { allChallenges } from '../../dummyData';

const data = allChallenges[1];

const window = Dimensions.get('window');

class ChallengeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }).cloneWithRows([
        {
          id: 'reward-detailed',
          Child: RewardLabelDetailed,
        },
        {
          id: 'challenge-details',
          Child: ChallengeDetailSection,
        },
      ]),
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <ListView
          ref="ListView"
          style={s.container}
          dataSource={this.state.dataSource}
          renderRow={({ id, Child }) => <Child key={id} />}
          renderScrollComponent={props => (
            <ParallaxScrollView
              // onScroll={onScroll}

              backgroundColor={Colors.main}
              stickyHeaderHeight={STICKY_HEADER_HEIGHT}
              parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
              backgroundSpeed={10}

              renderBackground={() => (
                <View key="background">
                  <Image
                    source={{
                      uri: data.challenge_picture,
                      width: window.width,
                      height: PARALLAX_HEADER_HEIGHT,
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      width: window.width,
                      backgroundColor: 'rgba(0,0,0,.4)',
                      height: PARALLAX_HEADER_HEIGHT,
                    }}
                  />
                </View>
              )}

              renderForeground={() => (
                <View key="parallax-header" style={s.parallaxHeader}>
                  <View style={{ marginBottom: 15 }}>
                    <TimeLeftLabel
                      endDate={new Date()}
                    />
                  </View>
                  <Text style={s.title}>
                    {data.challenge_name}
                  </Text>
                  <View style={s.footerWrapper}>
                    <View style={{ marginRight: 15 }}>
                      <LocationLabel
                        label={data.challenge_location_label}
                        size={13}
                        noWrap
                      />
                    </View>
                    <StarRating
                      size={13}
                      rating={data.challenge_total_rating}
                    />
                  </View>
                </View>
              )}

              renderStickyHeader={() => (
                <View key="sticky-header" style={s.stickySection}>
                  <Text
                    style={s.stickyTitle}
                    numberOfLines={1}
                  >
                    {data.challenge_name}
                  </Text>
                </View>
              )}

              // renderFixedHeader={() => (
              //   <View
              //     key="fixed-header"
              //     style={s.fixedSection}
              //   >
              //     <Text
              //       style={s.fixedSectionText}
              //     >
              //       Share
              //     </Text>
              //   </View>
              // )}
            />
          )}
        />
      </View>
    );
  }
}

ChallengeScreen.navigationOptions = {
  // headerBackTitle: 'Back',
  headerTintColor: '#fff',
  headerTransparent: true,
  headerStyle: {
    borderBottomColor: 'rgba(0,0,0,0)',
  },
  // headerRight: <Text></Text>,
};

export default ChallengeScreen;
