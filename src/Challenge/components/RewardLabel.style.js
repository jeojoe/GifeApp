import { StyleSheet } from 'react-native';

import { Colors } from '../../_utils';

export default StyleSheet.create({
  wrapper: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  iconWrapper: {
    width: 32,
    height: 32,
    backgroundColor: Colors.mainDark,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
