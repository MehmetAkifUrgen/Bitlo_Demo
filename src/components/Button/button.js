import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './button.style'

export default function LoginButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.value}</Text>
    </TouchableOpacity>
  )
}