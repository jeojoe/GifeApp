// @flow
import React from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { Image } from 'react-native';

import { logoSmall, logoSmallBw, logoSmallWhite } from '../_assets';

type Props = {
  type?: 'grey' | 'white' | 'normal',
  size: number,
  style?: StyleObj | null,
};
const Logo = (props: Props) => {
  let source = logoSmall;
  let size = 26;

  if (props.type === 'grey') {
    source = logoSmallBw;
  } else if (props.type === 'white') {
    source = logoSmallWhite;
  }

  if (props.size) size = props.size; // eslint-disable-line

  return (
    <Image
      source={source}
      style={[{ width: size, height: size }, props.style]}
    />
  );
};

Logo.defaultProps = {
  type: 'normal',
  style: null,
};

export default Logo;
