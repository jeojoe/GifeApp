import { StyleSheet, Dimensions } from 'react-native';
import { sConst } from '../../_constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontFamily: sConst.FontThHeader,
    fontSize: 16,
    flex: 0,
  },
  iconWrapper: {
    flexBasis: 32,
    height: 32,
    marginRight: 12,
  },
  label: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  sponsorHeader: {
    fontFamily: sConst.FontThHeader,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 7,
    textAlign: 'center',
  },
  sponsorImage: {
    height: (width - 40) * sConst.sponsorImageRatio,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
});
