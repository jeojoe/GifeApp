import { StyleSheet } from 'react-native';

import { sConst } from '../../_constants';
import { Colors } from '../../_utils';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  imageWrapper: {
    height: 150,
    width: '100%',
    borderRadius: 7,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  timeLeft: {
    position: 'absolute',
    right: 7,
    top: 7,
  },
  title: {
    fontWeight: '500',
    marginBottom: 5,
  },
});
