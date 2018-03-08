import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export const cardHeight = viewportWidth * 0.865;
export const cardWidth = cardHeight;

export default StyleSheet.create({
  imageWrapper: {
    height: cardHeight,
    width: cardWidth,
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    backgroundColor: 'transparent',
  },
  timeLeft: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
});
