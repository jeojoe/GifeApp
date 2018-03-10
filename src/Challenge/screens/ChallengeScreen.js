import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  Text,
  View,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import { Colors } from '../../_utils';
import TimeLeftLabel from '../components/TimeLeftLabel';
import { LocationLabel, StarRating } from '../../Components';
import s, { PARALLAX_HEADER_HEIGHT, STICKY_HEADER_HEIGHT } from './ChallengeScreen.style';

const window = Dimensions.get('window');

class ChallengeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }).cloneWithRows([
        'Simplicity Matters',
        'Hammock Driven Development',
        'Value of Values',
        'Are We There Yet?',
        'The Language of the System',
        'Design, Composition, and Performance',
        'Clojure core.async',
        'The Functional Database',
        'Deconstructing the Database',
        'Hammock Driven Development',
        'Value of Values',
      ]),
    };
  }

  render() {
    return (
      <ListView
        ref="ListView"
        style={s.container}
        dataSource={this.state.dataSource}
        renderRow={rowData => (
          <View key={rowData} style={s.row}>
            <Text style={s.rowText}>
              { rowData }
            </Text>
          </View>
        )}
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
                    uri: 'https://www.goway.com/media/uploads/asia/images/thailand/general_thailand/thai_boats_on_beach_islandparadise_island_in_thailand_1_hero.jpg',
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
                  ทริป 5 สถานที่ท่องเที่ยว ผจญภัยในหัวหิน !
                </Text>
                <View style={s.footerWrapper}>
                  <View style={{ marginRight: 15 }}>
                    <LocationLabel
                      label="ประจวบครีขันธ์"
                      size={13}
                      noWrap
                    />
                  </View>
                  <StarRating
                    size={13}
                    rating={5.0}
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
                  ทริป 5 สถานที่ท่องเที่ยว ผจญภัยในหัวหิน !
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
