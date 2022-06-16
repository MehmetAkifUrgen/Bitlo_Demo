import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: '2%',
    marginTop:25,
    marginBottom:5
  },
  valueText: {
    fontSize: 15,
    color: 'black',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 15,
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'right',
    color:'black'
  },
});
