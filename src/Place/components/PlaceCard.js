// @flow
import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { LocationLabel, StarRating } from '../../Components';
import s from './PlaceCard.style';

type Props = {
  title: string,
  locationLabel: string,
  rating: number,
  bannerImageUrl: string,
  jumbo?: boolean,
  hasButton?: boolean,
  buttonType?: 'qr' | 'checkin',
};
class PlaceCard extends Component<Props> {
  static defaultProps = {
    jumbo: false,
    hasButton: false,
    buttonType: null,
  }

  _pressQr = () => {
    console.log('press qr');
  }

  _pressCheckIn = () => {
    console.log('press checkin');
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {}}
        style={this.props.jumbo ? s.jumboWrapper : s.wrapper}
      >
        <ImageBackground
          source={{ uri: this.props.bannerImageUrl }}
          style={s.imageBg}
        >
          <LinearGradient
            colors={['transparent', '#000']}
            start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}
            style={s.headerGradientWrapper}
          >
            {/* Title */}
            <Text style={s.title} numberOfLines={3}>
              {this.props.title}
            </Text>
            {/* Footer */}
            <View style={s.footerWrapper}>
              <LocationLabel
                label={this.props.locationLabel}
              />
              <StarRating
                rating={this.props.rating}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default PlaceCard;
