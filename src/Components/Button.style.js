import { StyleSheet } from 'react-native';

import { Colors } from '../_utils';

export default StyleSheet.create({
  button: {
    height: 40,
    shadowColor: Colors.buttonShadowOnPink,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  gradient: {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
