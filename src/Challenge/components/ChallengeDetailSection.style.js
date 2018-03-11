import { StyleSheet } from 'react-native';
import { sConst } from '../../_constants';
import { Colors } from '../../_utils';

export default StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontFamily: sConst.FontThHeader,
    marginBottom: 15,
  },
  label: {
    fontSize: 24,
    fontWeight: '600',
    color: '#222',
    marginBottom: 15,
  },
  timeLeftWrapper: {
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    marginBottom: 15,
    overflow: 'hidden',
  },
  timeLeft: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: Colors.border,
    backgroundColor: '#000',
  },
  timeLeftText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  periodString: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    paddingTop: 9,
  },
});
