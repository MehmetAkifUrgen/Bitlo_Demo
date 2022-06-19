import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './item.style';

export default function Item({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.coinName}>
        <Text style={styles.text}>{item.marketCode}</Text>
        <Text style={[styles.text, { color: 'grey', fontWeight: 'normal' }]}>
          {'Vol(24H):' + item.volume24h.substring(0, 11)}
        </Text>
      </View>
      <View style={styles.value}>
        <Text style={styles.text}>{item.currentQuote}</Text>
        <View
          style={[
            styles.percent,
            {
              backgroundColor:
                item.change24hPercent > 0 ? '#00C186' : '#FF5761',
            },
          ]}>
          <Text style={styles.percentText}>
            {item.change24hPercent.substring(0, 4) + '%'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
