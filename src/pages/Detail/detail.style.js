import { StyleSheet } from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  separator: {
    backgroundColor: colors.grey,
    height: 0.5,
    marginHorizontal: '2%'
  }
});
