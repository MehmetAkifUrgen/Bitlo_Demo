import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './loginButton.style'

export default function LoginButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.value}</Text>
    </TouchableOpacity>
  )
}