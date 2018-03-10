import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const sliderWidth = width;

export default StyleSheet.create({
  wrapper: {
    marginBottom: 50,
  },
});
