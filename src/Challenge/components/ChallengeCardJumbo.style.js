import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../_utils';

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
    paddingBottom: 12,
    paddingTop: 72,
    paddingHorizontal: innerHorizontalPad,
  },
  title: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Reward
  rewardWrapper: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  rewardIconWrapper: {
    width: 32,
    height: 32,
    backgroundColor: Colors.mainDark,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  rewardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
