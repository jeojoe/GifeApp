import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export const cardHeight = viewportWidth * 0.865;
export const cardWidth = cardHeight;

const innerHorizontalPad = '7%';

export default StyleSheet.create({
  imageWrapper: {
    height: cardHeight,
    width: cardWidth,
    borderRadius: 10,
    overflow: 'hidden',
  },
  timeLeft: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  flexSpace: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  // Header
  headerWrapper: {
    paddingBottom: 10,
    paddingTop: 72,
    paddingHorizontal: innerHorizontalPad,
  },
  title: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Reward
  rewardWrapper: {
    height: 47,
    justifyContent: 'center',
    paddingHorizontal: innerHorizontalPad,
  },
  rewardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
