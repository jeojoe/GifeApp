import React, { Component } from 'react';
import { Dimensions, Image, ListView, Text, View } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import { Colors } from '../../_utils';
import { LocationLabel, StarRating } from '../../Components';
import s, { PARALLAX_HEADER_HEIGHT, STICKY_HEADER_HEIGHT } from './PlaceScreen.style';
import sCard from '../components/PlaceCard.style';

// Dummy
import { getAllPlaces } from '../../dummyData';

const data = getAllPlaces[1];

const window = Dimensions.get('window');

class PlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }).cloneWithRows([
        {
          id: 'suggestions',
          Child: () => (
            <View style={s.sectionWrapper}>
              <Text style={s.sectionHeader}>
                แนะนำ
              </Text>
            </View>
          ),
        },
      ]),
    };
  }

  render() {
    return (
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
                    uri: data.place_picture,
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
                <Text style={s.title}>
                  {data.place_name}
                </Text>
                <View style={sCard.footerWrapper}>
                  <LocationLabel
                    label={`${data.place_district}, ${data.place_province}`}
                    size={13}
                  />
                  <StarRating
                    size={13}
                    rating={data.place_total_rating}
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
                  {data.place_name}
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

PlaceScreen.navigationOptions = {
  // headerBackTitle: 'Back',
  headerTintColor: '#fff',
  headerTransparent: true,
  headerStyle: {
    borderBottomColor: 'rgba(0,0,0,0)',
  },
  // headerRight: <Text></Text>,
};

export default PlaceScreen;
