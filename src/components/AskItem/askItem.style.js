import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
    marginHorizontal: '2%',
    borderBottomWidth:1,
    borderBottomColor:'grey'
  },
  valueText: {
    fontSize: 15,
    color: 'black',
    flex:1,
    textAlign: 'center',
  },
  amountText: {
    fontSize: 15,
    flex:1,
    fontWeight: 'bold',
    color: '#FF5761',
    textAlign: 'left',
  },
});
