// @flow
import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

// dummy
import { allChallenges } from '../../dummyData';
import { ChallengeCardJumbo } from '../../Challenge';
import s, { sliderWidth, itemWidth } from './SpotlightCarousel.style';

type Props = {};

class SpotlightCarousel extends Component<Props> {
  _renderItems = ({ item, index }) => {
    console.log(item, index);
    return (
      <ChallengeCardJumbo
        title={item.challenge_name}
        picture={item.challenge_picture}
        endDate={item.challenge_end_date}
      />
    );
  }

  render() {
    return (
      <Carousel
        data={allChallenges}
        renderItem={this._renderItems}
        sliderWidth={sliderWidth}
        itemWidth={ChallengeCardJumbo.width}
      />
    );
  }
}

export default SpotlightCarousel;
