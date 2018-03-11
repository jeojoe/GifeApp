// @flow
import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

type Props = {
  title: string,
  locationLabel: string,
  rating: number,
  bannerImageUrl: string,
  hasButton?: boolean,
  buttonType?: 'qr' | 'checkin' | null,
};
class PlaceCard extends Component<Props> {
  static defaultProps = {
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
      <View><Text>Hey this is place</Text></View>
    );
  }
}

export default PlaceCard;
