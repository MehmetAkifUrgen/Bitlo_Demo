import { StyleSheet } from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: '2%',
    marginTop: 25,
    marginBottom: 5
  },
  valueText: {
    fontSize: 15,
    color: colors.black,
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 15,
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'right',
    color: colors.black
  },
});
