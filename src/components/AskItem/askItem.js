import {View, Text} from 'react-native';
import React from 'react';
import styles from './askItem.style';

export default function AskItem({item}) {
  let amount = item[1];
  let value = item[0];
  let toplam = amount * value;

  function formatToCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.amountText}>{amount}</Text>
      <Text style={[styles.valueText]}>{formatToCurrency(toplam)}</Text>
      <Text style={[styles.valueText,{textAlign:'right'}]}>{value}</Text>
      
    </View>
  );
}
