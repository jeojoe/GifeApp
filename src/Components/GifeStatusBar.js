import React from 'react';
import {
  StatusBar,
} from 'react-native';

import { Colors } from '../_utils';

const GifeStatusBar = ({ white }) => (
  <StatusBar
    barStyle={white ? 'dark-content' : 'light-content'}
    backgroundColor={white ? '#fff' : Colors.main}
  />
);

export default GifeStatusBar;
