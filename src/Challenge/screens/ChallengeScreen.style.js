import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const AVATAR_SIZE = 120;
export const ROW_HEIGHT = 60;
export const PARALLAX_HEADER_HEIGHT = width - 20;
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
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  rowText: {
    fontSize: 20,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
