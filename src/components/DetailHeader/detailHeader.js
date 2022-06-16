import {View, Text} from 'react-native';
import React from 'react';
import styles from './detailHeader.style';

export default function DetailHeader(props) {
    let textSplit = props.name.split("-");
  return (
    <View style={styles.container}>
      <Text style={[styles.valueText, {textAlign: 'left'}]}>Toplam(TRY)</Text>
      <Text style={styles.valueText}>{textSplit[0]}</Text>
      <Text style={styles.amountText}>{props.right}</Text>
    </View>
  );
}
