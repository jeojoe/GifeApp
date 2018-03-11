import { StyleSheet, Dimensions } from 'react-native';
import { sConst } from '../../_constants';
import { Colors } from '../../_utils';

const { width } = Dimensions.get('window');

export const PARALLAX_HEADER_HEIGHT = (width - 20) * 0.7;
export const STICKY_HEADER_HEIGHT = 65;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
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
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 28,
    paddingVertical: 5,
    marginBottom: 5,
    fontWeight: '600',
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  sectionWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  sectionHeader: {
    fontFamily: sConst.FontThHeader,
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
