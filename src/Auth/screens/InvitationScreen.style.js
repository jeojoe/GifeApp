import { StyleSheet } from 'react-native';
import { Colors } from '../../_utils';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '10%',
  },
  logo: {
    height: 70,
    width: 170,
    marginBottom: 15,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 35,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: Colors.lightPink,
    marginBottom: 15,
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
