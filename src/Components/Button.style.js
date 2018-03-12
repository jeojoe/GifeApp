import { StyleSheet } from 'react-native';
import { sConst } from '../_constants';
import { Colors } from '../_utils';

export default StyleSheet.create({
  wrapper: {
    height: 52,
    borderRadius: 5,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.buttonShadowOnPink,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
    fontFamily: sConst.FontThHeader,
  },
});
