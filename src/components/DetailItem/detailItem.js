import { View, Text } from 'react-native';
import React from 'react';
import styles from './detailItem.style';

export default function DetailItem({ item }) {
  let amount = item[1];
  let value = item[0];
  let toplam = amount * value;

  function formatToCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.amountText, {
        textAlign: 'left'
      }]}>{formatToCurrency(toplam)}</Text>
      <Text style={[styles.valueText, { textAlign: 'center' }]}>{amount}</Text>
      <Text style={[styles.valueText, { textAlign: 'right' }]}>{value}</Text>

    </View>
  );
}
