import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
    marginHorizontal: '2%',
    borderBottomWidth:1,
    borderBottomColor:colors.grey
  },
  valueText: {
    fontSize: 15,
    color: colors.black,
    flex:1,
    textAlign: 'center',
  },
  amountText: {
    fontSize: 15,
    flex:1,
    fontWeight: 'bold',
    color: colors.green,
    textAlign: 'right',
  },
});
