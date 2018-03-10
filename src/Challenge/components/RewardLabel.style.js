import { StyleSheet } from 'react-native';

import { Colors } from '../../_utils';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  iconWrapper: {
    backgroundColor: Colors.mainDark,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
});
