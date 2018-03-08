import { StyleSheet } from 'react-native';
import { sConst } from '../_constants';
import Colors from './colors';

export default StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    paddingHorizontal: sConst.horizontalPad,
    backgroundColor: '#fff',
    flex: 1,
  },
  horizontalPad: {
    paddingHorizontal: sConst.horizontalPad,
  },
  header: {
    fontWeight: 'bold',
    paddingHorizontal: 32,
    fontSize: 22,
    marginBottom: 15,
  },
  headerFront: {
    color: Colors.textGrey,
    marginRight: 100,
  },
});
