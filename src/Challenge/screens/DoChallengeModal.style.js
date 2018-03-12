import { StyleSheet } from 'react-native';
import { sConst } from '../../_constants';

export default StyleSheet.create({
  gradientBg: {
    flex: 1,
  },
  wrapper: {
    paddingTop: 60,
    alignItems: 'center',
  },
  header: {
    paddingRight: 6,
    fontFamily: 'Bangers-Regular',
    textAlign: 'center',
    color: '#fff',
    fontSize: 56,
    marginBottom: 5,
  },
  subHeader: {
    fontFamily: sConst.FontThHeader,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
});
