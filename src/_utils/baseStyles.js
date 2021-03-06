import { StyleSheet } from 'react-native';
import { sConst } from '../_constants';
import Colors from './colors';

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: sConst.horizontalPad,
    flex: 1,
  },
  horizontalPad: {
    paddingHorizontal: sConst.horizontalPad,
  },
  header: {
    paddingHorizontal: 32,
    fontSize: 24,
    marginBottom: 18,
    fontFamily: sConst.FontThHeader,
    color: '#222',
  },
  headerFront: {
    color: Colors.textGrey,
    marginRight: 100,
  },
  shadow: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 10,
    shadowRadius: 10,
  },
});
