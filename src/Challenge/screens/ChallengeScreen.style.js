import { StyleSheet, Dimensions } from 'react-native';
import { sConst } from '../../_constants';

const { width } = Dimensions.get('window');
export const PARALLAX_HEADER_HEIGHT = width - 20;
export const STICKY_HEADER_HEIGHT = 65;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height: PARALLAX_HEADER_HEIGHT,
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    paddingLeft: 30,
    justifyContent: 'flex-end',
  },
  stickyTitle: {
    color: 'white',
    fontSize: 16,
    margin: 10,
    marginBottom: 12,
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20,
  },
  parallaxHeader: {
    paddingTop: 30,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 28,
    paddingVertical: 5,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '600',
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  doChallengeBtn: {
    flexBasis: 65,
    height: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  doChallengeText: {
    fontFamily: sConst.FontThHeader,
    color: '#fff',
    fontSize: 22,
  },
  logo: {
    marginRight: 15,
  },
});
